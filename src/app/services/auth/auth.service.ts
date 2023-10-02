import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginData } from 'app/interfaces/loginData.interface';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private endpoint = environment.urlBase + 'login'

  constructor( private http: HttpClient) { }

  sendLogin(): Observable<LoginData>{
    return this.http.post<LoginData>(this.endpoint, {
      "status": 200,
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
}