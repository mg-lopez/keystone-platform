import { Controller, Post, Body, Put, Param, Get } from '@nestjs/common';
import { InvestorService } from './investor.service';
import { PaymentService } from '../payment/payment.service';
import { LoanService } from '../loan/loan.service';

@Controller('investors')
export class InvestorController {
  constructor(
    private readonly investorService: InvestorService,
    private readonly paymentService: PaymentService,
    private readonly loanService: LoanService,
  ) {}

  @Post('donations')
  async makeDonation(@Body() donationDetails: any) {
    // Call paymentService to process the donation
    // This is a basic implementation. You'll need to integrate with a real payment gateway.
    const { amount, investorId } = donationDetails;
    return this.paymentService.processDonation({ amount, investorId });
  }

  @Post('loans')
  async offerLoan(@Body() loanOfferDetails: any) {
    // Call loanService to create the loan offer
    // This is a basic implementation. You'll need to validate the terms and potentially generate a loan agreement.
    const { studentId, investorId, amount, interestRate, repaymentTerm } = loanOfferDetails;
    return this.loanService.createLoanOffer({ studentId, investorId, amount, interestRate, repaymentTerm });
  }

  @Put('loans/negotiate')
  async negotiateLoan(@Body() loanNegotiationDto: any) {
    // Call loanService to handle loan negotiation (accept, reject, counter)
    // This is a basic implementation. You'll need to validate the terms and potentially update a loan agreement.
    // The loanNegotiationDto should have loanId, action ('accept', 'reject', 'counter'), and optional counterOffer details
    return this.loanService.handleLoanNegotiation(loanNegotiationDto);
  }

  @Post('loans/:loanId/agreement')
  async generateLoanAgreement(@Param('loanId') loanId: number) {
    // Call loanService to generate the loan agreement
    // This is a basic implementation. You'll need to pass the right data to generate the contract.
    return this.loanService.generateLoanAgreement(loanId);
  }

  @Post('loans/:loanId/sign')
  async signLoanAgreement(@Param('loanId') loanId: number) {
    // Call loanService to simulate the loan signing
    // This is a placeholder implementation. You'll need to integrate with an e-signing service.
    return this.loanService.signLoanAgreement(loanId);
  }

  @Get('/dashboard')
  async getInvestorDashboard() {
    // Replace 1 with the actual investor ID from authentication/request
    // We are using 1 as placeholder now.
    return this.investorService.getDashboardData(1);
  }

  // You'll add more endpoints here in future steps (e.g., GET/PUT profile)
}