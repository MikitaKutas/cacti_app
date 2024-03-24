import { IsInt, IsString } from 'class-validator';

export class CreateCactusDto {
  @IsString()
  readonly name: string;

  @IsInt()
  readonly size: number;

  @IsString()
  readonly color: string;
}
