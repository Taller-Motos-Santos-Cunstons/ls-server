import { Column, Entity, OneToMany } from 'typeorm';
import { Inventory } from './inventary.entity';
import { BaseEntity } from 'src/common/helper/base.entity';
import { TypeProduct } from './enums/type-product.enum';
import { Condition } from './enums/condition.enum';

@Entity('products')
export class Product extends BaseEntity {
  @Column({ length: 255, nullable: false })
  name: string;

  @Column({ nullable: false })
  price: number;

  @Column({ nullable: false })
  stock: number;

  @Column({ type: 'text', nullable: true })
  description: string;

  @Column({
    type: 'enum',
    enum: TypeProduct,
    nullable: false,
  })
  type_product: TypeProduct;

  @Column({
    type: 'enum',
    enum: Condition,
    nullable: false,
  })
  condition: Condition;

  @OneToMany(() => Inventory, (inventory) => inventory.product)
  inventories: Inventory[];
}
