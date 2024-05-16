import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiStudentService } from '../api-student.service';
import { Student } from '../student';

@Component({
  selector: 'app-detail-student',
  templateUrl: './detail-student.component.html',
  styleUrl: './detail-student.component.css'
})
export class DetailStudentComponent {
  id=0;
  data: Student=new Student();
  constructor(private actRoute:ActivatedRoute,private api:ApiStudentService,private router:Router){
  
  }
  ngOnInit(){
    this.id=this.actRoute.snapshot.params['id'];
    this.api.getStudentById(this.id).subscribe((res:any)=>{
      this.data=res;
    });
  }
  delete(){
    this.api.deleteStudent(this.id).subscribe((res:any)=>{
      this.router.navigate(['/students']);
    });
  }
}
