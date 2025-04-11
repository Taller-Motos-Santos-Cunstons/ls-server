import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Gender, Roles } from '@prisma/client';

@ObjectType()
export class User {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  documentNumber: string;

  @Field(() => String)
  fullName: string;

  @Field(() => String)
  lastName: string;

  @Field(() => String)
  email: string;

  @Field(() => String)
  password: string;

  @Field(() => Gender)
  gender: Gender;

  @Field(() => Roles)
  role: Roles;

  @Field(() => String, { nullable: true })
  municipalityId?: string;

  @Field(() => String, { nullable: true })
  documentTypeId?: string;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;
}
