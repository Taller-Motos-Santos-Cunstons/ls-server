import { BaseEntity } from 'src/common/helper/base.entity';
import { Product } from './products.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { InventoryMovement } from './inventary-movement.entity';

@Entity('inventories')
export class Inventory extends BaseEntity {
  @Column({ nullable: false })
  quantity: number;

  @Column({ type: 'timestamp', nullable: false })
  transactionDate: Date;

  @ManyToOne(() => Product, (product) => product.inventories, {
    nullable: false,
  })
  @JoinColumn({ name: 'product_id' })
  product: Product;

  @OneToMany(
    () => InventoryMovement,
    (inventoryMovement) => inventoryMovement.inventory,
  )
  inventoryMovements: InventoryMovement[];
}
