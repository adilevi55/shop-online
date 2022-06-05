import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/authentication/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-main-nav-bar',
  templateUrl: './admin-main-nav-bar.component.html',
  styleUrls: ['./admin-main-nav-bar.component.css']
})
export class AdminMainNavBarComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  logout(){
    this.authService.adminLogout();
    this.router.navigate(['/admin'])
  }
}
