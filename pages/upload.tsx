import { Button } from '@mantine/core'
import Image from 'next/image'
import { useRef, useState } from 'react'
import styled from '@emotion/styled'

const ImageUpload = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [image, setImage] = useState('')

  const handleUpload = () => {
    if (inputRef.current && inputRef.current.files) {
      const fd = new FormData()
      console.log('here')
      fd.append(
        'image',
        inputRef.current.files[0],
        inputRef.current.files[0].name
      )

      fetch(
        'https://api.imgbb.com/1/upload?key=8676e9a76cca42179cbd43407440d4b8&expiration=15552000',
        {
          method: 'post',
          body: fd,
        }
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data)

          setImage(data.data.image.url)
        })
        .catch((error) => console.log(error))
    }
  }
  return (
    <div>
      <input type="file" accept="image/*" ref={inputRef} />
      <Button
        style={{ background: 'black', color: 'white' }}
        onClick={handleUpload}
      >
        업로드
      </Button>
      {image !== '' && (
        <AutoSizeImageWrapper>
          <Image src={image} fill objectFit="contain" alt="" />
        </AutoSizeImageWrapper>
      )}
    </div>
  )
}

const AutoSizeImageWrapper = styled.div`
  width: 500px;
  height: 500px;
  position: relative;
`
export default ImageUpload
