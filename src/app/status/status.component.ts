import { Component } from '@angular/core';

@Component({
  selector: 'app-status',
  template: `
   <h2>
    404 Error. Requested page not found
   </h2>
  `,
  styles: [
    "h2{color:red;font-size:50px}"
  ]
})
export class StatusComponent {

}
