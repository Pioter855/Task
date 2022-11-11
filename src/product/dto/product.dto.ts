import { IsNumber, IsString, Length } from 'class-validator';

export class ProductDto {
  @IsString()
  @Length(3, 100)
  Name: string;

  @IsNumber()
  Price: number;
}
