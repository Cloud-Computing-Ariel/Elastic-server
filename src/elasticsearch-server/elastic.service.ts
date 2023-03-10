import { PingRequest } from '@elastic/elasticsearch/lib/api/types';
import { HttpException, Injectable } from '@nestjs/common';
import { ElasticsearchService } from '@nestjs/elasticsearch';
// import * as moviesJson from '../../';

interface Order {
    id: number;
    toppings: string[];
    statusTime: Date;
    restaurant: string;
    // status: statusType;
}
interface Restaurant {
    id: number;
    name: string;
    // status: statusType;
}

@Injectable()
export class ElasticService {
    
    constructor(private readonly nestEsService: ElasticsearchService) {
        
        // this.nestEsService.ping({ requestTimeout: 3000 } as PingRequest)
        // .catch(err => { 
        //     throw new HttpException({
        //         status: 'error',
        //         message: 'Unable to reach Elasticsearch cluster'
        //      }, 500); 
        //  });
    }

    async pingElasticsearch() {
        // try {
        //   await this.nestEsService.ping();
        //   console.log('Elasticsearch is up and running!');
        // } catch (error) {
        //   console.error('Error connecting to Elasticsearch:', error);
        //   throw new HttpException(
        //     {
        //       status: 'error',
        //       message: 'Unable to reach Elasticsearch cluster',
        //     },
        //     500,
        //   );
        // }
        return { 'results': "this.parseAndPrepareData()"};
    }

    // async createIndex() {
    async createIndex() {
        console.log("Create index function");
        // create index if doesn't exist
        try {
            const index = "order"; // process.env.ELASTIC_INDEX;
            // await this.nestEsService.indices.create({ index });
            const checkIndex = await this.nestEsService.indices.exists({ index: index });
            if (!checkIndex) {
                console.log("The index does not exist");
                console.log("create one...");
                // this.nestEsService.indices.create({
                // index: index,
                // body: {
                //     // mappings: Mapping,
                //     // settings: Settings,
                // }},
                // //   (err: any) => {
                // //     if (err) {
                // //       error(err, 'SearchService -> createIndex');
                // //       throw err;
                // //     }
                // //   },
                // );
            }
            console.log("Index does not exist");
        } catch (err) {
        // error(err, 'SearchService -> createIndex');
            throw err;
        }
    }

    //     //     // Finally, the function uses the bulk method of the Elasticsearch service instance
    //     //     // to bulk index the data into the newly created index.
    //     //     // It passes in an object specifying the index to bulk index into (currIndex) and 
    //     //     // the body of the bulk request, which contains the data to be indexed. 
    //     //     // Note that there's no error handling for the bulk request in this code.
    //     //     this.nestEsService.bulk(
    //     //         {
    //     //             index: this.currIndex,
    //     //             body,
    //     //         },
    //     //         // (err) => {
    //     //         //     if (err) {
    //     //         //         console.error(err);
    //     //         //     }
    //     //         // },
    //     //     );
    //     // }
    // // }

    async search(search: string) {
        // let results = [];
        // const { body } = await this.nestEsService.search({
        //     index: "order",
        //     body: {
        //         size: 12,
        //         query: {
        //             match: {
        //                 'title.complete': {
        //                     query: search,
        //                 },
        //             },
        //         },
        //     },
        // });
        // const hits = body.hits.hits;
        // hits.map(item => {
        //     results.push(item._source);
        // });

        // return { results, total: body.hits.total.value };
        return { 'results': "this.parseAndPrepareData()"};
    }
    // // async parseAndPrepareData() {
    // //     const ordersJson = require('../orders.json');
    // //     let body = [];
    // //     const listOrders: Order[] = ordersJson;
    // //     listOrders.map((item, index) => {
    // //         // let actorsData = [];
    // //         // item.cast.map(actor => {
    // //         //     const splited = actor.split(' ');
    // //         //     actorsData.push({ firstName: splited[0], lastName: splited[1] });
    // //         // });

    // //         body.push(
    // //             { index: { _index: this.currIndex, _id: index } },
    // //             {
    // //                 id: item.id,
    // //                 toppings: item.toppings.map(topping => ({ topping })),
    // //                 statusTime: item.statusTime,
    // //                 restaurant: item.restaurant,
    // //                 // status: item.status,
    // //             },
    // //         );
    // //     });
    // //     return body;
    // // }
}