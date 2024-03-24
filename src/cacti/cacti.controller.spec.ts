import { Test } from '@nestjs/testing';
import { CactiController } from './cacti.controller';
import { CactiService } from './cacti.service';
import { Cactus } from './entities/cactus.entity';

describe('CatsController', () => {
  let cactiController: CactiController;
  let cactiService: CactiService;

  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [CactiController],
      providers: [CactiService],
    }).compile();

    cactiService = moduleRef.get<CactiService>(CactiService);
    cactiController = moduleRef.get<CactiController>(CactiController);
  });

  describe('findAll', () => {
    it('should return an array of cats', async () => {
      const result: Cactus[] = [
        {
          size: 20,
          color: 'Green',
          name: 'Spike',
        },
      ];
      jest.spyOn(cactiService, 'findAll').mockImplementation(() => result);

      expect(await cactiController.findAll()).toBe(result);
    });
  });
});
