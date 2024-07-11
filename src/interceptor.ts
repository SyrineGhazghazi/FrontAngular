import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, Observable, throwError } from "rxjs";
import { LoginService } from "./app/services/Auth/login.service";

@Injectable()
export class Interceptor implements HttpInterceptor{
    constructor(private loginService:LoginService){}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
        if (this.loginService.isLoggedIn()){
            req=this.addToken(req,localStorage.getItem('token')!);
        }
        return next.handle(req).pipe(
            catchError((error:HttpErrorResponse)=>{
                return throwError(error);
            })
        )
    }
    private addToken(request: HttpRequest<any>, token: string): HttpRequest<any> {
        return request.clone({
          setHeaders: {
            Authorization: `Bearer ${token}`
          }
        });
      }
}