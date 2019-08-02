import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    constructor(
      public router: Router
    ) {}

    ngOnInit() {}

    onLoggedin() {
        // Login Process Here!
        alert('You try to log in');
        localStorage.setItem('isLoggedin', 'true');
    }
}
