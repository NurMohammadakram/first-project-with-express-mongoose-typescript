import { StudentInterface } from './student.interface';
import { StudentModel } from './student.model';

async function createStudentService(student: StudentInterface) {
  const result = new StudentModel(student);
  return await result.save();
}

export const studentServices = {
  createStudentService,
};
