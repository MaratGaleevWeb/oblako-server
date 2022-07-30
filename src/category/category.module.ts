import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

import { CategoryResolver } from './category.resolver';

import { CategoryService } from './category.service';

import { CategoryEntity } from './category.entity';

@Module({
  providers: [CategoryService, CategoryResolver],
  imports: [TypeOrmModule.forFeature([CategoryEntity])],
  exports: [CategoryService],
})
export class CategoryModule {}
