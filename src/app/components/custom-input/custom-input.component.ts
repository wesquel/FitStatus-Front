import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-custom-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './custom-input.component.html',
  styleUrl: './custom-input.component.css'
})
export class CustomInputComponent {

  @Input() placeHolder: string = '';
  @Input() type: string = 'text';
  @Input() name: string = "";
  @Input() id: string = "";

}
