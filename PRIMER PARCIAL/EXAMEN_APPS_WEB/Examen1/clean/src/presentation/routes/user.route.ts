import { Router } from 'express';
import { InMemoryUserRepository } from '../../infrastructure/datasource/memory/user.repository.impl';
import { UserController } from '../controllers/user.controller';

const router = Router();
const userRepository = new InMemoryUserRepository();
const userController = new UserController(userRepository);

router.post('/', userController.createUser);
router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUserById);
router.delete('/:id', userController.deleteUser);

export default router;
