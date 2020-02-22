import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, Validators,FormControl, FormGroup } from '@angular/forms';
import { jsonData } from '../../../core/json/applicationForm';
import { jsonToFormBuilder, flattern } from '../../../core/operations/operations';
import { ApplicationService } from '../../../services/application.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddApplicationComponent implements OnInit{
  formJson = jsonData;
  projectForm;
  constructor(public fb: FormBuilder, private appService: ApplicationService){
    this.projectForm = this.fb.group(jsonToFormBuilder(this.formJson))
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.


  }
  onSubmit(){
     this.appService.add(this.projectForm.value);
     return false;
  }

  get f(){
    return this.projectForm.controls;
  }
}
