import { Column, Entity } from 'typeorm';
import { BaseEntity } from 'src/common/helper/base.entity';

@Entity('motor_types')
export class MotorType extends BaseEntity {
  @Column({ nullable: false })
  name: string;
}
