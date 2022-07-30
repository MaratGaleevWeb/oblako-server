import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CategoryService } from 'src/category/category.service';

import { TodoEntity } from './todo.entity';

import { CreateTodoInput } from './inputs/create-todo.input.';
import { UpdateTodoInput } from './inputs/update-todo.input';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(TodoEntity)
    private readonly todoRepository: Repository<TodoEntity>,
    private readonly categoryService: CategoryService,
  ) {}

  async createTodo(input: CreateTodoInput): Promise<TodoEntity> {
    let category = await this.categoryService.getCategory(input.category);

    if (!category) {
      category = await this.categoryService.createCategory(input.category);
    }

    return this.todoRepository.save({ ...input, category });
  }

  async updateTodo({ id, isCompleted }: UpdateTodoInput): Promise<TodoEntity> {
    const todo = await this.todoRepository.findOneBy({ id });

    return this.todoRepository.save({ ...todo, isCompleted });
  }
}
