import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Product, ProductAdminUpdate } from 'src/app/interfaces/product.interface';
import { Subscription } from 'rxjs';
import { CategoryService } from 'src/app/services/category.service';
import { Category } from 'src/app/interfaces/category.interface';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-dialog-update-product',
  templateUrl: './dialog-update-product.component.html',
  styleUrls: ['./dialog-update-product.component.css']
})
export class DialogUpdateProductComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  public productsFormData: FormData;
  public product: ProductAdminUpdate = {
    _id: null,
    name: null,
    category: null,
    price: null,
   img: {
        url: null,
       name: null,
       imgId: null,
    }
  };
  public imgURL:string| ArrayBuffer = '';
  categories: Category[] = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { payload: Product },
    private matDialog: MatDialog,
    private categoryService: CategoryService,
    private adminService: AdminService
  ) { }


  ngOnInit(): void {
    this.productsFormData = new FormData();
    this.product._id = this.data.payload._id;
    this.product.name = this.data.payload.name;
    this.product.price = this.data.payload.price;
    this.product.img = this.data.payload.img;
    this.product.category = this.data.payload.category._id;
  this.subscription = this.categoryService.getAllCategories().subscribe(categories => {
    this.categories = categories;
  })
  }


  userExitDialog() {
    this.matDialog.closeAll();
  }
  onFileSelected(event) {

    if(event.target.files[0] !== undefined){


    this.productsFormData.append('img', event.target.files[0], event.target.files[0].name);

    const reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (_event) => {
      this.imgURL = reader.result;
    };
  };
  }
  updateProduct() {
        this.productsFormData.append('name', this.product.name);
        this.productsFormData.append('category', this.product.category);
        this.productsFormData.append('price', this.product.price.toString());
      this.adminService.updateProductHttpReq(this.productsFormData, this.product._id);
      this.matDialog.closeAll();
 }
  ngOnDestroy(): void {
    if (this.subscription !== undefined) {
      this.subscription.unsubscribe();
    }
  }
}
