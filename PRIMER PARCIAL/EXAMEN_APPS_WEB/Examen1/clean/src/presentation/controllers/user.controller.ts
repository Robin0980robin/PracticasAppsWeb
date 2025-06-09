import { Request, Response } from 'express';
import { CreateUserUseCase } from '../../domain/use-cases/user/create-user.use-case';
import { GetUserByIdUseCase } from '../../domain/use-cases/user/get-user-by-id.use-case';
import { GetAllUsersUseCase } from '../../domain/use-cases/user/get-all-users.use-case';
import { DeleteUserUseCase } from '../../domain/use-cases/user/delete-user.use-case';
import { UserRepository } from '../../domain/repositories/user.repository';

export class UserController {
  constructor(
    private readonly userRepository: UserRepository
  ) {}

  createUser = async (req: Request, res: Response) => {
    try {
      const useCase = new CreateUserUseCase(this.userRepository);
      const user = await useCase.execute(req.body);
      res.status(201).json(user);
    } catch (err: any) {
      res.status(400).json({ error: err.message });
    }
  };

  getUserById = async (req: Request, res: Response) => {
    try {
      const useCase = new GetUserByIdUseCase(this.userRepository);
      const user = await useCase.execute(req.params.id);
      if (!user) return res.status(404).json({ error: 'Usuario no encontrado' });
      res.json(user);
    } catch (err: any) {
      res.status(400).json({ error: err.message });
    }
  };

  getAllUsers = async (_req: Request, res: Response) => {
    try {
      const useCase = new GetAllUsersUseCase(this.userRepository);
      const users = await useCase.execute();
      res.json(users);
    } catch (err: any) {
      res.status(400).json({ error: err.message });
    }
  };

  deleteUser = async (req: Request, res: Response) => {
    try {
      const useCase = new DeleteUserUseCase(this.userRepository);
      await useCase.execute(req.params.id);
      res.status(204).send();
    } catch (err: any) {
      res.status(400).json({ error: err.message });
    }
  };
}
