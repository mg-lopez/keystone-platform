import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InvestorService } from './investor.service';
import { InvestorController } from './investor.controller';
import { User } from '../entities/user.entity';
import { InvestorProfile } from '../entities/investor-profile.entity';
import { PaymentService } from '../payment/payment.service'; // Keep here for now
import { LoanService } from '../loan/loan.service'; // Keep here for now
import { Loan } from '../entities/loan.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, InvestorProfile, Loan])],
  providers: [InvestorService, PaymentService, LoanService],
  controllers: [InvestorController],
})
export class InvestorModule {}