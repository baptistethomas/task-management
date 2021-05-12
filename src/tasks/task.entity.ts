import {
  BaseEntity,
  Column,
  Entity, JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { TaskStatus } from './task-status.enum';
import { User } from '../auth/user.entity';

@Entity()
export class Task extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  status: TaskStatus;

  @Column()
  user_id: number;

  @ManyToOne((type) => User, (user) => user.tasks, { eager: false })
  @JoinColumn({ name: 'user_id' })
  user: User;
}
