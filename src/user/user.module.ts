import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserResolver } from './resolver/user.resolver';
import { DatabaseModule } from 'src/common/database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [UserResolver, UserService],
})
export class UserModule {}
