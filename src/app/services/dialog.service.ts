import { Injectable, TemplateRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogProductComponent } from '../dialog/dialog-product/dialog-product.component';
import { DialogMassageComponent } from '../dialog/dialog-massage/dialog-massage.component';
import { DialogOrderSuccessComponent } from '../dialog/dialog-order-success/dialog-order-success.component';
import { DialogProductNavBarComponent } from '../dialog/dialog-product-nav-bar/dialog-product-nav-bar.component';
import { DialogUpdateProductComponent } from '../dialog/dialog-update-product/dialog-update-product.component';
import { DialogAddProductComponent } from '../dialog/dialog-add-product/dialog-add-product.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  constructor(private matDialog: MatDialog) {}
  openDialog(dialogName: string, payload?): void {
    const dialogOption = this.dialogOptions(dialogName);
    this.matDialog.open(dialogOption, {
      width: '50%',
      height: '60vh',
      data: { payload }
    });
  }
  dialogOptions(dialogName: string): TemplateRef<any> {
    const DIALOGS = {
      product: DialogProductComponent,
      massage: DialogMassageComponent,
      orderMassageSuccess: DialogOrderSuccessComponent,
      productNavBar: DialogProductNavBarComponent,
      updateProduct: DialogUpdateProductComponent,
      addProduct: DialogAddProductComponent,
    };
    return DIALOGS[dialogName];
  }
  close(): void {
    this.matDialog.closeAll();
  }
}
