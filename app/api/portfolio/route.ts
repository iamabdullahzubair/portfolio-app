import { NextResponse } from 'next/server';
import { getPortfolioData, updatePortfolioData, getDbStatus } from '@/lib/portfolio-service';
import { PortfolioData } from '@/lib/types';

export async function GET() {
  try {
    const data = await getPortfolioData();
    const status = await getDbStatus();

    return NextResponse.json({
      success: true,
      data,
      status,
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error?.message || 'Failed to fetch portfolio data' },
      { status: 500 }
    );
  }
}

export async function PUT(request: Request) {
  try {
    const adminSecret = request.headers.get('x-admin-secret');
    const expectedSecret = process.env.ADMIN_SECRET || 'admin123';

    if (!adminSecret || adminSecret !== expectedSecret) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized: Invalid admin secret' },
        { status: 401 }
      );
    }

    const payload = (await request.json()) as PortfolioData;

    if (!payload || !payload.personal || !payload.projects) {
      return NextResponse.json(
        { success: false, error: 'Invalid payload: Personal and Projects data are required.' },
        { status: 400 }
      );
    }

    const result = await updatePortfolioData(payload);

    if (!result.success) {
      return NextResponse.json(
        { success: false, error: result.message },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: result.message,
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error?.message || 'Failed to update portfolio data' },
      { status: 500 }
    );
  }
}
