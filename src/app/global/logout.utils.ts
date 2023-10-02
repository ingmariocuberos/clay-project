import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CryptoServiceLS } from 'app/services/crypto/crypto.service';

@Injectable({
  providedIn: 'root',
})
export class processLogout {
  constructor(
    private router: Router
) {}

  public processLogout() {
    localStorage.clear();
    this.router.navigate(['/auth/login']);
  }
}