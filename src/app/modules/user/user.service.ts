import config from '../../config';
import { StudentInterface } from '../student/student.interface';
import { StudentModel } from '../student/student.model';
import { TUser } from './user.interface';
import { UserModel } from './user.model';

const createStudentIntoDB = async (
  password: string,
  studentData: StudentInterface,
) => {
  const userData: Partial<TUser> = {};
  userData.id = '2030120001';
  userData.password = password || (config.default_password as string);
  userData.role = 'student';

  // if (await UserModel.isUserExists(userData.id)) {
  //   throw new Error('User is already exists');
  // }
  const newUser = await UserModel.create(userData);

  if (Object.keys(newUser).length) {
    studentData.id = newUser.id;
    studentData.user = newUser._id;

    const newStudent = await StudentModel.create(studentData);
    return newStudent;
  }
};

export const userServices = {
  createStudentIntoDB,
};
