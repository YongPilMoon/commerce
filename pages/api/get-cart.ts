import type { NextApiRequest, NextApiResponse } from 'next'
import { Client } from '@notionhq/client'
import { PrismaClient } from '@prisma/client'
import { unstable_getServerSession } from 'next-auth'
import { authOptions } from './auth/[...nextauth]'

const prisma = new PrismaClient()

async function getCart(userId: string) {
  try {
    const cart =
      await prisma.$queryRaw`select c.id, userId, quantity, amount, price, name, image_url, productId from Cart as c join products as p where c.productId=p.id and c.userId=${userId};
    `

    return cart
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
  const session = await unstable_getServerSession(req, res, authOptions)

  if (session == null) {
    res.status(200).json({ items: [], message: `no Session` })
    return
  }

  try {
    const wishlist = await getCart(String(session.id))
    res.status(200).json({ items: wishlist, message: `Success` })
  } catch (error) {
    res.status(400).json({ message: `Failed` })
  }
}
