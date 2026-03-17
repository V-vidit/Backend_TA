import { Controller, Get, Param, Post, Body, Put, Delete} from '@nestjs/common';


// npm i -g @nestjs/cli
// nest g module student
// nest g controller student

@Controller('student')
export class StudentController {

    @Get()
    findAll(){
        return {
            message: "FindAll Method Called"
        }
    };

    @Get(':id')
    findOne(@Param('id') id: string){
        return {
            message: `FindOne for ID: ${id}`
        }
    }

    @Post()
    insert(@Body() body: any){
        return {
            message: "Insert Method Called",
            data: body
        };
    }

    @Put(':id')
    update(@Param('id') id: string){
        return {
            message: `Update called for ${id}`
        };
    }

    @Delete(':id')
    delete(@Param('id') id: string){
        return {
            message: `Delete for ID: ${id}`
        }
    }
}
