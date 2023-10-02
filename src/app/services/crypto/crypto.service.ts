import { Injectable } from '@angular/core';
import { AES, enc } from 'crypto-js';

@Injectable({
  providedIn: 'root',
})

export class CryptoServiceLS {

  key = '';

  public storeData(key, value: string): void {
    localStorage.setItem(key, this.encrypt(value));
  }

  public getData(key: string) {
    let data = localStorage.getItem(key) || '';
    return this.decrypt(data);
  }

  private encrypt(txt: string): string {
    return AES.encrypt(txt, this.key).toString();
  }

  private decrypt(txtToDecrypt: string) {
    return AES.decrypt(txtToDecrypt, this.key).toString(
      enc.Utf8
    );
  }
}