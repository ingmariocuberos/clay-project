import { Injectable } from '@angular/core';
import { CryptoServiceLS } from 'app/services/crypto/crypto.service';

@Injectable({
  providedIn: 'root',
})
export class UserIsLogged {
  constructor(
    private cryptoService: CryptoServiceLS
) {}

  public userIsLogged(): boolean {
    const user: string = this.cryptoService.getData('accessToken');
    return user ? true : false;
  }
}