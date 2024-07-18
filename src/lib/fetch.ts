import 'server-only'

const baseURL = process.env.API_URL

export const GET = async (url: string) => {
  try {
    const result = await fetch(baseURL + url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      cache: 'no-store'
    }).then(res => res.json())
    return result
  } catch (error) {
    console.log(error)
  }
}

export const POST = async (url: string, body: any) => {
  try {
    const result = await fetch(baseURL + url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ ...body })
    }).then(res => res.json())
    return result
  } catch (error) {
    console.log(error)
  }
}