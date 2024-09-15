import Link from 'next/link'
import { cookies } from 'next/headers'

export const Header = async () => {
  const userCookie = cookies().get('userSession')?.value
  let username = ''
  if (userCookie) username = JSON.parse(userCookie).username
  console.log(userCookie)
  return (
    <header className="sticky top-0 z-50 w-full h-[48px] bg-oxfordBlue text-platinum">
      <nav className="w-full h-full flex">
        <ul className="w-full h-full flex justify-end items-center gap-4 p-4">
          <li><Link href="/register">Register</Link></li>
          { userCookie ? <li>{username}</li> : null}
          
          <li><Link href="/login">Login</Link></li>

        </ul>
      </nav>
    </header>
  )
}