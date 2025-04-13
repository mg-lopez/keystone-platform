import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { User } from './user.entity';
import { StudentProfile } from './student-profile.entity';

@Entity()
export class Loan {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => StudentProfile)
  student: StudentProfile;

  @ManyToOne(() => User)
  investor: User;

  @Column()
  amount: number;

  @Column({ type: 'decimal', precision: 5, scale: 2 })
  interestRate: number;

  @Column()
  repaymentTerm: number; // In months

  @Column()
  gracePeriod: number; // In months

  @Column()
  repaymentStartDate: Date;

  @Column({ default: 'pending' })
  status: 'pending' | 'active' | 'completed' | 'defaulted';

  @Column({ nullable: true })
  agreementUrl?: string; // Store URL of signed agreement
}