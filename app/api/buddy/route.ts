import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json();
  // const res = await fetch('http://127.0.0.1:8080/buddy', {
  // const res = await fetch('http://127.0.0.1:8000/api/buddy/', {
  const res = await fetch('http://127.0.0.1:8000/chat', {
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
  });
  const data = await res.json();
  return NextResponse.json(data);
}
