import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'features-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  title = "home";

  constructor( private router: Router){
  }
  
  redirecToServices(){
    this.router.navigate(['/services']);
  }
}
