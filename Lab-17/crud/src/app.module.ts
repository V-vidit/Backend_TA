import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentModule } from './student/student.module';
import { Student } from './student/entities/student.entity';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: "mysql",
    database: "nest",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "12345678",
    entities: [Student],
    synchronize: true    
  }), StudentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
