import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { secret } = body;

    const expectedSecret = process.env.ADMIN_SECRET || 'admin123';

    if (!secret || secret !== expectedSecret) {
      return NextResponse.json(
        { success: false, error: 'Invalid admin secret PIN/password.' },
        { status: 401 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Authenticated successfully.',
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Bad request.' },
      { status: 400 }
    );
  }
}
