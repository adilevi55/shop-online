import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { User } from 'src/app/interfaces/user.interface';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dialog-order-success',
  templateUrl: './dialog-order-success.component.html',
  styleUrls: ['./dialog-order-success.component.css']
})
export class DialogOrderSuccessComponent implements OnInit, OnDestroy {
  user: User;
  constructor(
    private router: Router,
    private matDialog: MatDialog
  ) { }

  ngOnInit(): void {
  }
  navigateToShoppingPage() {
    this.matDialog.closeAll();
    this.router.navigate(['/home']);
  }
  ngOnDestroy(): void {
    this.matDialog.closeAll();
    this.router.navigate(['/home']);
  }

}
