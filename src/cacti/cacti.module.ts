import { Module } from '@nestjs/common';
import { CactiController } from './cacti.controller';
import { CactiService } from './cacti.service';

@Module({
  controllers: [CactiController],
  providers: [CactiService],
})
export class CactiModule {}
