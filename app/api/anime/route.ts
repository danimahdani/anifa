import axios from 'axios'
import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({})
}

export async function POST(request: Request) {
  const res = await request.json()

  const response = await axios.get(`https://api.jikan.moe/v4/top/anime`, {
    params: {
      page: res.page.toString(),
      limit: 10
    }
  })
  const { data } = response.data

  return NextResponse.json({ data })
}
