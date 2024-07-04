import express, { Request, Response } from 'express';
import cors from 'cors';
import { studentRouter } from './app/modules/student/student.route';
import { userRouter } from './app/modules/user/user.route';
const app = express();

//parsers
app.use(express.json());
app.use(cors());

// routers
app.use('/api/v1/student', studentRouter);
app.use('/api/v1/user', userRouter);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

export default app;
