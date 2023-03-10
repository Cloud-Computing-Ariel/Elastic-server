import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  private start: number;

  constructor(private readonly appService: AppService) {
    this.start = Date.now();
  }

  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }

  @Get('healthcheck')
  async healthcheck() {
    const now = Date.now();
      return {
        status: 'API Online',
        uptime: Number((now - this.start) / 1000).toFixed(0),
    };
  }
  @Get()
  async getOrders(@Query('date') date: string) {
    // verify if this is valid date
    return await this.appService.findOrders(date);
      // if (search !== undefined && search.length > 1) {
      //     return await this.movieService.findMovies(search);
      // }
  }
}
