import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class InfoList {
  @PrimaryGeneratedColumn()
  id: String;

  @Column()
  belongid: String;

  @Column()
  content: String;

  @Column()
  type: String;

  @Column()
  userid: String;
}