import {
  Entity,
  Column,
  PrimaryColumn,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';
import { Gender } from './enums/gender.enum';
import { Role } from './enums/role.enum';
import { TypeDocument } from './type-document.entity';

@Entity('users')
export class User {
  @PrimaryColumn()
  documentNumber: string;

  @Column({ length: 500, nullable: false })
  name: string;

  @Column({ type: 'text', nullable: false })
  firstName: string;

  @Column({ unique: true, nullable: false })
  email: string;

  @Column({ nullable: false })
  password: string;

  @Column({
    type: 'enum',
    enum: Gender,
    nullable: false,
  })
  gender: Gender;

  @Column({
    type: 'enum',
    enum: Role,
    default: Role.Client,
    nullable: false,
  })
  role: Role;

  @Column({ default: true, nullable: false })
  status: boolean;

  @CreateDateColumn({ type: 'timestamp', name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp', name: 'updated_at' })
  updatedAt: Date;

  @ManyToOne(() => TypeDocument, (typeDocument) => typeDocument.id)
  @JoinColumn({ name: 'type_document_id' })
  typeDocument: TypeDocument;
}
