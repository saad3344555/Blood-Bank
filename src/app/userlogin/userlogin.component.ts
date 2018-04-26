import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.scss']
})
export class UserloginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  redirectToAdminLogin() {
    alert('Are you sure?');
    this.router.navigate(['/adminlog']);
  }

}
