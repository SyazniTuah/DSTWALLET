import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.scss'],
  animations: [routerTransition()]

})

export class LoginUserComponent implements OnInit {

  constructor(
    public router: Router
  ) { }

  ngOnInit() {
  }

  onLoggedin() {
    // Login Process Here!
    alert('You try to log in');
    localStorage.setItem('isLoggedin', 'true');
}

}
