import express, {Request, Response} from 'express';
import dotenv from 'dotenv';
import routes from './routes';

dotenv.config();
const port = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api', routes);

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
