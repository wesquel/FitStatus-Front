import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { CustomInputComponent } from "./components/custom-input/custom-input.component";
import { LoginComponent } from "./pages/login/login.component";
import { NavbarComponent } from './components/navBar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CustomInputComponent,
    FormsModule,
    LoginComponent,
    NavbarComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
