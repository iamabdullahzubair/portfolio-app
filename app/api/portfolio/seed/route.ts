import { NextResponse } from 'next/server';
import { seedPortfolioData } from '@/lib/portfolio-service';

export async function POST(request: Request) {
  try {
    const adminSecret = request.headers.get('x-admin-secret');
    const expectedSecret = process.env.ADMIN_SECRET || 'admin123';

    if (!adminSecret || adminSecret !== expectedSecret) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized: Invalid admin secret' },
        { status: 401 }
      );
    }

    const result = await seedPortfolioData();

    if (!result.success) {
      return NextResponse.json(
        { success: false, error: result.message },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Successfully seeded default portfolio data into Cloud Database!',
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error?.message || 'Failed to seed portfolio' },
      { status: 500 }
    );
  }
}
