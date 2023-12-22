import { studentServices } from './student.service';
import { Request, Response } from 'express';
import { studentValidationSchema } from './student.validation';

const createStudent = async (req: Request, res: Response) => {
  try {
    const { student } = req.body;
    const validStudentData = studentValidationSchema.parse(student);
    const studentData =
      await studentServices.createStudentService(validStudentData);
    res.status(200).json({
      success: true,
      messege: 'succesfully data recieved',
      data: studentData,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      messege: 'error happend',
    });
  }
};

export const studentController = {
  createStudent,
};
