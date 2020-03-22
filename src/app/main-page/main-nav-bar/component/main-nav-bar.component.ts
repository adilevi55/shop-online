import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/services/authentication/auth.service';
import { Subscription } from 'rxjs';
import { User } from 'src/app/interfaces/user.interface';

@Component({
  selector: 'app-main-nav-bar',
  templateUrl: './main-nav-bar.component.html',
  styleUrls: ['./main-nav-bar.component.css']
})
export class MainNavBarComponent implements OnInit, OnDestroy {
  user: User;
  subscription: Subscription;
  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.subscription = this.authService.userListener.subscribe(user => {
      this.user = user;
    });
  }
  logout() {
    this.authService.logOut();
  }
  ngOnDestroy(): void {
    if (this.subscription !== undefined) {
      this.subscription.unsubscribe();
    }
  }
}
