import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm';
import { StudentProfile } from './student-profile.entity';
import { InvestorProfile } from './investor-profile.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ unique: true })
  email: string;

  @Column()
  passwordHash: string; // Store hashed password

  @Column({ nullable: true })
  phone?: string;

  @Column({ nullable: true })
  linkedinUrl?: string;

  @Column()
  role: 'student' | 'investor';

  @OneToOne(() => StudentProfile, studentProfile => studentProfile.user)
  studentProfile?: StudentProfile;

  @OneToOne(() => InvestorProfile, investorProfile => investorProfile.user)
  investorProfile?: InvestorProfile;
}