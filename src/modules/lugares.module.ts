import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Lugar, LugarSchema } from 'src/schemas/lugar.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Lugar.name, schema: LugarSchema }]),
  ],
})
export class LugaresModule {}
