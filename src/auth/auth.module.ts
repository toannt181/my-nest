import { Module } from '@nestjs/common';
import { DogsModule } from 'src/dogs/dogs.module';
import { AuthController } from './auth.controller';

@Module({
  imports: [DogsModule],
  controllers: [AuthController],
})
export class AuthModule {}
