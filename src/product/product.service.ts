import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductDto } from './dto/product.dto';
import { Product } from './product.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
  ) {}

  getAll(): Promise<Product[]> {
    return this.productRepository.find();
  }

  async getById(Id: number): Promise<Product> {
    const product = await this.productRepository.findOne({ where: { Id } });
    if (!product) {
      throw new NotFoundException('Something went wrong');
    }
    return product;
  }

  async update(Id: number, productDto: ProductDto): Promise<Product> {
    const product = await this.productRepository.preload({ Id, ...productDto });
    if (!product) {
      throw new NotFoundException('Product does not exist');
    }
    return this.productRepository.save(product);
  }

  async create({ Name, Price }: ProductDto): Promise<Product> {
    const product = await this.productRepository.findOne({
      where: { Name },
    });
    if (product) {
      throw new BadRequestException(`Product with ${Name} already exists`);
    }
    const newProduct = await this.productRepository.create({ Price, Name });
    return this.productRepository.save(newProduct);
  }

  async remove(Id: number): Promise<Product> {
    const product = await this.productRepository.findOne({ where: { Id } });
    if (!product) {
      throw new BadRequestException('Product does not exist');
    }
    return this.productRepository.remove(product);
  }
}
