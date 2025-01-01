import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-first-component',
  imports: [FormsModule, NgFor],
  templateUrl: './first-component.component.html',
  styleUrl: './first-component.component.css'
})
export class FirstComponentComponent {
  students = ["arjun","bala","rajkot","gujarat","INDIA"];

  studentName = "";

  idToEdit = -1;

  insert(){
    if(this.idToEdit<0){
      this.students.push(this.studentName);
    }
    else{
      this.students[this.idToEdit] = this.studentName;
      this.idToEdit = -1;
    }
    
    this.studentName = "";
  }

  deleteStudent(id:any){
    this.students.splice(id,1);
  }

  setForEdit(id:any){
    this.studentName = this.students[id];
    this.idToEdit = id;
  }
}
