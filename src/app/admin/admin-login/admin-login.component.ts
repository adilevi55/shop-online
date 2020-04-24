import { Component, OnInit } from '@angular/core';
import { AuthGuardAdmin } from 'src/app/services/authentication/auth-admin.guard';
import { AuthService } from 'src/app/services/authentication/auth.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  login(){
    this.authService.adminLogin();
    this.router.navigate(['/admin/dashboard'])
  }
}
