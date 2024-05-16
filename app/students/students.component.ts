import { Component } from '@angular/core';
import { ApiStudentService } from '../api-student.service';
import { Student } from '../student';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrl: './students.component.css'
})
export class StudentsComponent {
  data: Student[] = [];
  constructor(private api:ApiStudentService){

  }
  ngOnInit(){
    this.api.getAllStudents().subscribe((res:any)=>{
      this.data=res;
      console.log(this.data);
    });
  }
  delete(id:any){
    this.api.deleteStudent(id).subscribe((res:any)=>{
      this.ngOnInit();
    })
  }
}
