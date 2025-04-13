import { Controller, Get, Post, Param, Body } from '@nestjs/common';
import { AdminService } from './admin.service';

@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Get('investor-activity')
  // @UseGuards(JwtAuthGuard, RolesGuard) // Add guards and roles as needed
  // @Roles('admin')
  async monitorInvestorActivity() {
    // Placeholder - Needs implementation and protection
    return this.adminService.monitorInvestorActivity();
  }

  @Post('messages/:messageId/flag')
  // @UseGuards(JwtAuthGuard, RolesGuard) // Add guards and roles as needed
  // @Roles('admin')
  async flagSuspiciousMessage(@Param('messageId') messageId: number) {
    // Placeholder - Needs implementation and protection
    return this.adminService.flagSuspiciousMessage(messageId);
  }

  @Get('loans/:loanId/review')
  // @UseGuards(JwtAuthGuard, RolesGuard) // Add guards and roles as needed
  // @Roles('admin')
  async reviewLoanTerms(@Param('loanId') loanId: number) {
    // Placeholder - Needs implementation and protection
    return this.adminService.reviewLoanTerms(loanId);
  }

  @Post('users')
  // @UseGuards(JwtAuthGuard, RolesGuard) // Add guards and roles as needed
  // @Roles('admin')
  async manageUsers(@Body() userData: any) { // Adjust the type as needed
    // Placeholder - Needs implementation and protection
    return this.adminService.manageUsers(userData);
  }
}