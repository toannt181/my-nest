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

@Controller('dogs')
export class DogsController {
  @Get()
  @Redirect('https://nestjs.com', 301)
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
