import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { DogsService } from 'src/dogs/dogs.service';

@Controller('auth')
export class AuthController {
  constructor(private dogsService: DogsService) {}

  @Get()
  findAll() {
    return {
      status: true,
    };
  }

  @Get(':id')
  getOne(@Param('id', ParseIntPipe) id: number) {
    return this.dogsService.findOne(id);
  }
}
