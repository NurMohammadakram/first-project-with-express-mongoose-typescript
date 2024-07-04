import { Router } from 'express';
import { studentController } from './student.controller';

const router = Router();

router.get('/', studentController.getAllStudent);
router.get('/:userId', studentController.getSingleStudent);
router.patch('/:userId', studentController.updateStudent);
export const studentRouter = router;
