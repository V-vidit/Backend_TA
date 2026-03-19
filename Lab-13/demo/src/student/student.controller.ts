import { All, Body, Controller, Delete, Get, HttpCode, Param, Post, Put, Redirect } from '@nestjs/common';
import { StudentService } from './student.service';

@Controller('student')
export class StudentController {

    constructor(private readonly studentServices: StudentService){}
    
    @Get()
    @HttpCode(201) //used to explicitly change the status code
    findAll(){
        return this.studentServices.findAll();
    }

    @Get(':id')
    findbyid(@Param('id') id:string){
        return this.studentServices.findOne(id);
    }

    @Post()
    insert(@Body () body:any){
        return this.studentServices.insert(body);
    }

    @Put(':id')
    update(@Param ('id') id:string,@Body () body :any){
        return this.studentServices.update(id, body);
    }

    @Delete(':id')
    delete(@Param('id') id:string){
        return this.studentServices.delete(id);
    }

    
}
