import Image from 'next/image'

interface IconProps {
  path: string
  variant?: string
  height?: number
  width?: number
  alt: string
}

export const Icon = ({
  path,
  variant = 'black',
  height = 48,
  width = 48,
  alt
}: IconProps) => {
  return (
    <>
      <Image
        priority
        src={path}
        height={height}
        width={width}
        alt={alt}
      />
    </>
  )
}