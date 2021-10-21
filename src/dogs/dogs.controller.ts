import {
  BadRequestException,
  Body,
  Controller,
  Get,
  HttpCode,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Redirect,
  UseGuards,
} from '@nestjs/common';
import { CreateDogDto } from './dogs.dto';
import { DogGuard } from './dogs.guard';
import { DogsService } from './dogs.service';

@Controller('dogs')
@UseGuards(DogGuard)
export class DogsController {
  constructor(private dogService: DogsService) {}

  @Get()
  findAll() {
    throw new BadRequestException();
    return {
      name: 'Toan',
      age: 25,
    };
  }

  @Get(':id')
  getOne(@Param('id', ParseIntPipe) params) {
    return params;
  }

  @Post(':id')
  create(@Body() createDogDto: CreateDogDto, @Param('id') id) {
    return createDogDto + id;
  }
}
