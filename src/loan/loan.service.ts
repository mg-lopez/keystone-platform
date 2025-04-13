import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Loan } from '../entities/loan.entity';
import { LoanNegotiationDto } from '../dto/loan-negotiation.dto';
import * as pdfMake from 'pdfmake/build/pdfmake'; // Import the pdfmake library


@Injectable()
export class LoanService {
  constructor(
    @InjectRepository(Loan)
    private loanRepository: Repository<Loan>,
  ) {}
  

  createLoanOffer(loanOffer: { studentId: number, investorId: number, amount: number, interestRate: number, repaymentTerm: number }) {
    const { studentId, investorId, amount, interestRate, repaymentTerm } = loanOffer;
    console.log(`Creating loan offer of ${amount} at ${interestRate}% for ${repaymentTerm} months between student ${studentId} and investor ${investorId}`);
    // Placeholder: Needs validation of loan terms
    // Placeholder: Needs to generate a loan agreement PDF
    // Placeholder: Needs to save loan details to the database
    // Placeholder: Needs to handle loan acceptance/rejection
  }

  async handleLoanNegotiation(loanNegotiationDto: LoanNegotiationDto): Promise<Loan> {
    const { loanId, action, counterOffer } = loanNegotiationDto;
    const loan = await this.loanRepository.findOneBy({ id: loanId });
    
    if (!loan) {
      // Handle loan not found error
      throw new Error(`Loan with ID ${loanId} not found`);
    }

    if (action === 'accept') {
        // Placeholder: Implement validation for acceptance
      loan.status = 'active';
    } else if (action === 'reject') {
        // Placeholder: Implement validation for rejection
      loan.status = 'rejected';
    } else if (action === 'counter' && counterOffer) {
        // Placeholder: Implement validation for counter offer terms
        // Placeholder: Potentially limit the number of counter-offers
      loan.interestRate = counterOffer.interestRate ?? loan.interestRate;
      loan.repaymentTerm = counterOffer.repaymentTerm ?? loan.repaymentTerm;
      loan.gracePeriod = counterOffer.gracePeriod ?? loan.gracePeriod;
    }

    return this.loanRepository.save(loan);
  }

  trackLoanRepayment(loanId: number, amount: number) {
    console.log(`Tracking repayment of ${amount} for loan ${loanId}`);
    // Placeholder: Needs to record the repayment details
  }
}