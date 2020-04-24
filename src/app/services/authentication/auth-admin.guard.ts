import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({providedIn: 'root'})
export class AuthGuardAdmin implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}
  canActivate() {
    const isAuthAdmin = this.auth.getIsAuthAdmin();
    if (!isAuthAdmin) {
      this.router.navigate(['/admin']);
      return false;
    }
    return true;
  }
}
