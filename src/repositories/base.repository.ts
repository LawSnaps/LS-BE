import { Model, Document, FilterQuery, UpdateQuery } from 'mongoose';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BaseRepository<T extends Document> {
  constructor(private readonly model: Model<T>) {}

  async create(createDto: any): Promise<T> {
    const createdEntity = new this.model(createDto);
    return createdEntity.save();
  }

  async findAll(): Promise<T[]> {
    return this.model.find().exec();
  }

  async findOne(filterQuery: FilterQuery<T>): Promise<T> {
    return this.model.findOne(filterQuery).exec();
  }

  async update(
    filterQuery: FilterQuery<T>,
    updateDto: UpdateQuery<T>,
  ): Promise<T> {
    return this.model
      .findOneAndUpdate(filterQuery, updateDto, { new: true })
      .exec();
  }

  async delete(filterQuery: FilterQuery<T>): Promise<T> {
    return this.model.findOneAndDelete(filterQuery).exec();
  }
}
