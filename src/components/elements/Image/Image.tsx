// import { css } from "linaria";
// import tw, { styled, theme } from 'twin.macro';
import useMedia from 'use-media'
import list from '@/lib/imageList'
import '@/lib/imageIndex'
// ______________________________________________________
//
const path = '/_next/static/images/'
const selectImage = (prop: string) =>
  list.find((image: ITargetImage) => image.file === prop)
export type Props = {
  img: string
  spImg?: string
  alt: string
  breakPoint?: number
}
interface ITargetImage {
  file: string
  width: number
  height: number
}
// ______________________________________________________
//
export const Image = (props: Props) => {
  const { img, spImg, alt, breakPoint = '767' } = props
  const isSp = useMedia({ maxWidth: breakPoint + 'px' })
  const imgDimensions = selectImage(img)
  const spImgDimensions = selectImage(spImg!)

  return (
    <picture>
      {spImg && (
        <source
          media={`(max-width: ${breakPoint ? breakPoint + 'px' : '767px'})`}
          srcSet={path + spImg}
        />
      )}
      <img
        src={path + img}
        alt={alt}
        width={
          isSp && spImgDimensions ? spImgDimensions.width : imgDimensions?.width
        }
        height={
          isSp && spImgDimensions
            ? spImgDimensions.height
            : imgDimensions?.height
        }
      />
    </picture>
  )
}
