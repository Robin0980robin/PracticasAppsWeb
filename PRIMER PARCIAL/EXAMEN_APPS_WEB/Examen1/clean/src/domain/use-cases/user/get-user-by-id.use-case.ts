import { User } from '../../entities/user.entity';
import { UserRepository } from '../../repositories/user.repository';

export class GetUserByIdUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(id: string): Promise<User | null> {
    return await this.userRepository.findById(id);
  }
}
