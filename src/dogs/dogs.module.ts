import { Module } from '@nestjs/common';
import { UsersModule } from 'src/users/users.module';
import { DogsController } from './dogs.controller';
import { DogsResolver } from './dogs.resolver';
import { DogsService } from './dogs.service';

@Module({
  imports: [UsersModule],
  providers: [DogsService, DogsResolver],
  controllers: [DogsController],
  exports: [DogsService],
})
export class DogsModule {}
