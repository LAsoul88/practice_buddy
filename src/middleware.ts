import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const cookies = request.headers.get('Cookie')
  console.log(cookies)
  return NextResponse.next()
}