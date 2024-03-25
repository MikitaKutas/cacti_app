import { Injectable } from '@nestjs/common';
import { Cactus } from './entities/cactus.entity';
import { InjectModel } from '@nestjs/sequelize';
import { CreateCactusDto } from './dto/create-cactus.dto';

@Injectable()
export class CactiService {
  constructor(
    @InjectModel(CreateCactusDto)
    private readonly cactusModel: typeof CreateCactusDto
  ) {}

  async create(cactus: Cactus): Promise<Cactus> {
    const createdCactus = new CreateCactusDto(cactus);
    return await createdCactus.save();
  }

  async findAll(): Promise<Cactus[]> {
    return this.cactusModel.findAll();
  }

  async findOne(id: number): Promise<Cactus> {
    return this.cactusModel.findOne({ where: { id } });
  }

  async update(id: number, cactusData): Promise<[number, Cactus[]]> {
    const [affectedCount, affectedRows] = await this.cactusModel.update(
      cactusData,
      {
        where: { id },
        returning: true,
      }
    );

    return [affectedCount, affectedRows as Cactus[]];
  }

  async remove(id: number): Promise<number> {
    return this.cactusModel.destroy({ where: { id } });
  }
}
