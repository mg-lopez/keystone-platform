import { Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import { User } from './user.entity';

@Entity()
export class InvestorProfile {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => User, user => user.investorProfile)
  @JoinColumn()
  user: User;

  // Add any investor-specific fields here, if needed
}