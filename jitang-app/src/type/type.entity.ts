import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class TypeList {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  type: string;

  @Column()
  content: string;

  @Column()
  userid: string;

  @Column()
  title: string;

}
