import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { TypeDocument } from './type-document.entity';

@Entity('clients')
export class Client {
  @PrimaryColumn()
  documentNumber: string;

  @Column({ nullable: false })
  firstName: string;

  @Column({ nullable: false })
  lastName: string;

  @Column({ unique: true, nullable: false })
  email: string;

  @Column({ unique: true, nullable: false })
  phone: string;

  @ManyToOne(() => TypeDocument, (typeDocument) => typeDocument.id)
  @JoinColumn({ name: 'type_document_id' })
  typeDocument: TypeDocument;
}
