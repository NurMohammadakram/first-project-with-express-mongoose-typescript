import { z } from 'zod';

export const studentNameValidation = z.object({
  firstName: z.string().min(1),
  middleName: z.string().optional(),
  lastName: z.string().min(1),
});

export const guardianValidation = z.object({
  fatherName: z.string().min(1),
  fatherOccupation: z.string().min(1),
  fatherContactNo: z.string().min(1),
  motherName: z.string().min(1),
  motherOccupation: z.string().min(1),
  motherContactNo: z.string().min(1),
});

export const localGuardianValidation = z.object({
  name: z.string().min(1),
  occupation: z.string().min(1),
  contactNo: z.string().min(1),
  address: z.string().min(1),
});

export const studentValidationSchema = z.object({
  id: z.string().min(1),
  name: studentNameValidation,
  gender: z.enum(['male', 'female']),
  dateOfBirth: z.string().min(1),
  email: z.string().min(1).email(),
  contactNo: z.string().min(1),
  emergencyContactNo: z.string().min(1),
  bloodGroup: z.enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']),
  presentAddress: z.string().min(1),
  permanentAddress: z.string().min(1),
  guardian: guardianValidation,
  localGuardian: localGuardianValidation,
  profileImg: z.string().optional(),
  isActive: z.enum(['active', 'blocked']),
});
