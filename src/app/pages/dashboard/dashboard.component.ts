import { Component } from '@angular/core';
import { UserSideBarComponent } from '../../components/user-side-bar/user-side-bar.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [UserSideBarComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
