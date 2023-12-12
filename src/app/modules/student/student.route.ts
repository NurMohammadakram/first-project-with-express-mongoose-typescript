import { Router } from 'express';
import { studentController } from './student.controller';

const router = Router();

router.post('/create-user', studentController.createStudent);

export default router;
