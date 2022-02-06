import { Author, Book, Genre } from '../entities';
import { IGenericRepository } from './';

export abstract class IDataServices {
  abstract authors: IGenericRepository<Author>;

  abstract books: IGenericRepository<Book>;

  abstract genres: IGenericRepository<Genre>;
}
