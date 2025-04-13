import { Controller, Post, Param, Body } from '@nestjs/common';
import { MessageService } from '../message/message.service';

@Controller('users')
export class UserController {
  constructor(private readonly messageService: MessageService) {}

  @Post(':id/messages')
  async sendMessage(
    @Param('id') receiverId: number,
    @Body('content') content: string,
  ) {
    const senderId = 1; // Placeholder: Replace with authenticated user ID later
    // Call MessageService to send the message
    return this.messageService.sendMessage({ senderId, receiverId, content });
  }
}