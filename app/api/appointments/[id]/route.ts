import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Appointment from '@/models/Appointment';

export async function PATCH(request: Request, { params }: { params: { id: string } }) {
  try {
    await connectDB();
    const { id } = params;
    const { status } = await request.json();

    if (!['pending', 'completed', 'cancelled'].includes(status)) {
      return NextResponse.json({ success: false, error: 'Invalid status' }, { status: 400 });
    }

    const updated = await Appointment.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );

    if (!updated) {
      return NextResponse.json({ success: false, error: 'Appointment not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true, data: updated });
  } catch (error) {
    console.error('Error updating appointment status:', error);
    return NextResponse.json({ success: false, error: 'Failed to update status' }, { status: 500 });
  }
} 