import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentService } from './student.service';
import { StudentController } from './student.controller';
import { StudentProfile } from '../entities/student-profile.entity';

@Module({
  imports: [TypeOrmModule.forFeature([StudentProfile])],
  providers: [StudentService],
  controllers: [StudentController],
})
export class StudentModule {}