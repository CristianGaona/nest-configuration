import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.log('PUERTO: ', process.env.PORT);
  
  await app.listen(parseInt(process.env.PORT));
}
bootstrap();
