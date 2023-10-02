import { Injectable } from '@angular/core';
import { Router, CanActivateChild } from '@angular/router';
import { UserIsLogged } from 'app/global/userIsLogged.utils';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivateChild {
  constructor(
    private router: Router,
    private isLogged: UserIsLogged
) {}

  canActivateChild(): boolean {
    const logged: boolean = this.isLogged.userIsLogged();
    if (logged) {
        this.router.navigate([this.router.url]);
        return false;
    }

    return true;
  }
}