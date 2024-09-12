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

const getCookie = async (name: string) => {
  return cookies().get(name)?.value ?? ''
}

export async function addEntry(formData: FormData) {
  try {
    const result = await fetch(baseUrl + '/entries', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ 
        text: formData.get('Text'),
        userId: formData.get('Id') 
      }),
      credentials: 'include'
    }).then(res => res.json())

    revalidatePath(`/journal/${result.userId}`)
  } catch (error) {
    console.log(error)
  }
}

export async function login(formData: FormData) {
  const response = await fetch(baseUrl + '/auth/login', {
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

  const setCookie = response.headers.getSetCookie()
  const accessToken = setCookie.find(cookie => cookie.includes('accessToken'))?.split('=')[1].split(';')[0]
  // const refreshToken = setCookie.find(cookie => cookie.includes('refreshToken'))?.split('=')[1]
  // const userSession = setCookie.find(cookie => cookie.includes('userSession'))?.split('=')[1]
  console.log('accessToken', accessToken)
  
  if (accessToken) cookies().set('accessToken', accessToken, cookieOptions)
  // if (refreshToken) cookies().set('refreshToken', refreshToken, cookieOptions)
  // if (userSession) cookies().set('userSession', userSession, cookieOptions)
  
  const data = await response.json() 
  if (data.error) return console.log(data.error)
  // return data
  revalidatePath(`/journal/${data.user._id}`)
  redirect(`/journal/${data.user._id}`)
}

export async function register(formData: FormData) {
  try {
    const result = await fetch(baseUrl + '/auth/register', {
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
    console.log('that', result)
  } catch (error) {
    console.log(error)
  }
}

export const getEntries = async (url: string) => {
  const cookie = await getCookie('accessToken')
  const result = await fetch(baseUrl + url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Credentials': 'true',
      Cookie: 'accessToken=' + cookie
    },
    credentials: 'include'
  }).then(res => res.json())

  if (result.error) return result.error
  return result
}