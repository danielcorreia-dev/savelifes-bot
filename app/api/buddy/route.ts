import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json();
  const res = await fetch('http://localhost:8080/buddy', {
    method: 'POST',
    headers: {
      'Content-Type': 'plain/text',
    },
    body: body.message,
  });
  const data = await res.json();
  return NextResponse.json(data);
}
