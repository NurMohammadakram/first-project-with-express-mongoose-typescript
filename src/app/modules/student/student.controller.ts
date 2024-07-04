import { studentServices } from './student.service';
import { Request, Response } from 'express';
import { studentUpdateValidationSchema } from './student.validation';

const getAllStudent = async (req: Request, res: Response) => {
  try {
    const studentsData = await studentServices.getAllStudentFromDB();
    res.status(200).json({
      success: true,
      message: 'Students data retrieved successfully',
      data: studentsData,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'something went wrong',
      error: err,
    });
  }
};

const getSingleStudent = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const studentData = await studentServices.getSingleStudentFromDB(userId);
    res.status(200).json({
      success: true,
      message: 'Succesfully retrieved data',
      data: studentData,
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message,
      error: err,
    });
  }
};

const updateStudent = async (req: Request, res: Response) => {
  try {
    const data = req.body;
    const { userId } = req.params;
    const validatedData = studentUpdateValidationSchema.parse(data);
    console.log(validatedData);
    await studentServices.updateStudentById(userId, data);
    res.status(200).json({
      success: true,
      message: 'succesfully updated data',
      UpdatedData: validatedData,
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message,
      error: err,
    });
  }
};

export const studentController = {
  getAllStudent,
  getSingleStudent,
  updateStudent,
};
