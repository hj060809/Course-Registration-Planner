import { NestFactory } from '@nestjs/core';
import { ClientModule } from './client.module';

async function bootstrap() {
  const app = await NestFactory.create(ClientModule);
  await app.listen(process.env.CLIENT_PORT ?? 4000);
}
bootstrap();
