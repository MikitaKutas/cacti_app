import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import * as request from 'supertest';
import { CactiModule } from '../../src/cacti/cacti.module';
import { CactiService } from '../../src/cacti/cacti.service';
import { CoreModule } from '../../src/core/core.module';

describe('Cacti', () => {
  const cactiService = { findAll: () => ['test'] };

  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [CactiModule, CoreModule],
    })
      .overrideProvider(CactiService)
      .useValue(cactiService)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  it(`/GET cacti`, () => {
    return request(app.getHttpServer()).get('/cats').expect(200).expect({
      data: cactiService.findAll(),
    });
  });

  afterAll(async () => {
    await app.close();
  });
});
