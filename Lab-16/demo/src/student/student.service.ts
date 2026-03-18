import { Injectable } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';

type Student = {
  id: number,
  name: string,
  age: number
};

@Injectable()
export class StudentService {

  private students: Student[]=[
    {id: 1, name: "Vidit", age: 20},
    {id: 2, name: "Parth", age: 21},
    {id: 3, name: "Mihir", age: 22}
  ]

  private idCounter=4;

  create(createStudentDto: CreateStudentDto) {
    const newStudent: Student = {
      id: this.idCounter++,
      ...createStudentDto
    };

    this.students.push(newStudent);
    return newStudent;
  }

  findAll() {
    return this.students;
  }

  findOne(id: number) {
    return this.students.find(s => s.id === id);
  }

  update(id: number, updateStudentDto: UpdateStudentDto) {
    const index = this.students.findIndex(s=>s.id === id);

    if(index===-1){
      return {error: "Student not found"}
    }

    this.students[index]={
      ...this.students[index],
      ...updateStudentDto
    }

    return this.students[index];
  }

  remove(id: number) {
    const index = this.students.findIndex(s=>s.id === id);

    if (index === -1) {
      return {
        error: "Student not found"
      }
    }

    return this.students.splice(index,1)[0];
  }
}
