import { Resolver, Query } from '@nestjs/graphql';

import { CategoryService } from './category.service';

import { CategoryEntity } from './category.entity';

@Resolver('Category')
export class CategoryResolver {
  constructor(private readonly categoriesService: CategoryService) {}

  @Query(() => [CategoryEntity])
  categories() {
    return this.categoriesService.getCategories();
  }
}
