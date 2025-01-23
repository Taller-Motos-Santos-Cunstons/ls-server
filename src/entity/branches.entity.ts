import { Entity, Column, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { BaseEntity } from 'src/common/helper/base.entity';
import { Municipality } from './municipalities.entity';
import { Department } from './departments.entity';
import { Workshop } from './workshops.entity';

@Entity('branches')
export class Branch extends BaseEntity {
  @Column({ length: 100, nullable: false })
  name: string;

  @Column({ length: 100, nullable: false })
  phone: string;

  @Column({ length: 100, nullable: false })
  address: string;

  @ManyToOne(() => Municipality, (municipality) => municipality.branches, {
    nullable: false,
  })
  @JoinColumn({ name: 'municipality_id' })
  municipality: Municipality;

  @ManyToOne(() => Department, (department) => department.branches, {
    nullable: false,
  })
  @JoinColumn({ name: 'department_id' })
  department: Department;

  @OneToMany(() => Workshop, (workshop) => workshop.branch)
  workshops: Workshop[];
}
