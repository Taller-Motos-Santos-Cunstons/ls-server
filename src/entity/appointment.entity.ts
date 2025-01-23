import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { User } from './user.entity';
import { BaseEntity } from 'src/common/helper/base.entity';
import { MotorCycles } from './motorcycles.entity';

@Entity('citation')
export class Appointment extends BaseEntity {
  @Column({ type: 'timestamp', nullable: false })
  appointmentDate: Date;

  @Column({ type: 'text', nullable: false })
  reason: string;

  @ManyToOne(() => User, (user) => user.appointments, { nullable: false })
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => MotorCycles, (motorcycle) => motorcycle.appointments, {
    nullable: false,
  })
  @JoinColumn({ name: 'motorcycle_id' })
  motorcycle: MotorCycles;
}
