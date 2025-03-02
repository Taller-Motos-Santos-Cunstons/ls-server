import { BaseEntity } from 'src/common/helper/base.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { TypeofCylinder } from './typeof-cylidner.entity';
import { MotorType } from './engine-type.entity';
import { User } from './user.entity';
import { Citation } from './citation.entity';

@Entity('motor_cycles')
export class MotorCycles extends BaseEntity {
  @Column()
  num_series: string;

  @Column()
  brand: string;

  @Column()
  model: string;

  @Column()
  plate_number: string;

  @Column()
  engine_capacity: string;

  @Column()
  colors: string;

  @ManyToOne(() => User, (user) => user.documentNumber, { nullable: false })
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => TypeofCylinder, (typeofCylinder) => typeofCylinder.id, {
    nullable: false,
  })
  @JoinColumn({ name: 'type_clindraje_id' })
  typeofCylinder: TypeofCylinder;

  @ManyToOne(() => MotorType, (motorType) => motorType.id, { nullable: false })
  @JoinColumn({ name: 'motor_type_id' })
  motorType: MotorType;

  @OneToMany(() => Citation, (citation) => citation.motorcycle)
  citations: Citation[];
}
