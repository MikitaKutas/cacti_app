import { ApiProperty } from "@nestjs/swagger";

export class Cactus {
  @ApiProperty({
    example: "Spike",
    description: 'The Name of the Cactus',
  })
  name: string;

  @ApiProperty({ example: 25, description: "The size of the Cactus" })
  size: number;

  @ApiProperty({
    example: "Green",
    description: "The color of the Cactus",
  })
  color: string;

  @ApiProperty({
    example: 1,
    description: "The ID of the Cactus in the database",
  })
  id?: number;
}