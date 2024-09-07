'use server'

const baseUrl = process.env.API_URL

export const GET = async (url: string) => {
  try {
    const result = await fetch(baseUrl + url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include'
    }).then(res => res.json())

    if (result.error) return result.error
    return result
  } catch (error) {
    console.log(error)
  }
}
