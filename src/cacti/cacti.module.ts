import { Module } from '@nestjs/common';
import { CactiController } from './cacti.controller';
import { CactiService } from './cacti.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { Cactus } from './entities/cactus.entity';
import { CreateCactusDto } from './dto/create-cactus.dto';

@Module({
  imports: [
    SequelizeModule.forFeature([CreateCactusDto]),
  ],
  controllers: [CactiController],
  providers: [CactiService],
})
export class CactiModule {}
