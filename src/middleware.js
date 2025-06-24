import { NextResponse } from 'next/server'

export function middleware(request) {
  // const referer = request.headers.get('referer')
  // console.log('Previous URL:', referer)

  return NextResponse.next()
}