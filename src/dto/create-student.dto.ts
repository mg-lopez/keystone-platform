export class CreateStudentDto {
  firstName: string;
  lastName: string;
  email: string;
  passwordHash: string;
  role: 'student';
}