import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { BookServicesModule } from './services/use-cases/book/book-services.module';
import { BookController } from './controllers/book.controller';
import { AuthorServicesModule } from './services/use-cases/author/author-services.module';
import { DataServicesModule } from './services/data-services/data-services.module';
import { CrmServicesModule } from './services/crm-services/crm-services.module';
import { GenreServicesModule } from './services/use-cases/genre/genre-services.module';
import { AuthorController, GenreController } from './controllers';

@Module({
  imports: [
    AuthorServicesModule,
    BookServicesModule,
    CrmServicesModule,
    DataServicesModule,
    GenreServicesModule,
  ],
  controllers: [
    AppController,
    AuthorController,
    BookController,
    GenreController,
  ],
  providers: [],
})
export class AppModule {}
