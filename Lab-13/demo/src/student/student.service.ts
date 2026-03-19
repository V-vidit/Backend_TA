import { Injectable } from '@nestjs/common';

@Injectable()
export class StudentService {
    
    findAll(){
        return {
            message: "FindAll called"
        };
    }

    findOne(id: string){
        return {
            message: `FindOne called for ${id}`
        }
    }

    insert(data: any){
        return {
            message: "Data inserted",
            data: data
        }
    }

    update(id: string, data: any){
        return {
            message: `Record updated for id: ${id}`,
            updatedData: data
        }
    }

    delete(id: string){
        return {
            message: `Record Deleted for ${id}`
        }
    }

}
