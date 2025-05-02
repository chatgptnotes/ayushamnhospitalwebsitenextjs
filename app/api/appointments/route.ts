import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Appointment from '@/models/Appointment';

export async function POST(request: Request) {
  try {
    await connectDB();
    const data = await request.json();
    
    // Add validation
    if (!data.name || !data.phone) {
      return NextResponse.json(
        { success: false, error: 'Name and phone are required' },
        { status: 400 }
      );
    }

    // Format phone number
    const formattedPhone = data.phone.replace(/[\s-]/g, '');
    
    const appointment = await Appointment.create({
      ...data,
      phone: formattedPhone,
      timestamp: new Date(),
      status: 'pending'
    });

    console.log('Appointment created:', appointment);
    return NextResponse.json({ success: true, data: appointment });
  } catch (error) {
    console.error('Error creating appointment:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to create appointment' },
      { status: 500 }
    );
  }
}

export async function GET(request: Request) {
  try {
    await connectDB();
    const { searchParams } = new URL(request.url);
    const search = searchParams.get('search') || '';
    const status = searchParams.get('status') || 'all';

    let query: any = {};
    
    if (search) {
      query.$or = [
        { name: { $regex: search, $options: 'i' } },
        { phone: { $regex: search, $options: 'i' } },
        { email: { $regex: search, $options: 'i' } }
      ];
    }

    if (status !== 'all') {
      query.status = status;
    }

    const appointments = await Appointment.find(query)
      .sort({ timestamp: -1 })
      .limit(50);

    return NextResponse.json({ success: true, data: appointments });
  } catch (error) {
    console.error('Error fetching appointments:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch appointments' },
      { status: 500 }
    );
  }
} 