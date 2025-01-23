import { BaseEntity } from 'src/common/helper/base.entity';
import { Column, Entity } from 'typeorm';

@Entity('type_clindraje')
export class TypeClindraje extends BaseEntity {
  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false })
  capacity_cylindrage: string;
}
