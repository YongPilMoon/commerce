import { products } from '@prisma/client'
import Image from 'next/image'
import { useCallback, useEffect, useState } from 'react'
import { TAKE } from 'constants/products'

function Products() {
  const [skip, setSkip] = useState(0)
  const [products, setProducts] = useState<products[]>([])

  useEffect(() => {
    fetch(`api/get-products?skip=0&take=${TAKE}`)
      .then((res) => res.json())
      .then((data) => setProducts(data.items))
  }, [])

  const getProducts = useCallback(() => {
    const next = skip + TAKE
    fetch(`api/get-products?skip=${next}&take=${TAKE}`)
      .then((res) => res.json())
      .then((data) => {
        const list = products.concat(data.items)
        setProducts(list)
      })
    setSkip(next)
  }, [skip, products])

  return (
    <div className="mt-36 mb-36">
      {products && (
        <div className="grid grid-cols-3 gap-5">
          {products.map((item) => (
            <div key={item.id}>
              <Image
                fill
                className="rounded"
                alt={item.name}
                src={item.image_url ?? ''}
              />
              <div className="flex">
                <span>{item.name}</span>
                <span>{item.price.toLocaleString('ko-KR')}원</span>
              </div>
              <div className="text-zinc-400">
                {item.category_id === 1 && '의류'}
              </div>
            </div>
          ))}
        </div>
      )}
      <button
        className="w-full rounded mt-20 bg-zinc-200 p-4"
        onClick={getProducts}
      >
        더보기
      </button>
    </div>
  )
}

export default Products
