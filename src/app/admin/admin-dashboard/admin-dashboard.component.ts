import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/authentication/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

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
