'use server'
import { cookies } from 'next/headers'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

const baseUrl = process.env.API_URL

const cookieOptions: {
  httpOnly: boolean
  secure: boolean
  sameSite?: 'none' | 'lax' | 'strict' | boolean
  maxAge: number
  path: string
  domain: string
} = {
  httpOnly: true, 
  secure: process.env.NODE_ENV === 'production', 
  sameSite: process.env.NODE_ENV === 'production' ? 'none': 'lax', 
  maxAge: 1000 * 60 * 60,
  path: '/',
  domain: 'localhost'
}

const getCookie = (name: string) => {
  return cookies().get(name)?.value ?? ''
}

const setCookie = async (name: string, token: string) => {
  cookies().set(name, token, cookieOptions)
}

export async function addEntry(formData: FormData) {
  const res = await fetch(baseUrl + '/entries', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ 
      text: formData.get('Text'),
      userId: formData.get('Id') 
    }),
    credentials: 'include'
  })
  
  const data = await res.json()

  revalidatePath(`/journal/${data.userId}`)
}

export async function login(formData: FormData) {
  const res = await fetch(baseUrl + '/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ 
      user: formData.get('emailUsername'),
      password: formData.get('password')
    }),
    credentials: 'include'
  })

  const data = await res.json() 
  if (data.error) return console.log(data.error)
  const { user, accessToken, refreshToken } = data
  
  if (accessToken) setCookie('accessToken', accessToken)
  if (refreshToken) setCookie('refreshToken', refreshToken)
  
  redirect(`/journal/${user._id}`)
}

export async function register(formData: FormData) {
  const res = await fetch(baseUrl + '/auth/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email: formData.get('email'),
      username: formData.get('username'),
      password: formData.get('password')
    }),
    credentials: 'include'
  })
  
  const data = await res.json()
  if (data.error) return console.log(data.error)
  
  const { user, accessToken, refreshToken } = data
  if (accessToken) setCookie('accessToken', accessToken)
  if (refreshToken) setCookie('refreshToken', refreshToken)

  redirect(`/journal/${user._id}`)
}

export const getEntries = async (url: string) => {
  const accessToken = 'accessToken=' + getCookie('accessToken')
  const refreshToken = 'refreshToken=' + getCookie('refreshToken')
  if (!accessToken && !refreshToken) return 'No valid token present'

  const res = await fetch(baseUrl + url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Cookie: accessToken ? accessToken + ';' + refreshToken : refreshToken
    },
    credentials: 'include'
  })

  const data = await res.json()
  if (data.error) return data.error
  return data
}