import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CategoryModule } from 'src/category/category.module';

import { TodoResolver } from './todo.resolver';

import { TodoService } from './todo.service';

import { TodoEntity } from './todo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TodoEntity]), CategoryModule],
  providers: [TodoResolver, TodoService],
})
export class TodoModule {}
