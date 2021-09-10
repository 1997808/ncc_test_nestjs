import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/item.interface';

@Injectable()
export class ItemsService {
  private readonly items: Item[] = [
    {
      id: '34532123',
      name: 'Item One',
      qty: 10,
      description: 'This is item one',
    },
    {
      id: '98769875',
      name: 'Item Two',
      qty: 30,
      description: 'This is item two',
    },
  ];

  findAll(): Item[] {
    return this.items;
  }

  findOne(id: string): Item {
    return this.items.find((item) => item.id == id);
  }
}
