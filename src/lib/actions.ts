'use server'
import { cookies } from 'next/headers'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

const baseUrl = process.env.API_URL

// const setCookies = () => {

// }

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
  const authCookie = setCookie.find(cookie => cookie.includes('accessToken'))?.split('=')[1]
  if (authCookie) cookies().set('accessToken', authCookie)
  
  const data = await response.json() 
  if (data.error) return console.log(data.error)
  return data
  // redirect(`/journal/${data.user._id}`)
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
