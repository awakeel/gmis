import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApplicationService {
  constructor(private http: HttpClient) {
   }
   add(data){
     const applications = JSON.parse(localStorage.getItem('applications'));
     applications.push(data)
     localStorage.setItem('applications',JSON.stringify(applications));
   }
   get(){
     return JSON.parse(localStorage.getItem('applications'));
   }
}
