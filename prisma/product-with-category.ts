import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient()

const sneakers = [
  {
    name: `NEW Mens Rivers Classic Sneaker | Athletic Footwear Shoes`,
    contents: `{"blocks":[{"key":"65s42","text":"NEW Mens Rivers Classic Sneaker | Athletic Footwear Shoes","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":21,"style":"color-rgb(0,0,0)"},{"offset":0,"length":21,"style":"fontsize-medium"},{"offset":0,"length":21,"style":"fontfamily-ui-sans-serif, system-ui, -apple-system, \"system-ui\", \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji"}],"entityRanges":[],"data":{}}`,
    category_id: 1,
    image_url: `https://i.ebayimg.com/thumbs/images/g/bb8AAOSwDFBjdPFD/s-l225.webp`,
    price: Math.floor(Math.random() * (100000 - 20000) + 20000),
  },
  {
    name: `Womens Casual Breathable Mesh Running Sneakers Sports Air Cushion Tennis Shoes`,
    contents: `{"blocks":[{"key":"65s42","text":"Womens Casual Breathable Mesh Running Sneakers Sports Air Cushion Tennis Shoes","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":21,"style":"color-rgb(0,0,0)"},{"offset":0,"length":21,"style":"fontsize-medium"},{"offset":0,"length":21,"style":"fontfamily-ui-sans-serif, system-ui, -apple-system, \"system-ui\", \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji"}],"entityRanges":[],"data":{}}`,
    category_id: 1,
    image_url: `https://i.ebayimg.com/thumbs/images/g/9usAAOSwciRjExsu/s-l225.webp`,
    price: Math.floor(Math.random() * (100000 - 20000) + 20000),
  },
  {
    name: `JENN ARDOR Women's Fashion Platform Sneakers Low Top Canvas Flats Slip On Zipper`,
    contents: `{"blocks":[{"key":"65s42","text":"JENN ARDOR Women's Fashion Platform Sneakers Low Top Canvas Flats Slip On Zipper","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":21,"style":"color-rgb(0,0,0)"},{"offset":0,"length":21,"style":"fontsize-medium"},{"offset":0,"length":21,"style":"fontfamily-ui-sans-serif, system-ui, -apple-system, \"system-ui\", \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji"}],"entityRanges":[],"data":{}}`,
    category_id: 1,
    image_url: `https://i.ebayimg.com/thumbs/images/g/NGoAAOSweDBh1V7b/s-l225.webp`,
    price: Math.floor(Math.random() * (100000 - 20000) + 20000),
  },
  {
    name: `Women's Snow Boots Sneakers Shoes Fur Fleece High Top Winter Warm Hiking Fashion`,
    contents: `{"blocks":[{"key":"65s42","text":"Women's Snow Boots Sneakers Shoes Fur Fleece High Top Winter Warm Hiking Fashion","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":21,"style":"color-rgb(0,0,0)"},{"offset":0,"length":21,"style":"fontsize-medium"},{"offset":0,"length":21,"style":"fontfamily-ui-sans-serif, system-ui, -apple-system, \"system-ui\", \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji"}],"entityRanges":[],"data":{}}`,
    category_id: 1,
    image_url: `https://i.ebayimg.com/thumbs/images/g/bb8AAOSwDFBjdPFD/s-l225.webp`,
    price: Math.floor(Math.random() * (100000 - 20000) + 20000),
  },
  {
    name: `Nike Air Force 1 Low x Supreme White (CU9225-100) Men's Size 6-13`,
    contents: `{"blocks":[{"key":"65s42","text":"Nike Air Force 1 Low x Supreme White (CU9225-100) Men's Size 6-13","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":21,"style":"color-rgb(0,0,0)"},{"offset":0,"length":21,"style":"fontsize-medium"},{"offset":0,"length":21,"style":"fontfamily-ui-sans-serif, system-ui, -apple-system, \"system-ui\", \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji"}],"entityRanges":[],"data":{}}`,
    category_id: 1,
    image_url: `https://i.ebayimg.com/thumbs/images/g/vhUAAOSwgP1ivjL7/s-l225.webp`,
    price: Math.floor(Math.random() * (100000 - 20000) + 20000),
  },
  {
    name: `Nike Air Max 2017 Shoes Triple Black 849559-004 Men's Multi Sizes NEW`,
    contents: `{"blocks":[{"key":"65s42","text":"Nike Air Max 2017 Shoes Triple Black 849559-004 Men's Multi Sizes NEW","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":21,"style":"color-rgb(0,0,0)"},{"offset":0,"length":21,"style":"fontsize-medium"},{"offset":0,"length":21,"style":"fontfamily-ui-sans-serif, system-ui, -apple-system, \"system-ui\", \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji"}],"entityRanges":[],"data":{}}`,
    category_id: 1,
    image_url: `https://i.ebayimg.com/thumbs/images/g/-JUAAOSwR6ZjWCLP/s-l225.webp`,
    price: Math.floor(Math.random() * (100000 - 20000) + 20000),
  },
  {
    name: `Reebok Classic Nylon Men's Athletic Sneaker Running Shoe Casual Trainers #595`,
    contents: `{"blocks":[{"key":"65s42","text":"Reebok Classic Nylon Men's Athletic Sneaker Running Shoe Casual Trainers #595","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":21,"style":"color-rgb(0,0,0)"},{"offset":0,"length":21,"style":"fontsize-medium"},{"offset":0,"length":21,"style":"fontfamily-ui-sans-serif, system-ui, -apple-system, \"system-ui\", \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji"}],"entityRanges":[],"data":{}}`,
    category_id: 1,
    image_url: `https://i.ebayimg.com/thumbs/images/g/170AAOSwk9lieyKS/s-l225.webp`,
    price: Math.floor(Math.random() * (100000 - 20000) + 20000),
  },
  {
    name: `Nike Air Jordan 1 Mid I AJ1 Light Smoke Grey Black White Men Shoes 554724-092`,
    contents: `{"blocks":[{"key":"65s42","text":"Nike Air Jordan 1 Mid I AJ1 Light Smoke Grey Black White Men Shoes 554724-092","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":21,"style":"color-rgb(0,0,0)"},{"offset":0,"length":21,"style":"fontsize-medium"},{"offset":0,"length":21,"style":"fontfamily-ui-sans-serif, system-ui, -apple-system, \"system-ui\", \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji"}],"entityRanges":[],"data":{}}`,
    category_id: 1,
    image_url: `https://i.ebayimg.com/thumbs/images/g/Se4AAOSwwbpjOkk2/s-l225.webp`,
    price: Math.floor(Math.random() * (100000 - 20000) + 20000),
  },
  {
    name: `Nike Air Jordan 1 Retro High OG Lost and Found Red Men AJ1 Casual DZ5485-612`,
    contents: `{"blocks":[{"key":"65s42","text":"Nike Air Jordan 1 Retro High OG Lost and Found Red Men AJ1 Casual DZ5485-612","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":21,"style":"color-rgb(0,0,0)"},{"offset":0,"length":21,"style":"fontsize-medium"},{"offset":0,"length":21,"style":"fontfamily-ui-sans-serif, system-ui, -apple-system, \"system-ui\", \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji"}],"entityRanges":[],"data":{}}`,
    category_id: 1,
    image_url: `https://i.ebayimg.com/thumbs/images/g/k5UAAOSwPNhjcvEq/s-l225.webp`,
    price: Math.floor(Math.random() * (100000 - 20000) + 20000),
  },
  {
    name: `yeezy boost 350 turtle dove size 5`,
    contents: `{"blocks":[{"key":"65s42","text":"yeezy boost 350 turtle dove size 5","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":21,"style":"color-rgb(0,0,0)"},{"offset":0,"length":21,"style":"fontsize-medium"},{"offset":0,"length":21,"style":"fontfamily-ui-sans-serif, system-ui, -apple-system, \"system-ui\", \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji"}],"entityRanges":[],"data":{}}`,
    category_id: 1,
    image_url: `https://i.ebayimg.com/thumbs/images/g/uoMAAOSwQsFjfAkl/s-l225.webp`,
    price: Math.floor(Math.random() * (100000 - 20000) + 20000),
  },
]

const tshirts = [
  {
    name: `tshirt1`,
    contents: `{"blocks":[{"key":"65s42","text":"tshirt1","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":21,"style":"color-rgb(0,0,0)"},{"offset":0,"length":21,"style":"fontsize-medium"},{"offset":0,"length":21,"style":"fontfamily-ui-sans-serif, system-ui, -apple-system, \"system-ui\", \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji"}],"entityRanges":[],"data":{}}`,
    category_id: 2,
    image_url: `https://i.ebayimg.com/thumbs/images/g/pzYAAOSwTfBchwqb/s-l225.webp`,
    price: Math.floor(Math.random() * (100000 - 20000) + 20000),
  },
  {
    name: `tshirt2`,
    contents: `{"blocks":[{"key":"65s42","text":"tshirt2","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":21,"style":"color-rgb(0,0,0)"},{"offset":0,"length":21,"style":"fontsize-medium"},{"offset":0,"length":21,"style":"fontfamily-ui-sans-serif, system-ui, -apple-system, \"system-ui\", \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji"}],"entityRanges":[],"data":{}}`,
    category_id: 2,
    image_url: `https://i.ebayimg.com/thumbs/images/g/PM4AAOSwbRhjduqr/s-l225.webp`,
    price: Math.floor(Math.random() * (100000 - 20000) + 20000),
  },
  {
    name: `tshirt3`,
    contents: `{"blocks":[{"key":"65s42","text":"tshirt3","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":21,"style":"color-rgb(0,0,0)"},{"offset":0,"length":21,"style":"fontsize-medium"},{"offset":0,"length":21,"style":"fontfamily-ui-sans-serif, system-ui, -apple-system, \"system-ui\", \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji"}],"entityRanges":[],"data":{}}`,
    category_id: 2,
    image_url: `https://i.ebayimg.com/thumbs/images/g/xK0AAOSwYx5jcUu5/s-l225.webp`,
    price: Math.floor(Math.random() * (100000 - 20000) + 20000),
  },
  {
    name: `tshirt4`,
    contents: `{"blocks":[{"key":"65s42","text":"tshirt4","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":21,"style":"color-rgb(0,0,0)"},{"offset":0,"length":21,"style":"fontsize-medium"},{"offset":0,"length":21,"style":"fontfamily-ui-sans-serif, system-ui, -apple-system, \"system-ui\", \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji"}],"entityRanges":[],"data":{}}`,
    category_id: 2,
    image_url: `https://i.ebayimg.com/thumbs/images/g/cAwAAOSwnlBjasrx/s-l225.webp`,
    price: Math.floor(Math.random() * (100000 - 20000) + 20000),
  },
  {
    name: `tshirt5`,
    contents: `{"blocks":[{"key":"65s42","text":"tshirt5","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":21,"style":"color-rgb(0,0,0)"},{"offset":0,"length":21,"style":"fontsize-medium"},{"offset":0,"length":21,"style":"fontfamily-ui-sans-serif, system-ui, -apple-system, \"system-ui\", \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji"}],"entityRanges":[],"data":{}}`,
    category_id: 2,
    image_url: `https://i.ebayimg.com/thumbs/images/g/BXAAAOSwte5hRYn-/s-l225.webp`,
    price: Math.floor(Math.random() * (100000 - 20000) + 20000),
  },
  {
    name: `tshirt6`,
    contents: `{"blocks":[{"key":"65s42","text":"tshirt6","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":21,"style":"color-rgb(0,0,0)"},{"offset":0,"length":21,"style":"fontsize-medium"},{"offset":0,"length":21,"style":"fontfamily-ui-sans-serif, system-ui, -apple-system, \"system-ui\", \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji"}],"entityRanges":[],"data":{}}`,
    category_id: 2,
    image_url: `https://i.ebayimg.com/thumbs/images/g/iWwAAOSw-ERh9-ff/s-l225.webp`,
    price: Math.floor(Math.random() * (100000 - 20000) + 20000),
  },
  {
    name: `tshirt7`,
    contents: `{"blocks":[{"key":"65s42","text":"tshirt7","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":21,"style":"color-rgb(0,0,0)"},{"offset":0,"length":21,"style":"fontsize-medium"},{"offset":0,"length":21,"style":"fontfamily-ui-sans-serif, system-ui, -apple-system, \"system-ui\", \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji"}],"entityRanges":[],"data":{}}`,
    category_id: 2,
    image_url: `https://i.ebayimg.com/thumbs/images/g/mVoAAOSwKmVjKM-d/s-l225.webp`,
    price: Math.floor(Math.random() * (100000 - 20000) + 20000),
  },
  {
    name: `tshirt8`,
    contents: `{"blocks":[{"key":"65s42","text":"tshirt8","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":21,"style":"color-rgb(0,0,0)"},{"offset":0,"length":21,"style":"fontsize-medium"},{"offset":0,"length":21,"style":"fontfamily-ui-sans-serif, system-ui, -apple-system, \"system-ui\", \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji"}],"entityRanges":[],"data":{}}`,
    category_id: 2,
    image_url: `https://i.ebayimg.com/thumbs/images/g/BYMAAOSwz89jTHYj/s-l225.webp`,
    price: Math.floor(Math.random() * (100000 - 20000) + 20000),
  },
  {
    name: `tshirt9`,
    contents: `{"blocks":[{"key":"65s42","text":"tshirt9","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":21,"style":"color-rgb(0,0,0)"},{"offset":0,"length":21,"style":"fontsize-medium"},{"offset":0,"length":21,"style":"fontfamily-ui-sans-serif, system-ui, -apple-system, \"system-ui\", \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji"}],"entityRanges":[],"data":{}}`,
    category_id: 2,
    image_url: `https://i.ebayimg.com/thumbs/images/g/EiYAAOSwbhFjNG-r/s-l225.webp`,
    price: Math.floor(Math.random() * (100000 - 20000) + 20000),
  },
  {
    name: `tshirt10`,
    contents: `{"blocks":[{"key":"65s42","text":"tshirt10","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":21,"style":"color-rgb(0,0,0)"},{"offset":0,"length":21,"style":"fontsize-medium"},{"offset":0,"length":21,"style":"fontfamily-ui-sans-serif, system-ui, -apple-system, \"system-ui\", \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji"}],"entityRanges":[],"data":{}}`,
    category_id: 2,
    image_url: `https://i.ebayimg.com/thumbs/images/g/J7wAAOSwt~1jdNUk/s-l225.webp`,
    price: Math.floor(Math.random() * (100000 - 20000) + 20000),
  },
]

const pants = [
  {
    name: `pants1`,
    contents: `{"blocks":[{"key":"65s42","text":"pants1","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":21,"style":"color-rgb(0,0,0)"},{"offset":0,"length":21,"style":"fontsize-medium"},{"offset":0,"length":21,"style":"fontfamily-ui-sans-serif, system-ui, -apple-system, \"system-ui\", \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji"}],"entityRanges":[],"data":{}}`,
    category_id: 3,
    image_url: `https://i.ebayimg.com/thumbs/images/g/rxsAAOSwRq1hXUKx/s-l225.webp`,
    price: Math.floor(Math.random() * (100000 - 20000) + 20000),
  },
  {
    name: `pants2`,
    contents: `{"blocks":[{"key":"65s42","text":"pants2","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":21,"style":"color-rgb(0,0,0)"},{"offset":0,"length":21,"style":"fontsize-medium"},{"offset":0,"length":21,"style":"fontfamily-ui-sans-serif, system-ui, -apple-system, \"system-ui\", \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji"}],"entityRanges":[],"data":{}}`,
    category_id: 3,
    image_url: `https://i.ebayimg.com/thumbs/images/g/rxsAAOSwRq1hXUKx/s-l225.webp`,
    price: Math.floor(Math.random() * (100000 - 20000) + 20000),
  },
  {
    name: `pants3`,
    contents: `{"blocks":[{"key":"65s42","text":"pants3","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":21,"style":"color-rgb(0,0,0)"},{"offset":0,"length":21,"style":"fontsize-medium"},{"offset":0,"length":21,"style":"fontfamily-ui-sans-serif, system-ui, -apple-system, \"system-ui\", \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji"}],"entityRanges":[],"data":{}}`,
    category_id: 3,
    image_url: `https://i.ebayimg.com/thumbs/images/g/rxsAAOSwRq1hXUKx/s-l225.webp`,
    price: Math.floor(Math.random() * (100000 - 20000) + 20000),
  },
  {
    name: `pants4`,
    contents: `{"blocks":[{"key":"65s42","text":"pants4","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":21,"style":"color-rgb(0,0,0)"},{"offset":0,"length":21,"style":"fontsize-medium"},{"offset":0,"length":21,"style":"fontfamily-ui-sans-serif, system-ui, -apple-system, \"system-ui\", \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji"}],"entityRanges":[],"data":{}}`,
    category_id: 3,
    image_url: `https://i.ebayimg.com/thumbs/images/g/rxsAAOSwRq1hXUKx/s-l225.webp`,
    price: Math.floor(Math.random() * (100000 - 20000) + 20000),
  },
  {
    name: `pants5`,
    contents: `{"blocks":[{"key":"65s42","text":"pants5","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":21,"style":"color-rgb(0,0,0)"},{"offset":0,"length":21,"style":"fontsize-medium"},{"offset":0,"length":21,"style":"fontfamily-ui-sans-serif, system-ui, -apple-system, \"system-ui\", \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji"}],"entityRanges":[],"data":{}}`,
    category_id: 3,
    image_url: `https://i.ebayimg.com/thumbs/images/g/rxsAAOSwRq1hXUKx/s-l225.webp`,
    price: Math.floor(Math.random() * (100000 - 20000) + 20000),
  },
  {
    name: `pants6`,
    contents: `{"blocks":[{"key":"65s42","text":"pants6","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":21,"style":"color-rgb(0,0,0)"},{"offset":0,"length":21,"style":"fontsize-medium"},{"offset":0,"length":21,"style":"fontfamily-ui-sans-serif, system-ui, -apple-system, \"system-ui\", \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji"}],"entityRanges":[],"data":{}}`,
    category_id: 3,
    image_url: `https://i.ebayimg.com/thumbs/images/g/rxsAAOSwRq1hXUKx/s-l225.webp`,
    price: Math.floor(Math.random() * (100000 - 20000) + 20000),
  },
  {
    name: `pants7`,
    contents: `{"blocks":[{"key":"65s42","text":"pants7","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":21,"style":"color-rgb(0,0,0)"},{"offset":0,"length":21,"style":"fontsize-medium"},{"offset":0,"length":21,"style":"fontfamily-ui-sans-serif, system-ui, -apple-system, \"system-ui\", \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji"}],"entityRanges":[],"data":{}}`,
    category_id: 3,
    image_url: `https://i.ebayimg.com/thumbs/images/g/rxsAAOSwRq1hXUKx/s-l225.webp`,
    price: Math.floor(Math.random() * (100000 - 20000) + 20000),
  },
  {
    name: `pants8`,
    contents: `{"blocks":[{"key":"65s42","text":"pants8","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":21,"style":"color-rgb(0,0,0)"},{"offset":0,"length":21,"style":"fontsize-medium"},{"offset":0,"length":21,"style":"fontfamily-ui-sans-serif, system-ui, -apple-system, \"system-ui\", \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji"}],"entityRanges":[],"data":{}}`,
    category_id: 3,
    image_url: `https://i.ebayimg.com/thumbs/images/g/rxsAAOSwRq1hXUKx/s-l225.webp`,
    price: Math.floor(Math.random() * (100000 - 20000) + 20000),
  },
  {
    name: `pants9`,
    contents: `{"blocks":[{"key":"65s42","text":"pants9","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":21,"style":"color-rgb(0,0,0)"},{"offset":0,"length":21,"style":"fontsize-medium"},{"offset":0,"length":21,"style":"fontfamily-ui-sans-serif, system-ui, -apple-system, \"system-ui\", \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji"}],"entityRanges":[],"data":{}}`,
    category_id: 3,
    image_url: `https://i.ebayimg.com/thumbs/images/g/rxsAAOSwRq1hXUKx/s-l225.webp`,
    price: Math.floor(Math.random() * (100000 - 20000) + 20000),
  },
  {
    name: `pants10`,
    contents: `{"blocks":[{"key":"65s42","text":"pants10","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":0,"length":21,"style":"color-rgb(0,0,0)"},{"offset":0,"length":21,"style":"fontsize-medium"},{"offset":0,"length":21,"style":"fontfamily-ui-sans-serif, system-ui, -apple-system, \"system-ui\", \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji"}],"entityRanges":[],"data":{}}`,
    category_id: 3,
    image_url: `https://i.ebayimg.com/thumbs/images/g/rxsAAOSwRq1hXUKx/s-l225.webp`,
    price: Math.floor(Math.random() * (100000 - 20000) + 20000),
  },
]

async function main() {
  await prisma.products.deleteMany({})

  for (const p of sneakers) {
    const product = await prisma.products.create({
      data: p,
    })
    console.log(`Created id: ${product.id}`)
  }

  for (const p of tshirts) {
    const product = await prisma.products.create({
      data: p,
    })
    console.log(`Created id: ${product.id}`)
  }

  for (const p of pants) {
    const product = await prisma.products.create({
      data: p,
    })
    console.log(`Created id: ${product.id}`)
  }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
