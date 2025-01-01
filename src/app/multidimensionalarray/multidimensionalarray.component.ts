import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-multidimensionalarray',
  imports: [FormsModule,NgFor],
  templateUrl: './multidimensionalarray.component.html',
  styleUrl: './multidimensionalarray.component.css'
})
export class MultidimensionalarrayComponent {
  students:{FirstName:String,LastName:String,Department:String}[] = [
    {FirstName:"arjun",LastName:"bala",Department:"CSE"},
    {FirstName:"darshan",LastName:"university",Department:"Mech"},
    {FirstName:"rajkot",LastName:"gujarat",Department:"INDIA"},
  ];

  idToEdit = -1;

  tempStudent:{
    FirstName:String,
    LastName:String,
    Department:String
  } = {
    FirstName:'',
    LastName:'',
    Department:''
  };

  saveStudent(){
    if(this.idToEdit<0){
      this.students.push(this.tempStudent);
    }
    else{
      this.students[this.idToEdit] = this.tempStudent;
      this.idToEdit = -1;
    }
    
    this.tempStudent = {
      FirstName:'',
      LastName:'',
      Department:''
    }
  }

  deleteStudent(id:any){
    this.students.splice(id,1);
  }

  setForEdit(id:any){
    this.tempStudent = {...this.students[id]};
    this.idToEdit = id;
  }
}
