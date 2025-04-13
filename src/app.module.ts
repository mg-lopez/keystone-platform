import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './entities/user.entity';
import { StudentProfile } from './entities/student-profile.entity';
import { InvestorProfile } from './entities/investor-profile.entity';
import { Loan } from './entities/loan.entity';
import { Donation } from './entities/donation.entity';
import { StudentModule } from './student/student.module';
import { InvestorModule } from './investor/investor.module';
import { PaymentModule } from './payment/payment.module';
import { LoanModule } from './loan/loan.module';
import { MessageModule } from './message/message.module';
import { UserModule } from './user/user.module';
import { AdminModule } from './admin/admin.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'your_db_username',
      password: 'your_db_password',
      database: 'keystone',
      entities: [User, StudentProfile, InvestorProfile, Loan, Donation],
      synchronize: true,
    }),
    StudentModule,
    InvestorModule,
    PaymentModule,
    LoanModule,
    MessageModule,
    UserModule,
    AdminModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}