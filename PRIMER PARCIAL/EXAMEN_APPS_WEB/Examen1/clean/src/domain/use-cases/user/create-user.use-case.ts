import { User } from '../../entities/user.entity';
import { UserRepository } from '../../repositories/user.repository';

export class CreateUserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(userData: Omit<User, 'id'>): Promise<User> {
    const existing = await this.userRepository.findByEmail(userData.email);
    if (existing) throw new Error('Email ya registrado');

    const user: User = {
      ...userData,
      id: '' // será generado por el repositorio
    };

    return await this.userRepository.create(user);
  }
}
