import { Injectable } from '@nestjs/common';
import { Ninja } from '../entities/Ninja';
import { NinjaRepository } from '../repositories/ninja-repository';

interface CreateNinjaRequest {
  name: string,
  createdAt: Date 
}

interface CreateNinjaResponse {
  id: string;
  name: string;
  createdAt: Date
}

@Injectable()
export class CreateNinja {
  constructor(
    private readonly ninjaRepository: NinjaRepository,
  ) {}
  
  async execute(data: CreateNinjaRequest): Promise<CreateNinjaResponse> {
    const { name, createdAt } = data;
    const ninja = new Ninja({name, createdAt: new Date()})

    return await this.ninjaRepository.create(ninja)
  }
}