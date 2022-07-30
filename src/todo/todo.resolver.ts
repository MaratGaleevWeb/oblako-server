import { Args, Mutation, Resolver } from '@nestjs/graphql';

import { TodoService } from './todo.service';

import { TodoEntity } from './todo.entity';

import { CreateTodoInput } from './inputs/create-todo.input.';
import { UpdateTodoInput } from './inputs/update-todo.input';

@Resolver('Todo')
export class TodoResolver {
  constructor(private readonly todoService: TodoService) {}

  @Mutation(() => TodoEntity)
  createTodo(
    @Args('CreateTodoInput') input: CreateTodoInput,
  ): Promise<TodoEntity> {
    return this.todoService.createTodo(input);
  }

  @Mutation(() => TodoEntity)
  updateTodo(
    @Args('UpdateTodoInput') input: UpdateTodoInput,
  ): Promise<TodoEntity> {
    return this.todoService.updateTodo(input);
  }
}
