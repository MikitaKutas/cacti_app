import { Injectable } from '@nestjs/common';
import { Cactus } from './entities/cactus.entity';

@Injectable()
export class CactiService {
  private readonly cacti: Cactus[] = [];

  create(cactus: Cactus) {
    this.cacti.push(cactus);
  }

  findAll(): Cactus[] {
    return this.cacti;
  }
}
