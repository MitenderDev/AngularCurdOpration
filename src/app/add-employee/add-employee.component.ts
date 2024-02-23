import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpProviderService } from '../Service/http-provider.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})

 export class AddEmployeeComponent implements OnInit {
  addEmployeeForm: employeeForm = new employeeForm();

  @ViewChild("employeeForm")
  employeeForm!: NgForm;
   isSubmitted: boolean = false;
   constructor(private router: Router, private toastr :ToastrService, private httpProvider: HttpProviderService) { }

  ngOnInit(): void {  }

   AddEmployee(isValid: any) {
    debugger;
    this.isSubmitted = true;
    if (isValid) {
      this.httpProvider.saveEmployee(this.addEmployeeForm).subscribe(async data => {
        if (data != null && data.body != null) {
          if (data != null && data.body != null) {
            var resultData = data.body;
            if (resultData != null ) {//&& resultData.isSuccess
              this.toastr.success("Data inserted successfully");
              setTimeout(() => {
                this.router.navigate(['/Home']);
              }, 500);
            }
          }
        }
      },
        async error => {
          this.toastr.error(error.message);
          setTimeout(() => {
            this.router.navigate(['/Home']);
          }, 500);
        });
    }
   }
}


export class employeeForm {
  FirstName: string = "";
  LastName: string = "";
  Email: string = "";
  adders: string = "";
  Phone: string = "";
 }

