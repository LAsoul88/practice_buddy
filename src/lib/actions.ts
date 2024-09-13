'use server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { getCookie, setCookie, sessionOptions } from '@/lib/cookies'

const baseUrl = process.env.API_URL

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
  if (user) setCookie('userSession', user, sessionOptions)
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
  if (user) setCookie('userSession', user, sessionOptions)
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