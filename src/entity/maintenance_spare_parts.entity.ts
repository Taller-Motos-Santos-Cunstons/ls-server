import { BaseEntity } from 'src/common/helper/base.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { Maintenance } from './maintenances.entity';

@Entity('maintenance_spare_parts')
export class MaintenanceSparePart extends BaseEntity {
  @Column({ nullable: false })
  quantityUsed: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, nullable: false })
  unit_price: number;

  get total_price(): number {
    return this.quantityUsed * this.unit_price;
  }

  @ManyToOne(
    () => Maintenance,
    (maintenance) => maintenance.maintenanceSpareParts,
    { nullable: false },
  )
  @JoinColumn({ name: 'maintenance_id' })
  maintenance: Maintenance;
}
