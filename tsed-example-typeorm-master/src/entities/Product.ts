import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  image: string;

  @Column()
  volumeUnit: string;

  @Column()
  volumeValue: number;

  @Column()
  demand: number;

  @Column()
  priceAsUnit: number;

  @Column()
  priceAsBatch: number;

  @Column()
  batchSize: number;
}
