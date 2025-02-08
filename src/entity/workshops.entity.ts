import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { BaseEntity } from 'src/common/helper/base.entity';
import { Department } from './departments.entity';
import { Branch } from './branches.entity';

@Entity('workshops')
export class Workshop extends BaseEntity {
  @Column({ length: 100, nullable: false })
  name: string;

  @ManyToOne(() => Department, (department) => department.workshops, {
    nullable: false,
  })
  @JoinColumn({ name: 'department_id' })
  department: Department;

  @ManyToOne(() => Branch, (branch) => branch.workshops, { nullable: false })
  @JoinColumn({ name: 'branch_id' })
  branch: Branch;
}
