import styled from '@emotion/styled'
import Image from 'next/image'

const AutoSizeImage = ({ src, size = 500 }: { src: string; size?: number }) => {
  return (
    <AutoSizeImageWrapper size={size}>
      <Image src={src} fill objectFit="contain" alt="" />
    </AutoSizeImageWrapper>
  )
}

export default AutoSizeImage

const AutoSizeImageWrapper = styled.div<{ size: number }>`
  width: ${(props) => (props.size ? `${props.size}px` : '500px')};
  height: ${(props) => (props.size ? `${props.size}px` : '500px')};
  position: relative;
`
