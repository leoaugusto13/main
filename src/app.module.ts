import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductController } from './product/product.controller';
import { ProductModule } from './product/product.module';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/nest-main', {
    autoCreate: true
  }),
    ProductModule
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
