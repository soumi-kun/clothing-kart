import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { MsalService } from '@azure/msal-angular';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserauthguardGuard implements CanActivate {

  constructor(
    private msalService: MsalService
  ){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let allowedRoles = route.data["roles"];
    let account = this.msalService.instance.getActiveAccount();
      if (account) {
          let roles = account.idTokenClaims?.roles ?? "";
        if(roles == allowedRoles[0]){
            return true;
          }
    }
    return false;
  }
  
}
