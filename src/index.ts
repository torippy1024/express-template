import express, {Request, Response} from 'express';
import dotenv from 'dotenv';
import {PrismaClient} from '@prisma/client';

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;
const prisma = new PrismaClient();

app.get('/', async (req: Request, res: Response) => {
  const allUsers = await prisma.user.findMany();
  res.send(allUsers);
});

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
