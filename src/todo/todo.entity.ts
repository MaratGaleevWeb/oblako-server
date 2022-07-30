import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Field, ID, ObjectType } from '@nestjs/graphql';

import { CategoryEntity } from 'src/category/category.entity';

@ObjectType()
@Entity('todos')
export class TodoEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  text: string;

  @Field({ defaultValue: false })
  @Column({ default: false })
  isCompleted: boolean;

  @Field(() => CategoryEntity)
  @ManyToOne(() => CategoryEntity, (category) => category.todos)
  category: CategoryEntity;
}
