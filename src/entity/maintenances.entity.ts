import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { Product } from './products.entity';
import { MaintenanceSparePart } from './maintenance_spare_parts.entity';
import { BaseEntity } from 'src/common/helper/base.entity';

@Entity('maintenances')
export class Maintenance extends BaseEntity {
  @Column({ type: 'timestamp', nullable: false })
  maintenanceDate: Date;

  @Column({ type: 'timestamp', nullable: false })
  warrantyDate: Date;

  @Column({ type: 'text', nullable: false })
  reason: string;

  @Column({ nullable: false })
  cost: number;

  @ManyToOne(() => Product, (product) => product.maintenances, {
    nullable: false,
  })
  @JoinColumn({ name: 'product_id' })
  product: Product;

  @OneToMany(
    () => MaintenanceSparePart,
    (maintenanceSparePart) => maintenanceSparePart.maintenance,
  )
  maintenanceSpareParts: MaintenanceSparePart[];
}
