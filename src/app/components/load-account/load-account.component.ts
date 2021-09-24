/*
    TODO:
      load a user or contractor's account
      present form data in non-fixed fields and allow for update if
        user.id == this.user.id || this.user.type == admin
      Allow for loading contractor accounts in future iterations
        or this one if we have the time
*/

import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-load-account',
  templateUrl: './load-account.component.html',
  styleUrls: ['./load-account.component.css']
})
export class LoadAccountComponent implements OnInit {

  constructor(
    private router: Router,
    private ngZone: NgZone) { 
  
  }

  
  ngOnInit(): void { 
    console.log("Checking session");
    if (localStorage.getItem("session") == null){
      console.log("attempting to redirect");
      this.ngZone.run(() => this.router.navigateByUrl('login-user'));
    }
  }

  
}
