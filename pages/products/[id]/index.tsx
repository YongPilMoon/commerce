import Image from 'next/image'
import Carousel from 'nuka-carousel/lib/carousel'
import { useState, useEffect } from 'react'
import CustomEditor from '@/components/Editor'
import { useRouter } from 'next/router'
import { convertFromRaw, convertToRaw, EditorState } from 'draft-js'
import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import { products, Cart, OrderItem } from '@prisma/client'
import { format } from 'date-fns'
import { CATEGORY_MAP } from 'constants/products'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { Button } from '@mantine/core'
import { IconHeart, IconHeartbeat, IconShoppingCart } from '@tabler/icons'
import { useSession } from 'next-auth/react'
import CountControl from '@/components/CountControl'
import { CART_QUERY_KEY } from '../../cart'
import { ORDER_QUERY_KEY } from 'pages/my'

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const product = await fetch(
    `http://localhost:3000/api/get-product?id=${context.params?.id}`
  )
    .then((res) => res.json())
    .then((data) => data.items)
  return {
    props: {
      product: { ...product, images: [product.image_url, product.image_url] },
    },
  }
}

const WISHLIST_QUERY_KEY = '/api/get-wishlist'

function Products(props: { product: products & { images: string[] } }) {
  const [index, setIndex] = useState(0)
  const { data: session } = useSession()
  const [quantity, setQuantity] = useState<number | undefined>(1)

  const router = useRouter()
  const queryClient = useQueryClient()
  const { id: productId } = router.query
  const [editorState, setEditorState] = useState<EditorState | undefined>(
    () => {
      console.log('props.product.contents:', props.product.contents)
      return props.product.contents
        ? EditorState.createWithContent(
            convertFromRaw(JSON.parse(props.product.contents))
          )
        : EditorState.createEmpty()
    }
  )

  const { data: wishlist } = useQuery([WISHLIST_QUERY_KEY], () =>
    fetch(WISHLIST_QUERY_KEY)
      .then((res) => res.json())
      .then((data) => data.items)
  )

  const { mutate, isLoading } = useMutation<unknown, unknown, string, any>(
    (productId) =>
      fetch('/api/update-wishlist', {
        method: 'POST',
        body: JSON.stringify({ productId }),
      })
        .then((data) => data.json())
        .then((res) => res.items),
    {
      onMutate: async (newTodo) => {
        await queryClient.cancelQueries([WISHLIST_QUERY_KEY])

        const previous = queryClient.getQueryData([WISHLIST_QUERY_KEY])

        queryClient.setQueryData<string[]>([WISHLIST_QUERY_KEY], (old) =>
          old
            ? old.includes(String(productId))
              ? old.filter((id) => id !== String(productId))
              : old.concat(String(productId))
            : []
        )

        // Return a context object with the snapshotted value
        return { previous }
      },
      onError: (error, _, context) => {
        queryClient.setQueryData([WISHLIST_QUERY_KEY], context.previous)
      },
      onSuccess: () => {
        queryClient.invalidateQueries([WISHLIST_QUERY_KEY])
      },
    }
  )

  const { mutateAsync: addCart } = useMutation<
    unknown,
    unknown,
    Omit<Cart, 'id' | 'userId'>,
    any
  >(
    (item) =>
      fetch('/api/add-cart', {
        method: 'POST',
        body: JSON.stringify({ item }),
      }),
    {
      onMutate: () => {
        queryClient.invalidateQueries([CART_QUERY_KEY])
      },
      onSuccess: () => {
        router.push('/cart')
      },
    }
  )

  const { mutateAsync: addOrder } = useMutation<
    unknown,
    unknown,
    Omit<OrderItem, 'id'>[],
    any
  >(
    (items) =>
      fetch('/api/add-order', {
        method: 'POST',
        body: JSON.stringify({ items }),
      }),
    {
      onMutate: () => {
        queryClient.invalidateQueries([ORDER_QUERY_KEY])
      },
      onSuccess: () => {
        router.push('/my')
      },
    }
  )

  const product = props.product

  const validate = (type: 'cart' | 'order') => {
    if (quantity == null) {
      alert('최소 수량을 선택하세요')
      return
    }

    if (type === 'cart') {
      addCart({
        productId: product.id,
        quantity,
        amount: product.price * quantity,
      })
    }

    if (type === 'order') {
      addOrder([
        {
          productId: product.id,
          quantity,
          price: product.price,
          amount: product.price * quantity,
        },
      ])
    }
  }

  const isWished = wishlist ? wishlist.includes(productId) : false

  return (
    <>
      {product != null && productId != null ? (
        <div className="flex">
          <div style={{ width: 600 }}>
            <Carousel
              animation="fade"
              withoutControls
              wrapAround
              speed={10}
              slideIndex={index}
            >
              {product.images.map((url, idx) => (
                <Image
                  key={`${url}-carousel-${idx}`}
                  src={url}
                  alt="이미지"
                  width={600}
                  height={600}
                />
              ))}
            </Carousel>
            <div className="flex space-x-4 mt-2">
              {product.images.map((url, idx) => (
                <div key={`${url}-thumb-${idx}`} onClick={() => setIndex(idx)}>
                  <Image src={url} alt="image" width={100} height={100} />
                </div>
              ))}
            </div>
            {editorState != null && (
              <CustomEditor editorState={editorState} readOnly />
            )}
          </div>
          <div style={{ maxWidth: 600 }} className="flex flex-col space-y-6">
            <div className="text-lg text-zinc-400">
              {CATEGORY_MAP[product.category_id]}
            </div>
            <div className="text-4xl font-semibold">{product.name}</div>
            <div className="text-lg">
              {product.price.toLocaleString('ko-kr')}원
            </div>
            <div>
              <span className="text-lg">수량</span>
              <CountControl value={quantity} setValue={setQuantity} />
            </div>
            <div className="flex space-x-3">
              <Button
                leftIcon={<IconShoppingCart size={20} stroke={1.5} />}
                style={{ backgroundColor: 'black' }}
                radius="xl"
                size="md"
                styles={{
                  root: { paddingRight: 14, height: 48 },
                }}
                onClick={() => {
                  if (session == null) {
                    alert('로그인이 필요해요.')
                    router.push('/auth/login')
                  }
                  validate('cart')
                }}
              >
                장바구니
              </Button>
              <Button
                // loading={isLoading}
                disabled={wishlist == null}
                leftIcon={
                  isWished ? (
                    <IconHeartbeat size={20} stroke={1.5} />
                  ) : (
                    <IconHeart size={20} stroke={1.5} />
                  )
                }
                style={{ backgroundColor: isWished ? 'red' : 'grey' }}
                radius="xl"
                size="md"
                styles={{
                  root: { paddingRight: 14, height: 48 },
                }}
                onClick={() => {
                  if (session == null) {
                    alert('로그인이 필요해요.')
                    router.push('/auth/login')
                  }
                  mutate(String(productId))
                }}
              >
                찜하기
              </Button>
            </div>
            <Button
              style={{ backgroundColor: 'black', width: 240 }}
              radius="xl"
              size="md"
              styles={{
                root: { paddingRight: 14, height: 48 },
              }}
              onClick={() => {
                if (session == null) {
                  alert('로그인이 필요해요.')
                  router.push('/auth/login')
                }
                validate('order')
              }}
            >
              구매하기
            </Button>
            <div className="text-sm text-zinc-300">
              등록: {format(new Date(product.createdAt), 'yyyy년 MM월 dd일')}
            </div>
          </div>
        </div>
      ) : (
        <div>로딩중</div>
      )}
    </>
  )
}

export default Products
