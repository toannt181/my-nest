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
  SetMetadata,
  UseGuards,
} from '@nestjs/common';
import { CreateDogDto } from './dogs.dto';
import { DogGuard } from './dogs.guard';
import { DogsService } from './dogs.service';

@Controller('dogs')
@UseGuards(DogGuard)
@SetMetadata('roles', ['admin'])
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
  getOne(@Param('id', ParseIntPipe) id) {
    return this.dogService.findOne(id);
  }

  @Post(':id')
  create(@Body() createDogDto: CreateDogDto, @Param('id') id) {
    return createDogDto + id;
  }
}
