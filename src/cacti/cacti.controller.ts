import { Body, Controller, Get, Post } from '@nestjs/common';
import { CactiService } from './cacti.service';
import { CreateCactusDto } from './dto/create-cactus.dto';
import { Cactus } from './entities/cactus.entity';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('cacti')
@Controller('cacti')
export class CactiController {
  constructor(private readonly cactiService: CactiService) {}

  @Post()
  @ApiOperation({ summary: "Create cactus" })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
  async create(@Body() createCactiDto: CreateCactusDto) {
    this.cactiService.create(createCactiDto);
  }

  @Get()
  @ApiResponse({
    status: 200,
    description: 'The found record',
    type: Promise<Cactus[]>,
  })
  async findAll(): Promise<Cactus[]> {
    return this.cactiService.findAll();
  }
}
