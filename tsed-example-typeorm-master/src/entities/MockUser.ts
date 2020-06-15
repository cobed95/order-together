import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class MockUser {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  region: string;
}
