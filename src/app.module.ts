import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DogsModule } from './dogs/dogs.module';
import { AuthModule } from './auth/auth.module';
import { DynamicModuleModule } from './dynamic-module/dynamic-module.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    DogsModule,
    AuthModule,
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
    }),
    DynamicModuleModule.forRoot({ name: 'Toan' }),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
