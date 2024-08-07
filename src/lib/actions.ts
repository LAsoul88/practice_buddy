'use server'
// import { cookies } from 'next/headers'
import { revalidatePath } from 'next/cache'

const baseUrl = process.env.API_URL

// const setCookies = () => {

// }

export const addEntry = async (formData: FormData) => {
  try {
    const result = await fetch(baseUrl + '/entries', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ 
        text: formData.get('Text'),
        userId: formData.get('Id') 
      })
    }).then(res => res.json())

    revalidatePath(`/journal/${result.userId}`)
  } catch (error) {
    console.log(error)
  }
}