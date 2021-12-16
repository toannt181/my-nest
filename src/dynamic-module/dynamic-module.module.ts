import { DynamicModule, Module } from '@nestjs/common';

@Module({})
export class DynamicModuleModule {
  static forRoot(options: { name: string }): DynamicModule {
    return {
      module: DynamicModuleModule,
    };
  }
}
