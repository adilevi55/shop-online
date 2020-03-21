import { Component, OnInit, OnDestroy } from '@angular/core';
import { User, UserLogin } from 'src/app/interfaces/user.interface';
import { AuthService } from 'src/app/services/authentication/auth.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  user: UserLogin = {
      email: null,
      password: null,
    };
    userId: string|null = null;
    unsubscribable: Subscription;
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
   this.unsubscribable =  this.authService.userListener.subscribe(user => {
    this.userId = user._id;
    });
  }
  login() {
    this.authService.login(this.user);
  }
  logout() {
    this.authService.logOut();
  }
  moveToRegiserterPage() {
    this.router.navigate(['register']);
  }

  ngOnDestroy(): void {
    // bad logic need change!
    if (this.unsubscribable !== undefined) {
      this.unsubscribable.unsubscribe();
    }
  }
}
