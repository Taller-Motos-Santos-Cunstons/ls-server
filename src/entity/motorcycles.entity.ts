import { BaseEntity } from 'src/common/helper/base.entity';
import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { TypeClindraje } from './type-clindraje.entity';
import { MotorType } from './motor-type.entity';
import { User } from './user.entity';
import { Appointment } from './appointment.entity';

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

  @ManyToOne(() => TypeClindraje, (typeClindraje) => typeClindraje.id, {
    nullable: false,
  })
  @JoinColumn({ name: 'type_clindraje_id' })
  typeClindraje: TypeClindraje;

  @ManyToOne(() => MotorType, (motorType) => motorType.id, { nullable: false })
  @JoinColumn({ name: 'motor_type_id' })
  motorType: MotorType;

  @OneToMany(() => Appointment, (appointment) => appointment.motorcycle)
  appointments: Appointment[];
}
