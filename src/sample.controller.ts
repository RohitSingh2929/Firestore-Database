import { Body, Controller, Get, Param, Post, Put, Delete } from '@nestjs/common';
import { FirestoreService } from './firestore.service';

@Controller('sample')
export class SampleController {
  constructor(private readonly firestoreService: FirestoreService) {}

  @Post()
  async create(@Body() data: any): Promise<string> {
    return this.firestoreService.create(data);
  }

  @Get()
  async findAll(): Promise<any[]> {
    return this.firestoreService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<any> {
    return this.firestoreService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() data: any): Promise<void> {
    return this.firestoreService.update(id, data);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    return this.firestoreService.delete(id);
  }
}
