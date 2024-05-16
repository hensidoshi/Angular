import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiStudentService } from '../api-student.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrl: './add-student.component.css'
})
export class AddStudentComponent {
  id=-1;
  btnName="Add Student";
  constructor(private api:ApiStudentService,private router:Router,private actRou:ActivatedRoute){}
  myForm=new FormGroup({
    createdAt:new FormControl(''),
    name:new FormControl(''),
    avatar:new FormControl(''),
    departmentname:new FormControl(''),
    roll_no:new FormControl(''),
    city:new FormControl(''),
    password:new FormControl(''),
    username:new FormControl(''),
    id:new FormControl(''),
  });
  ngOnInit(){
    if(this.actRou.snapshot.params['id']!=null){
      this.btnName="Edit Student";
      this.id=this.actRou.snapshot.params['id'];
      this.api.getStudentById(this.id).subscribe((res:any)=>{
        this.myForm.controls.createdAt.setValue(res.createdAt);
        this.myForm.controls.name.setValue(res.name);
        this.myForm.controls.avatar.setValue(res.avatar);
        this.myForm.controls.departmentname.setValue(res.departmentname);
        this.myForm.controls.roll_no.setValue(res.roll_no);
        this.myForm.controls.city.setValue(res.city);
        this.myForm.controls.password.setValue(res.password);
        this.myForm.controls.username.setValue(res.username);
        this.myForm.controls.id.setValue(res.id);
      });
    }
  }
  insert(){
    if(this.id>0){
      this.api.updateStudent(this.id,this.myForm.value).subscribe((res)=>{
        this.router.navigate(['/students']);
    });
    }
    else{
      this.api.insertStudent(this.myForm.value).subscribe((res)=>{
        this.router.navigate(['/students']);
    });
    }
  }
}
