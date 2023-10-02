import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginData, LogoutData } from 'app/interfaces/auth.interface';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { CryptoServiceLS } from '../crypto/crypto.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( 
    private http: HttpClient,
    private cryptoServ: CryptoServiceLS
  ) { }

  sendLogin(username: string, password: string): Observable<LoginData>{
    const endpoint = environment.urlBase + 'login';
    return this.http.post<LoginData>(endpoint, {
      // username, production
      // password
      "status": 200, // Develop
      "message": "",
      "data": {
          "access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvaG9tZWNhcmVsYWIuZ3J1cG9rb25lY3RhLmNvOjUwMDRcL2FwaVwvYXV0aFwvbG9naW4iLCJpYXQiOjE2OTYwMDE3NzIsImV4cCI6MTY5NjAwNTM3MiwibmJmIjoxNjk2MDAxNzcyLCJqdGkiOiJIaU5IdWZNSlA3akE2OWlmIiwic3ViIjoiMSIsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.mU-74Ic28Le9LTzWrhtd8kg2VWfV4MtxiFVBB-jZQA8",
          "status": 200,
          "first_name": "admin",
          "daysExpiration": 3,
          "userName": "admin.allus"
      }
    })
  }

  sendLogout(): Observable<LogoutData>{
    const endpoint = environment.urlBase + 'logout';
    const accessToken: string = this.cryptoServ.getData('accessToken');
    return this.http.post<LogoutData>(endpoint,
      {
        accessToken,
        'approved': true
      }
    )
  }
}