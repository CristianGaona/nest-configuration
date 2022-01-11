import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import  configuration  from '../config/configuration';
import { validate } from '../config/validation';

const ENV = process.env.NODE_ENV;
console.log('Env: ',ENV);
//console.log('development', `${process.cwd()}/config/env/${process.env.NODE_ENV}.env`);


@Module({
  imports: [
    ConfigModule.forRoot({
      //ignoreEnvFile: true,
      envFilePath: `${process.cwd()}/config/env/${process.env.NODE_ENV}.env`,
      
      //envFilePath: !ENV ? '.env' : `.env.${ENV}`,
      //isGlobal: true,
      //load: [configuration],
      //validationSchema, 
      validate,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})


export class AppModule {}
