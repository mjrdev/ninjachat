import { Controller, Injectable } from "@nestjs/common";
import { Ninja } from "../entities/Ninja";
import { PrismaService } from "../database/prisma.service";
import { find } from "rxjs"

@Injectable()
export class NinjaRepository {
  constructor(private readonly prisma: PrismaService) { }

  async create(ninja: Ninja): Promise<any> {

    const { id, name, createdAt } = ninja;
    return await this.prisma.ninja.create({
      data: {
        id, name, createdAt,
      }
    });
  }

  async createIfNotFound(ninja: Ninja): Promise<any> {
    const findNinja = await this.findByName(ninja.name)
    if(findNinja) return findNinja 

    const { id, name, createdAt } = ninja;
    return await this.prisma.ninja.create({
      data: {
        id, name, createdAt,
      }
    });
  }
  async findById(id: string): Promise<any> {
    return await this.prisma.ninja.findUnique({
      where: { id }
    })
  }
  async findByName(name: string): Promise<any> {
    return await this.prisma.ninja.findFirst({
      where: {
        name,
      }
    })
  }
}