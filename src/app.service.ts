import { Injectable } from '@nestjs/common';
import { ElasticService } from './elasticsearch-server/elastic.service';

interface Order {
  id: number;
  toppings: string[];
  statusTime: Date;
  restaurant: string;
  // status: statusType;
}

@Injectable()
export class AppService {
  constructor(readonly nestEsService: ElasticService) {}

  getHello(): string {
    return 'this is good!';
  }
  
  async findOrders(search: string) {
    return await this.nestEsService.pingElasticsearch()// search(search);
    // return {
    //   statusCode: 200,
    //   headers: { 'Content-Type': 'application/json' },
    //   body: {'date': search},
    // };
}
}
