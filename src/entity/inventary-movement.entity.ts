import { BaseEntity } from 'src/common/helper/base.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { TypeMovement } from './enums/type-movement.enum';
import { Inventory } from './inventary.entity';

@Entity('inventory_movements')
export class InventoryMovement extends BaseEntity {
  @Column({
    type: 'enum',
    enum: TypeMovement,
    nullable: false,
  })
  type_movement: string;

  @Column({
    type: 'text',
    nullable: false,
  })
  description: string;

  @ManyToOne(() => Inventory, (inventory) => inventory.inventoryMovements, {
    nullable: false,
  })
  @JoinColumn({ name: 'inventory_id' })
  inventory: Inventory;
}
