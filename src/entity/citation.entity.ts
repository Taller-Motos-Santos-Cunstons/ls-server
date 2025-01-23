import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { User } from './user.entity';
import { BaseEntity } from 'src/common/helper/base.entity';
import { MotorCycles } from './motorcycles.entity';

@Entity('citation')
export class Citation extends BaseEntity {
  @Column({ type: 'timestamp', nullable: false })
  citationDate: Date;

  @Column({ type: 'text', nullable: false })
  reason: string;

  @ManyToOne(() => User, (user) => user.citations, { nullable: false })
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => MotorCycles, (motorcycle) => motorcycle.citations, {
    nullable: false,
  })
  @JoinColumn({ name: 'motorcycle_id' })
  motorcycle: MotorCycles;
}
