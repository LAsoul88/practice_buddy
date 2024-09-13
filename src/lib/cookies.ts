import { cookies } from 'next/headers'

type CookieOptions = {
  httpOnly: boolean
  secure: boolean
  sameSite: 'none' | 'lax' | 'strict' | boolean
  maxAge: number
  path: string
  domain: string
}

const tokenOptions: CookieOptions = {
  httpOnly: true, 
  secure: process.env.NODE_ENV === 'production', 
  sameSite: process.env.NODE_ENV === 'production' ? 'none': 'lax', 
  maxAge: 1000 * 60 * 60,
  path: '/',
  domain: 'localhost'
}

export const sessionOptions: CookieOptions = {
  httpOnly: false,
  secure: process.env.NODE_ENV === 'production', 
  sameSite: process.env.NODE_ENV === 'production' ? 'none': 'lax', 
  maxAge: 1000 * 60 * 60,
  path: '/',
  domain: 'localhost'
}

export const getCookie = (name: string) => {
  return cookies().get(name)?.value ?? ''
}

export const setCookie = (
  name: string, 
  token: string, 
  options: CookieOptions = tokenOptions
) => {
  cookies().set(name, token, options)
}