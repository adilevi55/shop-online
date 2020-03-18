import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-dialog-massage',
  templateUrl: './dialog-massage.component.html',
  styleUrls: ['./dialog-massage.component.css']
})
export class DialogMassageComponent implements OnInit {
  message: string;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { payload: HttpErrorResponse },
    private matDialog: MatDialog

  ) { }

  ngOnInit(): void {
    console.log(this.data.payload);
    this.message = this.data.payload.error.message;
  }

}
