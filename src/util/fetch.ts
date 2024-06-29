export const GET = (url: string) => {
  return fetch(url, {
    method: 'GET'
  })
}

export const POST = (url: string, body: any) => {
  return fetch(url, {
    method: 'POST',
    body
  })
}