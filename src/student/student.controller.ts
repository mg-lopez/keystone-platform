import { Controller, Post, Body, Put, Param, Get, Query } from '@nestjs/common';
import { StudentService } from './student.service';
import { CreateStudentProfileDto } from '../dto/create-student-profile.dto';
import { UpdateStudentProfileDto } from '../dto/update-student-profile.dto';

@Controller('students')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Post('profile')
  async createProfile(@Body() createStudentProfileDto: CreateStudentProfileDto) {
    return this.studentService.create(createStudentProfileDto);
  }

  @Put('profile/:id')
  async updateProfile(@Param('id') id: number, @Body() updateStudentProfileDto: UpdateStudentProfileDto) {
    return this.studentService.update(id, updateStudentProfileDto);
  }

  @Get('profile/:id')
  async getProfile(@Param('id') id: number) {
    return this.studentService.findOne(id);
  }

  @Get('dashboard')
  async getDashboard() {
    // TODO: Determine how to access the student ID (e.g., from authentication)
    return this.studentService.getDashboardData(1); // Placeholder student ID
  }

  @Get()
  async getStudentsByCriteria(@Query() criteria: any) {
    return this.studentService.findByCriteria(criteria);
  }
}