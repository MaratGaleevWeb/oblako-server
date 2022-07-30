import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Field, ID, ObjectType } from '@nestjs/graphql';

import { TodoEntity } from 'src/todo/todo.entity';

@ObjectType()
@Entity('categories')
export class CategoryEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  title: string;

  @Field(() => [TodoEntity], { nullable: true })
  @OneToMany(() => TodoEntity, (todo) => todo.category, {
    eager: true,
  })
  todos?: TodoEntity[];
}
