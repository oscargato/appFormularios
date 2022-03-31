import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-template',
  templateUrl: './form-template.component.html',
  styleUrls: ['./form-template.component.scss']
})

export class FormTemplateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }

  onGuardar(form:NgForm){
    if(form.valid){
      console.log('Guarda data', form.value);
    }
    else{
      console.log('No Guarda data', form.value);
    }
  }
}
