import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WebApiService } from './web-api.service';

var apiUrl = 'https://localhost:7076/api';

var httpLink = {
  getAllEmployee: apiUrl + "/UserLogin/getAllEmployee",
  deleteEmployeeById: apiUrl + "/UserLogin/deleteEmployeeById/",
  getEmployeeDetailById: apiUrl + "/UserLogin/getEmployeeDetailById",
  saveEmployee: apiUrl + "/UserLogin/saveEmployee"
}

@Injectable({
  providedIn: 'root'
})

export class HttpProviderService {
  constructor(private webApiService: WebApiService) { }

  public getAllEmployee(): Observable<any> {
    debugger;
    return this.webApiService.get(httpLink.getAllEmployee);
  }
  public deleteEmployeeById(model: any): Observable<any> {
    debugger;
    return this.webApiService.delete(httpLink.deleteEmployeeById + model, "");
  }
  public getEmployeeDetailById(model: any): Observable<any> {
    return this.webApiService.get(httpLink.getEmployeeDetailById + '/' + model);
  }
  public saveEmployee(model: any): Observable<any> {
    return this.webApiService.post(httpLink.saveEmployee, model);
  }  
}                          