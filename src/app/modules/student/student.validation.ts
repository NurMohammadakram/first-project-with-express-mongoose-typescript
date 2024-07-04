import { z } from 'zod';

export const studentNameValidation = z.object({
  firstName: z.string().min(1, { message: 'first name is requied' }).trim(),
  middleName: z.string().optional(),
  lastName: z.string().min(1, { message: 'last name is required' }).trim(),
});

export const guardianValidation = z.object({
  fatherName: z.string().min(1, { message: 'father name is required' }).trim(),
  fatherOccupation: z
    .string()
    .min(1, { message: 'father occupation is required' })
    .trim(),
  fatherContactNo: z
    .string()
    .min(1, { message: 'father contact no is required' })
    .trim(),
  motherName: z.string().min(1, { message: 'mother name is required' }).trim(),
  motherOccupation: z
    .string()
    .min(1, { message: 'mother occupation is required' })
    .trim(),
  motherContactNo: z
    .string()
    .min(1, { message: 'mother contact no is required' })
    .trim(),
});

export const localGuardianValidation = z.object({
  name: z
    .string()
    .min(1, { message: 'local guardian name is required' })
    .trim(),
  occupation: z
    .string()
    .min(1, { message: 'local guardian occupation is required' })
    .trim(),
  contactNo: z
    .string()
    .min(1, { message: 'local guardian contact no is required' })
    .trim(),
  address: z
    .string()
    .min(1, { message: 'local guardian address is required' })
    .trim(),
});

export const studentValidationSchema = z.object({
  id: z.string().min(1, { message: 'id is required' }),
  name: studentNameValidation,
  gender: z.enum(['male', 'female']),
  dateOfBirth: z
    .string()
    .min(1, { message: 'date of birth is required' })
    .trim(),
  email: z
    .string()
    .min(1, { message: 'email is required' })
    .email({ message: 'Invalid email address' })
    .trim(),
  contactNo: z.string().min(1, { message: 'contact no is required' }).trim(),
  emergencyContactNo: z
    .string()
    .min(1, { message: 'emergency contact no is required' })
    .trim(),
  bloodGroup: z.enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']),
  presentAddress: z
    .string()
    .min(1, { message: 'present address is required' })
    .trim(),
  permanentAddress: z
    .string()
    .min(1, { message: 'permanent address is required' })
    .trim(),
  guardian: guardianValidation,
  localGuardian: localGuardianValidation,
  profileImg: z.string().optional(),
});

export const studentUpdateValidationSchema = z.object({
  id: z.string(),
  name: studentNameValidation,
  gender: z.enum(['male', 'female']),
  dateOfBirth: z.string(),
  email: z.string().email(),
  contactNo: z.string(),
  emergencyContactNo: z.string(),
  bloodGroup: z.enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']),
  presentAddress: z.string(),
  permanentAddress: z.string(),
  guardian: guardianValidation,
  localGuardian: localGuardianValidation,
  profileImg: z.string().optional(),
  isActive: z.enum(['active', 'blocked']).default('active'),
});
