import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { CustomInputComponent } from "../../components/custom-input/custom-input.component";
import { AuthService } from '../../service/auth.service';
import { HttpClient, HttpClientModule, provideHttpClient } from '@angular/common/http';
import { NavbarComponent } from '../../components/navBar/navbar.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CustomInputComponent,
    FormsModule,
    NavbarComponent
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  formGroup: FormGroup;

  http = inject(HttpClient)

  constructor(
    private fb: FormBuilder,
    private authService: AuthService
  ) {
    this.formGroup = this.fb.group({
      name: ['init value', Validators.required]
    })
  }

  ngOnInit(): void {
      this.formGroup.reset({name: 'new value'})
  }

  onSubmit(form: NgForm){

    const loginData = {usernameOrEmail: form.value.username, password: form.value.password}

    // Realização de autenticação
    this.authService.login(loginData).subscribe(
      success => {
        if (success) {
          alert("sucesso no login")
        } else {
          alert("falha no login")
          this.authService.logout()
        }
      }, error => {
      alert("falha no login!");
      this.authService.logout();
    });

  }
}
