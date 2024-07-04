import { StudentInterface } from './student.interface';
import { StudentModel } from './student.model';

const createStudentIntoDB = async (studentData: StudentInterface) => {
  if (await StudentModel.isUserExists(studentData.id)) {
    throw new Error('User is already exists');
  }
  const result = new StudentModel(studentData);
  return await result.save();
};

const getAllStudentFromDB = async () => {
  const result = await StudentModel.find({});
  return result;
};

const getSingleStudentFromDB = async (id: string) => {
  if (await StudentModel.isUserExists(id)) {
    const result = await StudentModel.isUserExists(id);
    return result;
  }
  throw new Error('User not found');
};

const updateStudentById = async (id: string, data: StudentInterface) => {
  if (await StudentModel.isUserExists(id)) {
    const updateResponse = StudentModel.updateOne({ id }, data);
    // console.log(data);
    return updateResponse;
  }
  throw new Error('User not found');
};

export const studentServices = {
  createStudentIntoDB,
  getAllStudentFromDB,
  getSingleStudentFromDB,
  updateStudentById,
};
