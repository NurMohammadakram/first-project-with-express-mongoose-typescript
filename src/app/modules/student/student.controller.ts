import { studentServices } from './student.service';
import { Request, Response } from 'express';

const createStudent = async (req: Request, res: Response) => {
  try {
    const { student } = req.body;
    console.log(student);
    const studentData = await studentServices.createStudentService(student);
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
