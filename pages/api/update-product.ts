import type { NextApiRequest, NextApiResponse } from 'next'
import { Client } from '@notionhq/client'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function updateProduct(id: number, contents: string) {
  try {
    const response = await prisma.products.update({
      where: {
        id: id,
      },
      data: {
        contents: contents,
      },
    })
    console.log(response)
    return response
  } catch (error) {
    console.error(JSON.stringify(error))
  }
}
type Data = {
  items?: any
  message: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { id, contents } = JSON.parse(req.body)

  if (id == null || contents == null) {
    return res.status(400).json({ message: 'No id or contents' })
  }

  try {
    const products = await updateProduct(Number(id), contents)
    res.status(200).json({ items: products, message: `Success` })
  } catch (error) {
    res.status(400).json({ message: `Failed` })
  }
}
