import { icons } from '@/assets/icons'
import type { ReactNode } from 'react'

interface IconProps {
  name: string
  variant?: string
}

export const Icon = ({
  name,
  variant = 'black',
}: IconProps) => {
  const svg: ReactNode = icons[name]
  return (
    <>
      { svg }
    </>
  )
}