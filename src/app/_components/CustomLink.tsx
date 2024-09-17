'use client'
import Link from 'next/link'

type LinkProps = {
  href: string
  onClick: () => void
  children: string
}

export const CustomLink = ({ href, onClick }: LinkProps) => {
  const handleClick = () => {
    onClick()
  }
  return (
    <Link href={href} onClick={handleClick}>Logout</Link>
  )
}