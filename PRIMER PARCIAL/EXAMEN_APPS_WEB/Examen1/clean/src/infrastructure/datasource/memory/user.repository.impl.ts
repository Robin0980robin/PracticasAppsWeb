import { User } from '../../../domain/entities/user.entity';
import { UserRepository } from '../../../domain/repositories/user.repository';
import { randomUUID } from 'crypto';

export class InMemoryUserRepository implements UserRepository {
  private users: User[] = [];

  async create(user: User): Promise<User> {
    const newUser: User = {
      ...user,
      id: user.id || randomUUID()
    };
    this.users.push(newUser);
    return newUser;
  }

  async findById(id: string): Promise<User | null> {
    return this.users.find(u => u.id === id) || null;
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.users.find(u => u.email === email) || null;
  }

  async update(id: string, userData: Partial<User>): Promise<User> {
    const index = this.users.findIndex(u => u.id === id);
    if (index === -1) throw new Error('User not found');

    this.users[index] = {
      ...this.users[index],
      ...userData
    };

    return this.users[index];
  }

  async delete(id: string): Promise<void> {
    this.users = this.users.filter(u => u.id !== id);
  }

  async findAll(): Promise<User[]> {
    return [...this.users];
  }
}
