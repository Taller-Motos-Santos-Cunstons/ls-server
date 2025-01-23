import { Entity, Column, OneToMany } from 'typeorm';
import { BaseEntity } from 'src/common/helper/base.entity';
import { Branch } from './branches.entity';
import { Workshop } from './workshops.entity';
import { User } from './user.entity';

@Entity('departments')
export class Department extends BaseEntity {
  @Column({ length: 100, nullable: false })
  name: string;

  @OneToMany(() => Branch, (branch) => branch.department)
  branches: Branch[];

  @OneToMany(() => Workshop, (workshop) => workshop.department)
  workshops: Workshop[];

  @OneToMany(() => User, (user) => user.department)
  users: User[];
}
