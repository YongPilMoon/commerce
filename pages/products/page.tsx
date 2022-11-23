import { categories, products } from '@prisma/client'
import Image from 'next/image'
import { ChangeEventHandler, useEffect, useState } from 'react'
import { Input, Pagination, SegmentedControl, Select } from '@mantine/core'
import { FILTERS, TAKE } from 'constants/products'
import { CATEGORY_MAP } from '../../constants/products'
import styled from '@emotion/styled'
import { IconAt, IconSearch } from '@tabler/icons'
import useDebounce from '../../hooks/useDebounce'
import { useQuery } from '@tanstack/react-query'

const ContainerStyle = styled.div`
  width: 940px;
`

function Products() {
  const [activePage, setPage] = useState(1)
  const [total, setTotal] = useState(0)
  const [categories, setCategories] = useState<categories[]>([])
  const [selectedCategory, setCategory] = useState<string>('-1')
  // const [products, setProducts] = useState<products[]>([])
  const [selectedFilter, setFilter] = useState<string | null>(FILTERS[0].value)
  const [keyword, setKeyword] = useState('')

  const debouncedKeyword = useDebounce<string>(keyword)

  useEffect(() => {
    fetch(`/api/get-categories`)
      .then((res) => res.json())
      .then((data) => setCategories(data.items))
  }, [])

  useEffect(() => {
    fetch(
      `/api/get-products-count?category=${selectedCategory}&contains=${debouncedKeyword}`
    )
      .then((res) => res.json())
      .then((data) => setTotal(Math.ceil(data.items / TAKE)))
  }, [selectedCategory, debouncedKeyword])

  // useEffect(() => {
  //   const skip = TAKE * (activePage - 1)
  //   fetch(
  //     `/api/get-products?skip=${skip}&take=${TAKE}&category=${selectedCategory}&orderBy=${selectedFilter}&contains=${debouncedKeyword}`
  //   )
  //     .then((res) => res.json())
  //     .then((data) => setProducts(data.items))
  // }, [activePage, selectedCategory, selectedFilter, debouncedKeyword])

  const { data: products } = useQuery<
    { items: products[] },
    unknown,
    products[]
  >(
    [
      `/api/get-products?skip=${
        TAKE * (activePage - 1)
      }&take=${TAKE}&category=${selectedCategory}&orderBy=${selectedFilter}&contains=${debouncedKeyword}`,
    ],
    () =>
      fetch(
        `/api/get-products?skip=${
          TAKE * (activePage - 1)
        }&take=${TAKE}&category=${selectedCategory}&orderBy=${selectedFilter}&contains=${debouncedKeyword}`
      ).then((res) => res.json()),
    {
      select: (data) => data.items,
    }
  )

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setKeyword(e.target.value)
  }

  return (
    <ContainerStyle className="mt-36 mb-36 m-auto">
      <div className="mb-4">
        <Input
          icon={<IconSearch />}
          placeholder="Search"
          value={keyword}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <Select value={selectedFilter} onChange={setFilter} data={FILTERS} />
      </div>
      {categories && (
        <div className="mb-4">
          <SegmentedControl
            value={selectedCategory}
            onChange={setCategory}
            data={[
              { label: 'ALL', value: '-1' },
              ...categories.map((category) => ({
                label: category.name,
                value: String(category.id),
              })),
            ]}
            color="dark"
          />
        </div>
      )}
      {products && (
        <div className="grid grid-cols-3 gap-5 ">
          {products.map((item) => (
            <div key={item.id} className="w80">
              <Image
                className="rounded h-52"
                alt={item.name}
                src={item.image_url ?? ''}
                width={300}
                height={208}
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg=="
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
      <div className="w-full flex mt-5">
        <Pagination
          className="m-auto"
          page={activePage}
          onChange={setPage}
          total={total}
        />
      </div>
    </ContainerStyle>
  )
}

export default Products
