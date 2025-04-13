import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { User } from './user.entity';

@Entity()
export class StudentProfile {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => User, user => user.studentProfile)
  @JoinColumn()
  user: User;

  @Column()
  nationality: string;

  @Column({ nullable: true })
  highSchoolGrades?: string;

  @Column({ nullable: true })
  admissionExamGrades?: string;

  @Column({ nullable: true })
  universityGrades?: string;

  @Column({ nullable: true })
  universityOfferLetterUrl?: string;

  @Column({ nullable: true })
  desiredUniversity?: string;

  @Column({ nullable: true })
  desiredCourse?: string;

  @Column({ nullable: true })
  languageProficiency?: string;

  @Column({ nullable: true })
  cvUrl?: string;

  @Column({ type: 'text', nullable: true })
  personalStory?: string;

  @Column({ nullable: true })
  videoUrl?: string;

  @Column({ type: 'jsonb', nullable: true })
  supportingMedia?: { photos?: string[]; letters?: string[] };

  @Column({ type: 'jsonb', nullable: true })
  fundingRequest?: {
    tuitionAmount?: number;
    livingCosts?: number;
    fundingType?: 'donation' | 'loan' | 'both';
  };
}