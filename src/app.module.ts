import { Module } from '@nestjs/common';
import { CactiModule } from './cacti/cacti.module';
import { CoreModule } from './core/core.module';

@Module({
  imports: [CoreModule, CactiModule],
})
export class AppModule {}
