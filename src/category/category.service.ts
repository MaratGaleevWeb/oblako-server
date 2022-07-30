import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CategoryEntity } from './category.entity';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(CategoryEntity)
    private readonly categoryRepository: Repository<CategoryEntity>,
  ) {}

  getCategories(): Promise<CategoryEntity[]> {
    return this.categoryRepository.find();
  }

  getCategory(title: string): Promise<CategoryEntity> {
    return this.categoryRepository.findOneBy({ title });
  }

  createCategory(title: string): Promise<CategoryEntity> {
    return this.categoryRepository.save({ title });
  }
}
