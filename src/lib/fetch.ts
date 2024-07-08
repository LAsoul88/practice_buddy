import 'server-only'

const baseURL = 'http://localhost:3001'

export const GET = async (url: string) => {
  const result = await fetch(baseURL + url, {
    method: 'GET'
  }).then(res => res.json())
  return result
}

export const POST = async (url: string, body: any) => {
  const result = await fetch(baseURL + url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then(res => res.json())
  return result
}