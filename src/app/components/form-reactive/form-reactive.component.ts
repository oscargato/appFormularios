import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form-reactive',
  templateUrl: './form-reactive.component.html',
  styleUrls: ['./form-reactive.component.scss']
})

export class FormReactiveComponent implements OnInit {
  private isEmail = '^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$';
  public loginForm!:FormGroup;

  constructor(private formBuilder:FormBuilder){}

  ngOnInit(): void {
    this.loginForm = this.initForm();
  }

  initForm():FormGroup{
    return this.formBuilder.group({
      email:['',[Validators.required,Validators.pattern(this.isEmail)]],
      password:['',[Validators.required,Validators.minLength(5),Validators.maxLength(20)]],
    });
  }

  invalidate(nameFormControl: string){
    let valida = { value: false };
    if((this.loginForm.get(nameFormControl)?.touched ||
        this.loginForm.get(nameFormControl)?.dirty) &&
        this.loginForm.get(nameFormControl)?.invalid)
    { valida.value = true; }

    return valida
  }

  onLogin(){
    if(this.loginForm.valid == true)
    {  console.log(this.loginForm.value)  }
    else
    {  console.log('Formulario no valido')  }
  }
}
