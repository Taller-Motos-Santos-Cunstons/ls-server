import {
  Entity,
  Column,
  PrimaryColumn,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Gender } from './enums/gender.enum';
import { Role } from './enums/role.enum';
import { TypeDocument } from './type-document.entity';
import { Appointment } from './appointment.entity';
import { Department } from './departments.entity';
import { Municipality } from './municipalitie.entity';

@Entity('users')
export class User {
  @PrimaryColumn()
  documentNumber: string;

  @Column({ nullable: false })
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
    default: Role.CLIENT,
    nullable: false,
  })
  role: Role;

  @Column({ default: true, nullable: false })
  status: boolean;

  @CreateDateColumn({ type: 'timestamp', name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp', name: 'updated_at' })
  updatedAt: Date;

  @ManyToOne(() => TypeDocument, (typeDocument) => typeDocument.id, {
    nullable: false,
  })
  @JoinColumn({ name: 'type_document_id' })
  typeDocument: TypeDocument;

  @OneToMany(() => Appointment, (appointment) => appointment.user)
  appointments: Appointment[];

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
}
