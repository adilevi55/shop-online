import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { DialogService } from './dialog.service';
@Injectable({
  providedIn: 'root'
})
export class HttpErrorInteceptor implements HttpInterceptor {
  constructor(private dialog: DialogService) {}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
          console.log('error');
          console.log(error);
          this.dialog.openDialog('massage', error);
          return throwError(error);
      })
    );
  }
}
