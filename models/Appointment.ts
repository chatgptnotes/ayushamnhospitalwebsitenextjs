import mongoose from 'mongoose';

const appointmentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
  },
  phone: {
    type: String,
    required: [true, 'Phone number is required'],
  },
  email: {
    type: String,
    required: false,
  },
  treatment: {
    type: String,
    required: false,
  },
  message: {
    type: String,
    required: false,
  },
  status: {
    type: String,
    enum: ['pending', 'completed', 'cancelled'],
    default: 'pending'
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Appointment || mongoose.model('Appointment', appointmentSchema); 