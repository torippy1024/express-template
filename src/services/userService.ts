import prisma from '../database/client';

export const getAllUsers = async () => {
  const users = await prisma.user.findMany();
  return users;
};

export const getUserById = async (id: number) => {
  const user = await prisma.user.findUnique({
    where: {id},
  });
  return user;
};

export const createUser = async (name: string, email: string) => {
  const user = await prisma.user.create({
    data: {
      name,
      email,
    },
  });
  return user;
};

export const updateUser = async (id: number, name: string, email: string) => {
  const user = await prisma.user.update({
    where: {id},
    data: {
      name,
      email,
    },
  });
  return user;
};

export const deleteUser = async (id: number) => {
  const user = await prisma.user.delete({
    where: {id},
  });
  return user;
};
