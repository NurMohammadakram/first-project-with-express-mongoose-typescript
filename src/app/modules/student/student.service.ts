import { StudentInterface } from './student.interface';
import { StudentModel } from './student.model';

async function createStudentService(student: StudentInterface) {
  try {
    const result = new StudentModel(student);
    return await result.save();
  } catch (err) {
    console.log(err);
  }
}

export const studentServices = {
  createStudentService,
};
