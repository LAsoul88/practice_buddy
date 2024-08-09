'use server'

const baseUrl = process.env.API_URL

export const GET = async (url: string) => {
  try {
    const result = await fetch(baseUrl + url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    return result
  } catch (error) {
    console.log(error)
  }
}
