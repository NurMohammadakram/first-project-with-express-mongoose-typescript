/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express';
import { userServices } from './user.service';
// import { studentValidationSchema } from '../student/student.validation';
// import { userValidationSchema } from './user.validation';

const createStudent = async (req: Request, res: Response) => {
  try {
    const { password, student } = req.body;
    // console.log({ bodyPassword: password, studentbody: student });
    // const validPassword = userValidationSchema.parse(password) as string;
    // const validStudentData = studentValidationSchema.parse(student);
    const studentData = await userServices.createStudentIntoDB(
      password,
      student,
    );
    // console.log({ validPassword, validStudentData });
    console.log({ studentData });
    res.status(200).json({
      success: true,
      messege: 'succesfully data recieved',
      data: studentData,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      messege: err.message || 'error happend',
    });
  }
};

export const userController = {
  createStudent,
};
