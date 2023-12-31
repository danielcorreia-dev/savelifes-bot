import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json();
  const res = await fetch(
    'https://buddy-api-fastapi-nfkbuw2rka-rj.a.run.app/chat',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: body.id,
        user_penultimate_message: body.user_penultimate_message,
        buddy_last_message: body.buddy_last_message,
        user_last_message: body.user_last_message,
      }),
    }
  );
  const data = await res.json();
  return NextResponse.json(data);
}
