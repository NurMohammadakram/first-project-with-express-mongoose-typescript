import express, { Request, Response } from 'express';
import cors from 'cors';
import router from './app/modules/student/student.route';
const app = express();

//parsers
app.use(express.json());
app.use(cors());

app.use('/api/v1/student', router);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

export default app;
