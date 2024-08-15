import Link from 'next/link'

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full h-[48px] bg-oxfordBlue text-platinum">
      <nav className="w-full h-full flex">
        <ul className="w-full h-full flex justify-end items-center gap-4 p-4">
          <li><Link href="/register">Register</Link></li>
          <li><Link href="/login">Login</Link></li>
        </ul>
      </nav>
    </header>
  )
}