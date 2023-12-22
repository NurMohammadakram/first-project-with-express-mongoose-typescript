import { Schema, model } from 'mongoose';
import {
  GuardianInterface,
  LocalGuardianInterface,
  StudentInterface,
  StudentNameInterface,
} from './student.interface';

export const studentNameSchema = new Schema<StudentNameInterface>({
  firstName: { type: String, required: true },
  middleName: { type: String },
  lastName: { type: String, required: true },
});

export const guardianSchema = new Schema<GuardianInterface>({
  fatherName: { type: String, required: true },
  fatherOccupation: { type: String, required: true },
  fatherContactNo: { type: String, required: true },
  motherName: { type: String, required: true },
  motherOccupation: { type: String, required: true },
  motherContactNo: { type: String, required: true },
});

export const localGuardianSchema = new Schema<LocalGuardianInterface>({
  name: { type: String, required: true },
  occupation: { type: String, required: true },
  contactNo: { type: String, required: true },
  address: { type: String, required: true },
});

export const studentSchema = new Schema<StudentInterface>({
  id: { type: String, required: true },
  name: { type: studentNameSchema, required: true },
  gender: {
    type: String,
    enum: {
      values: ['male', 'female'],
    },
    required: true,
  },
  dateOfBirth: { type: String, required: true },
  email: { type: String, required: true },
  contactNo: { type: String, required: true },
  emergencyContactNo: { type: String, required: true },
  bloodGroup: {
    type: String,
    enum: {
      values: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
    },
    required: true,
  },
  presentAddress: { type: String, required: true },
  permanentAddress: { type: String, required: true },
  guardian: { type: guardianSchema, required: true },
  localGuardian: { type: localGuardianSchema, required: true },
  profileImg: { type: String },
  isActive: {
    type: String,
    enum: {
      values: ['active', 'blocked'],
    },
    required: true,
  },
});

export const StudentModel = model<StudentInterface>('Student', studentSchema);
