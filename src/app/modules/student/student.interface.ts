export type StudentNameInterface = {
  firstName: string;
  middleName?: string;
  lastName: string;
};
export type GuardianInterface = {
  fatherName: string;
  fatherOccupation: string;
  fatherContactNo: string;
  motherName: string;
  motherOccupation: string;
  motherContactNo: string;
};
export type LocalGuardianInterface = {
  name: string;
  occupation: string;
  contactNo: string;
  address: string;
};

export type StudentInterface = {
  id: string;
  name: StudentNameInterface;
  gender: 'male' | 'female';
  dateOfBirth: string;
  email: string;
  contactNo: string;
  emergencyContactNo: string;
  bloodGroup: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
  presentAddress: string;
  permanentAddress: string;
  guardian: GuardianInterface;
  localGuardian: LocalGuardianInterface;
  profileImg?: string;
  isActive: 'active' | 'blocked';
};
