import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'apach';
  constructor(private router:Router){

    // this.router.navigate(['/dashboard'])
  }
}
