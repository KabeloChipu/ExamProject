import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators, FormControlName } from '@angular/forms'


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  

  personForm

  constructor(public formBuilder:FormBuilder) {
    this.personForm = formBuilder.group({
      name: ["", Validators.required],
      surname: ["", [Validators.required]],
      age: ["", Validators.required],
      email: ["", Validators.required],
      contact: ["", Validators.required],
    })
   }

  

   AddDetails(){
    this.personForm.push({
      myname:this.personForm.value.name,
      mySurname:this.personForm.value.Surname,
      myAge:this.personForm.value.Age,
      myEmail:this.personForm.value.Email,
      myContact:this.personForm.value.Contact

    })
  }
 

  ngOnInit() {
  }

}
