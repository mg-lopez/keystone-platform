import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service'; // Assuming UserService exists or will be created

@Module({
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService], 
})
export class UserModule {}