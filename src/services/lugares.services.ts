import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Lugar, LugarDocument } from 'src/schemas/lugar.schema';

@Injectable()
export class LugaresService {
  constructor(
    @InjectModel(Lugar.name) private lugarModel: Model<LugarDocument>,
  ) {}

  async create(createLugarDto: CreateLugarDto): Promise<Lugar> {
    const createdCat = new this.lugarModel(createLugarDto);
    return createdCat.save();
  }

  async findAll(): Promise<Lugar[]> {
    return this.lugarModel.find().exec();
  }
}
