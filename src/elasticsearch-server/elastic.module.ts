import { Module, OnModuleInit } from '@nestjs/common';
import { ElasticsearchModule } from '@nestjs/elasticsearch';
import { ElasticService } from './elastic.service';
// import { ConfigService } from '../config/config.service'
// import { ConfigModule } from '../config/config.module'

@Module({
    imports: [
        ElasticsearchModule.register({
            node: 'http://localhost:9200',
            // maxRetries: 10,
            // requestTimeout: 60000,
            // pingTimeout: 60000,
            // sniffOnStart: true,
        }),
      ],
    providers: [ElasticService],
    exports: [ElasticService],
})
export class ElasticModule implements OnModuleInit 
{
    constructor(private searchService: ElasticService) {}
    onModuleInit() {
        this.searchService.createIndex().then();
    }
}