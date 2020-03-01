import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const cloneReq: HttpRequest<any> = req.clone({
            url: `${environment.backendURL}${req.url}`
        });

        return next.handle(cloneReq).pipe(
            catchError(error => {
                console.error(error);

                return throwError(error.error);
            })
        );
    }
}
