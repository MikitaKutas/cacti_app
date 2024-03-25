import { IsInt, IsString } from 'class-validator';
import { Table, Column, Model, PrimaryKey, AutoIncrement } from 'sequelize-typescript';
import { Cactus } from '../entities/cactus.entity';

@Table
export class CreateCactusDto extends Model<Cactus> {
  @PrimaryKey
  @AutoIncrement
  @Column
  @IsInt()
  readonly id: number;

  @Column
  @IsString()
  readonly name: string;

  @Column
  @IsInt()
  readonly size: number;

  @Column
  @IsString()
  readonly color: string;
}
