import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { MongooseModule, Schema } from '@nestjs/mongoose';
import { ProductSchema } from './product.model';

@Module({
    imports: [
        MongooseModule.forFeature([{name: 'Products', schema: ProductSchema}])
    ],
    controllers: [ProductController],
    providers: [ProductService]
})
export class ProductModule {}
