import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
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
  @ApiResponse({
    status: 200,
    description: 'The created cactus',
    type: Promise<Cactus>
   })
  create(@Body() cactus: Cactus) {
    return this.cactiService.create(cactus);
  }

  @Get()
  @ApiResponse({
    status: 200,
    description: 'The found cacti',
    type: Promise<Cactus[]>,
  })
  findAll(): Promise<Cactus[]> {
    return this.cactiService.findAll();
  }

  @Get(':id')
  @ApiResponse({
    status: 200,
    description: 'The found cactus',
    type: Promise<Cactus>,
  })
  findOne(@Param('id') id: string): Promise<Cactus> {
    return this.cactiService.findOne(Number(id));
  }

  @Patch(':id')
  @ApiResponse({
    status: 200,
    description: 'The updated cacti',
    type: Promise<[number, Cactus[]]>,
  })
  update(@Param('id') id: string, @Body() cactusData): Promise<[number, Cactus[]]> {
    return this.cactiService.update(Number(id), cactusData);
  }

  @Delete(':id')
  @ApiResponse({
    status: 200,
    description: 'Count of deleted cacti',
    type: Promise<number>,
  })
  delete(@Param('id') id: string): Promise<number> {
    return this.cactiService.remove(Number(id));
  }
}
