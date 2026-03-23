import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentModule } from './student/student.module';
import { FacultyModule } from './faculty/faculty.module';

@Module({
  imports: [StudentModule, FacultyModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
