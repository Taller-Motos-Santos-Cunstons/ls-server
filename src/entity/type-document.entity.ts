import { BaseEntity } from 'src/common/helper/base.entity';
import { Column, Entity, OneToMany } from 'typeorm';
import { Client } from './client.entity';
import { User } from './user.entity';

@Entity('type_documents')
export class TypeDocument extends BaseEntity {
  @Column({ length: 100, nullable: false })
  document: string;

  @Column({ length: 10, nullable: false })
  abbreviation: string;

  @OneToMany(() => Client, (client) => client.typeDocument)
  client: Client[];

  @OneToMany(() => User, (user) => user.typeDocument)
  user: User[];
}
