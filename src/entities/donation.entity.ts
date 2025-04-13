import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from './user.entity';
import { StudentProfile } from './student-profile.entity';

@Entity()
export class Donation {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => StudentProfile)
  student: StudentProfile;

  @ManyToOne(() => User)
  investor: User;

  @Column()
  amount: number;

  @Column()
  timestamp: Date;
}