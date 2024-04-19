import Image from 'next/image'
import React from 'react'

interface LogoProps {
  src: string
}

export const Logo: React.FC<LogoProps> = ({ src }) => {
  return (
    <Image
      className="w-[20px] sm:w-[50px] sm:h-[50px] mt-3"
      src={src}
      width={85}
      height={85}
      alt=""
    />
  )
}
