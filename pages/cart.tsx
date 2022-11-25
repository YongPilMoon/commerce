import CountControl from '@/components/CountControl'
import Image from 'next/image'
import { useState, useEffect, useMemo } from 'react'
import { IconRefresh, IconX, IconShoppingCart } from '@tabler/icons'
import styled from '@emotion/styled'
import { Button } from '@mantine/core'
import { useQuery } from '@tanstack/react-query'
import { products } from '@prisma/client'
import { useRouter } from 'next/router'
import { CATEGORY_MAP } from 'constants/products'

interface CartItem {
  name: string
  productId: number
  price: number
  quantity: number
  amount: number
  image_url: string
}

const Cart = () => {
  const router = useRouter()
  const [data, setData] = useState<CartItem[]>([])

  const diliveryAmount = 5000
  const discountAmount = 0
  const amount = useMemo(() => {
    return data
      .map((item) => item.amount)
      .reduce((prev, curr) => prev + curr, 0)
  }, [data])

  useEffect(() => {
    const mockData = [
      {
        name: '멋드러진 신발',
        productId: 100,
        price: 20000,
        quantity: 1,
        amount: 20000,
        image_url:
          'https://i.ebayimg.com/thumbs/images/g/J7wAAOSwt~1jdNUk/s-l225.webp',
      },
      {
        name: '멋드러진 티',
        productId: 100,
        price: 30000,
        quantity: 2,
        amount: 60000,
        image_url:
          'https://i.ebayimg.com/thumbs/images/g/PM4AAOSwbRhjduqr/s-l225.webp',
      },
    ]

    setData(mockData)
  }, [])

  const { data: products } = useQuery<
    { items: products[] },
    unknown,
    products[]
  >(
    [`/api/get-products?skip=0&take=3`],
    () => fetch(`/api/get-products?skip=0&take=3`).then((res) => res.json()),
    {
      select: (data) => data.items,
    }
  )

  const handleOrder = () => {
    alert(`장바구니에 담긴 것들  ${JSON.stringify(data)} 주문`)
  }

  return (
    <div>
      <span className="text-2x; mb-3">Cart ({data.length})</span>
      <div className="flex">
        <div className="flex flex-col p-4 space-y-4 flex-1">
          {data?.length > 0 ? (
            data.map((item, idx) => <Item key={idx} {...item} />)
          ) : (
            <div>장바구니에 아무것도 없습니다.</div>
          )}
        </div>
        <div className="px-4">
          <div
            className="flex flex-col p-4 space-y-4"
            style={{ minWidth: 300, border: '1px solid grey' }}
          >
            <div>Info</div>
            <Row>
              <span>금액</span>
              <span>{amount.toLocaleString('ko-kr')} 원</span>
            </Row>
            <Row>
              <span>배송비</span>
              <span>{diliveryAmount.toLocaleString('ko-kr')} 원</span>
            </Row>
            <Row>
              <span>할인금액</span>
              <span>{discountAmount.toLocaleString('ko-kr')} 원</span>
            </Row>
            <Row>
              <span className="font-semibold">결제 금액</span>
              <span className="font-semibold text-red-500">
                {(amount + diliveryAmount - discountAmount).toLocaleString(
                  'ko-kr'
                )}
                원
              </span>
            </Row>

            <Button
              style={{ backgroundColor: 'black' }}
              radius="xl"
              size="md"
              styles={{
                root: { height: 48 },
              }}
              onClick={handleOrder}
            >
              구매하기
            </Button>
          </div>
        </div>
      </div>
      <div className="mt-32">
        <p>추천상품</p>
        {products && (
          <div className="grid grid-cols-3 gap-5 ">
            {products.map((item) => (
              <div
                key={item.id}
                className="w80"
                onClick={() => router.push(`/products/${item.id}`)}
              >
                <Image
                  className="rounded h-52"
                  alt={item.name}
                  src={item.image_url ?? ''}
                  width={300}
                  height={208}
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOMiQmoBwADrQGJ0xZOvgAAAABJRU5ErkJggg=="
                />
                <div className="flex">
                  <span>{item.name}</span>
                  <span className="ml-auto">
                    {item.price.toLocaleString('ko-KR')}원
                  </span>
                </div>
                <div className="text-zinc-400">
                  {CATEGORY_MAP[item.category_id - 1]}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

const Item = (props: CartItem) => {
  const router = useRouter()
  const [quantity, setQuantity] = useState<number | undefined>(props.quantity)
  const [amount, setAmount] = useState<number>(props.quantity)

  useEffect(() => {
    if (quantity != null) {
      setAmount(quantity * props.price)
    }
  }, [quantity, props.price])

  const handleUpdate = () => {
    // Todo 장바구니에서 삭제 기능 구현
    alert(`장바구니에서 ${props.name} 삭제`)
  }

  const handleDelete = () => {
    // Todo 장바구니에서 삭제 기능 구현
    alert(`장바구니에서 ${props.name} 삭제`)
  }

  return (
    <div className="w-full flex p-4" style={{ borderBottom: '1px solid grey' }}>
      <Image
        src={props.image_url}
        width={155}
        height={195}
        alt={props.name}
        onClick={() => router.push(`/products/${props.productId}`)}
      />
      <div className="flex flex-col nl-4">
        <span className="font-semibold mb-2">{props.name}</span>
        <span className="mb-auto">
          가격: {props.price.toLocaleString('ko-kr')} 원
        </span>
        <div className="flex items-center space-x-4">
          <CountControl value={quantity} setValue={setQuantity} />
          <IconRefresh onClick={handleUpdate} />
        </div>
      </div>
      <div className="flex ml-auto space-x-4">
        <span>{amount.toLocaleString('ko-kr')} 원</span>
        <IconX onClick={handleDelete} />
      </div>
    </div>
  )
}

export default Cart

const Row = styled.div`
  display: flex;
  * ~ * {
    margin-left: auto;
  }
`