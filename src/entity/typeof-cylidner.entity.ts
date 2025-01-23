import { BaseEntity } from 'src/common/helper/base.entity';
import { Column, Entity } from 'typeorm';

@Entity('typeof_cylinder')
export class TypeofCylinder extends BaseEntity {
  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false })
  cylinder_capacity: string;
}
