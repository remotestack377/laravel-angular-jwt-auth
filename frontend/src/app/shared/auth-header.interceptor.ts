import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler } from "@angular/common/http";
import { TokenAuthService } from "../shared/token-auth.service";

@Injectable()

export class AuthHeaderInterceptor implements HttpInterceptor {
    
    constructor(private tokenAuthService: TokenAuthService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        const jwtHeaderToken = this.tokenAuthService.getJwtToken();
        req = req.clone({
            setHeaders: {
                Authorization: "Bearer " + jwtHeaderToken
            }
        });
        return next.handle(req);
    }
}