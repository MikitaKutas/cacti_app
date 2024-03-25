import { Module } from '@nestjs/common';
import { CactiModule } from './cacti/cacti.module';
import { CoreModule } from './core/core.module';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: 'db',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'postgres',
      autoLoadModels: true,
      synchronize: true,
    }),
    CoreModule,
    CactiModule],
})
export class AppModule {}
