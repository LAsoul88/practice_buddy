import Link from 'next/link'
import { CustomLink } from '@/app/_components/CustomLink'
import { getCookie } from '@/lib/cookies'
import { logout } from '@/lib/actions'

export const Header = async () => {
  const userCookie = getCookie('userSession')
  let username = ''
  let _id = ''
  if (userCookie) {
    username = JSON.parse(userCookie).username
    _id = JSON.parse(userCookie)._id
  }
  return (
    <header className="sticky top-0 z-50 w-full h-[48px] bg-oxfordBlue text-platinum">
      <nav className="w-full h-full flex">
        <ul className="w-full h-full flex justify-end items-center gap-4 p-4">
          { userCookie 
              ? 
            <>
              <li><Link href={`/journal/${_id}`}>{username}</Link></li> 
              <li><CustomLink href="/" onClick={logout}>Logout</CustomLink></li> 
            </>  
              : 
            <>
              <li><Link href="/register">Register</Link></li>
              <li><Link href="/login">Login</Link></li>
            </>
          }
            

        </ul>
      </nav>
    </header>
  )
}