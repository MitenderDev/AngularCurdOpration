// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-home',
//   templateUrl: './home.component.html',
//   styleUrls: ['./home.component.css']
// })
// export class HomeComponent implements OnInit{
// constructor(){}
// name='mitender'
// salary='1000'
// ngOnInit():void{
// }
// click(name:string){
//   alert(name)
// }
// }


import { Component, Input, OnInit, Type } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { HttpProviderService } from '../Service/http-provider.service';

@Component({
  selector: 'ng-modal-confirm',
  template: `
  <div class="modal-header">
    <h5 class="modal-title" id="modal-title">Delete Confirmation</h5>
    <button type="button" class="btn close" aria-label="Close button" aria-describedby="modal-title" (click)="modal.dismiss('Cross click')">
      <span aria-hidden="true">×</span>
    </button>
  </div>
  <div class="modal-body">
    <p>Are you sure you want to delete?</p>
  </div>
  <div class="modal-footer">
    <button type="button" class="btn btn-outline-secondary" (click)="modal.dismiss('cancel click')">CANCEL</button>
    <button type="button" ngbAutofocus class="btn btn-success" (click)="modal.close('Ok click')">OK</button>
  </div>
  `,
})

export class NgModalConfirm {
  constructor(public modal: NgbActiveModal) { }
}

const MODALS: { [name: string]: Type<any> } = {
  deleteModal: NgModalConfirm,
};


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
   closeResult = '';
   employeeList: any = [];
    constructor(private router: Router, private toastr:ToastrService, private modalService: NgbModal, private httpProvider : HttpProviderService) { }

  ngOnInit(): void {
    this.getAllEmployee();
  }

  async getAllEmployee() {
    debugger;
    this.httpProvider.getAllEmployee().subscribe((data : any) => {
      if (data != null && data.body != null) {
        var resultData = data.body;
        if (resultData) {
          this.employeeList = resultData;
        }
      }
    },
    (error : any)=> {
        if (error) {
          if (error.status == 404) {
            if(error.error && error.error.message){
              this.employeeList = [];
            }
          }
        }
      });
  }

  AddEmployee() {

    this.router.navigate(['AddEmployee']);
    //this.toastr.success('Employee added successfully!', 'Success');
  }

  deleteEmployeeConfirmation(employee: any) {
    this.modalService.open(MODALS['deleteModal'],
      {
        ariaLabelledBy: 'modal-basic-title'
      }).result.then((result) => {
        this.deleteEmployee(employee);
      },
        (reason) => {});
  }

  deleteEmployee(employee: any) {
    debugger;
    this.httpProvider.deleteEmployeeById(employee.id).subscribe((data : any) => {
      if (data == null ) {
        //var resultData = data.body;
       // if (resultData != null ) {
          this.toastr.success("Data Deleted successfully..");
          this.getAllEmployee();
       // }
      }
    },
    (error : any) => {});
  }
}
