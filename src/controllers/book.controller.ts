import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import {
  CreateBookDto,
  UpdateBookDto,
  CreateBookResponseDto,
} from 'src/core/dtos';
import { BookFactoryService } from 'src/services/use-cases/book/book-factory.service';
import { BookServices } from 'src/services/use-cases/book/book-services.service';

@Controller('api/book')
export class BookController {
  constructor(
    private bookServices: BookServices,
    private bookFactoryService: BookFactoryService,
  ) {}

  @Get()
  async getAll() {
    return this.bookServices.getAllBooks();
  }

  @Get(':id')
  async getById(@Param('id') id: any) {
    return this.bookServices.getBookById(id);
  }

  @Post()
  async createBook(@Body() bookDto: CreateBookDto) {
    const createBookResponse = new CreateBookResponseDto();
    try {
      const book = this.bookFactoryService.createNewBook(bookDto);
      const createdBook = await this.bookServices.createBook(book);
      createBookResponse.success = true;
      createBookResponse.createdBook = createdBook;
    } catch (error) {
      createBookResponse.success = false;
    }
    return createBookResponse;
  }

  @Put(':id')
  async updateBook(
    @Param('id') bookId: string,
    @Body() updateBookDto: UpdateBookDto,
  ) {
    const book = this.bookFactoryService.updateBook(updateBookDto);
    return await this.bookServices.updateBook(bookId, book);
  }
}
