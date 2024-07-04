import { Schema, model } from 'mongoose';
import {
  GuardianInterface,
  LocalGuardianInterface,
  StudentInterface,
  StudentNameInterface,
  StudentStaticModel,
} from './student.interface';

export const studentNameSchema = new Schema<StudentNameInterface>({
  firstName: { type: String, required: true, message: 'first name is requird' },
  middleName: { type: String },
  lastName: { type: String, required: true, message: 'last name is required' },
});

export const guardianSchema = new Schema<GuardianInterface>({
  fatherName: {
    type: String,
    required: true,
    message: 'father name is required',
  },
  fatherOccupation: {
    type: String,
    required: true,
    message: 'father occupation is required',
  },
  fatherContactNo: {
    type: String,
    required: true,
    message: 'father contact no is required',
  },
  motherName: {
    type: String,
    required: true,
    message: 'mother name is required',
  },
  motherOccupation: {
    type: String,
    required: true,
    message: 'mother occupation is required',
  },
  motherContactNo: {
    type: String,
    required: true,
    message: 'mother contact no is required',
  },
});

export const localGuardianSchema = new Schema<LocalGuardianInterface>({
  name: {
    type: String,
    required: true,
    message: 'local guardian name is required',
  },
  occupation: {
    type: String,
    required: true,
    message: 'local guardina occupation is required',
  },
  contactNo: {
    type: String,
    required: true,
    message: 'local guardian contact no is required',
  },
  address: {
    type: String,
    required: true,
    message: 'local guardian address is required',
  },
});

export const studentSchema = new Schema<StudentInterface>({
  id: { type: String, required: true, unique: true, message: 'id is required' },
  user: {
    type: Schema.Types.ObjectId,
    required: [true, 'User id is required'],
    unique: true,
    ref: 'User',
  },
  name: {
    type: studentNameSchema,
    required: true,
    message: 'name is required',
  },
  gender: {
    type: String,
    enum: {
      values: ['male', 'female'],
      message: `VALUE is not correct`,
    },
    required: true,
  },
  dateOfBirth: {
    type: String,
    required: true,
    message: 'date of birth is required',
  },
  email: { type: String, required: true, message: 'email is required' },
  contactNo: {
    type: String,
    required: true,
    message: 'contact number is required',
  },
  emergencyContactNo: {
    type: String,
    required: true,
    message: 'emergency contact no is required',
  },
  bloodGroup: {
    type: String,
    enum: {
      values: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
      message: `value is not valid`,
    },
    required: true,
  },
  presentAddress: {
    type: String,
    required: true,
    message: 'present address is required',
  },
  permanentAddress: {
    type: String,
    required: true,
    message: 'permanent address is required',
  },
  guardian: {
    type: guardianSchema,
    required: true,
    message: 'guardian info is required',
  },
  localGuardian: {
    type: localGuardianSchema,
    required: true,
    message: 'local guardian info is required',
  },
  profileImg: { type: String },
  isDeleted: { type: Boolean, default: false },
});

studentSchema.pre('find', function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});
studentSchema.pre('findOne', function (next) {
  this.find({ isDeleted: { $ne: true } });
  next();
});
studentSchema.pre('aggregate', function (next) {
  this.pipeline().unshift({ $match: { isDeleted: { $ne: true } } });
  next();
});

studentSchema.statics.isUserExists = async function (id: string) {
  const existingUser = await StudentModel.findOne({ id });
  return existingUser;
};

export const StudentModel = model<StudentInterface, StudentStaticModel>(
  'Student',
  studentSchema,
);
