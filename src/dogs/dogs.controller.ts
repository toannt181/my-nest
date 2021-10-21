import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Redirect,
} from '@nestjs/common';
import { CreateDogDto } from './dogs.dto';
import { DogsService } from './dogs.service';

@Controller('dogs')
export class DogsController {
  constructor(private dogService: DogsService) {}

  @Get()
  findAll() {
    return {
      name: 'Toan',
      age: 25,
    };
  }

  @Get(':id')
  getOne(@Param('id') params) {
    return params;
  }

  @Post(':id')
  create(@Body() createDogDto: CreateDogDto, @Param('id') id) {
    return createDogDto + id;
  }
}
