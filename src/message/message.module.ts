import { Module } from '@nestjs/common';
import { MessageService } from './message.service';

@Module({
  providers: [MessageService],
  exports: [MessageService], // Export it in case other modules need to use it
})
export class MessageModule {}