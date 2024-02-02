import { Module } from '@nestjs/common';
import { ContactModule } from './contact/contact.module';
import { PhoneModule } from './phone/phone.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfig } from './config/config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot(TypeOrmConfig),
    ContactModule,
    PhoneModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
