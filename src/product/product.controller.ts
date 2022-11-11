import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Product } from 'src/product/product.entity';
import { ProductDto } from './dto/product.dto';
import { ProductService } from './product.service';

@Controller('products')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Get()
  getProducts(): Promise<Product[]> {
    return this.productService.getAll();
  }

  @Get('/:id')
  getProduct(@Param('id') Id: number): Promise<Product> {
    return this.productService.getById(Id);
  }

  @Put('/:id')
  updateProduct(
    @Body() productDto: ProductDto,
    @Param('id') Id: number,
  ): Promise<Product> {
    return this.productService.update(Id, productDto);
  }

  @Post()
  createProduct(@Body() productDto: ProductDto): Promise<Product> {
    return this.productService.create(productDto);
  }

  @Delete('/:id')
  removeProduct(@Param('id') Id: number): Promise<Product> {
    return this.productService.remove(Id);
  }
}
