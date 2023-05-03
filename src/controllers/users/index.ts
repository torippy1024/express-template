import express, {Request, Response} from 'express';
import {
  getUserById,
  getAllUsers,
  updateUser,
  deleteUser,
  createUser,
} from '../../services/userService';

const userRoutes = express.Router();

userRoutes.get('/', async (req: Request, res: Response) => {
  const users = await getAllUsers();
  if (!users) {
    return res.status(404).json({message: 'User not found'});
  }
  res.json(users);
});

userRoutes.post('/', async (req: Request, res: Response) => {
  const user = await createUser(req.body.name, req.body.email);
  res.json(user);
});

userRoutes.get('/:id', async (req: Request, res: Response) => {
  const id = parseInt(req.params.id, 10);
  const user = await getUserById(id);
  if (!user) {
    return res.status(404).json({message: 'User not found'});
  }
  res.json(user);
});

userRoutes.put('/:id', async (req: Request, res: Response) => {
  const id = parseInt(req.params.id, 10);
  const user = await getUserById(id);
  if (!user) {
    return res.status(404).json({message: 'User not found'});
  }
  const updatedUser = await updateUser(id, req.body.name, req.body.email);
  res.json(updatedUser);
});

userRoutes.delete('/:id', async (req: Request, res: Response) => {
  const id = parseInt(req.params.id, 10);
  const user = await getUserById(id);
  if (!user) {
    return res.status(404).json({message: 'User not found'});
  }
  await deleteUser(id);
  res.sendStatus(204);
});

export default userRoutes;
