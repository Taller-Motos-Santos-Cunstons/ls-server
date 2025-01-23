import { Entity, Column, OneToMany } from 'typeorm';
import { BaseEntity } from 'src/common/helper/base.entity';
import { Branch } from './branches.entity';
import { User } from './user.entity';

@Entity('municipalities')
export class Municipality extends BaseEntity {
  @Column({ length: 100, nullable: false })
  name: string;

  @OneToMany(() => Branch, (branch) => branch.municipality)
  branches: Branch[];

  @OneToMany(() => User, (user) => user.municipality)
  users: User[];
}
