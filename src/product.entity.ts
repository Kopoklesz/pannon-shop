import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Webshop } from './webshop.entity';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  product_id: number;

  @Column()
  name: string;

  @Column()
  category: string;

  @Column({ nullable: true })
  image: string;

  @Column('text')
  description: string;

  @Column('decimal', { precision: 10, scale: 2 })
  price: number;

  @Column()
  max_stock: number;

  @Column()
  current_stock: number;

  @Column({ type: 'date', default: () => 'CURRENT_DATE' })
  upload_date: Date;

  @Column({ default: 'available' })
  status: 'available' | 'unavailable';

  @ManyToOne(() => Webshop, webshop => webshop.products)
  webshop: Webshop;
}