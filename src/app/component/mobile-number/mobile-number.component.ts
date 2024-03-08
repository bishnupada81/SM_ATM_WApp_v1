import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PopUpComponent } from '../pop-up/pop-up.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-mobile-number',
  templateUrl: './mobile-number.component.html',
  styleUrls: ['./mobile-number.component.css']
})
export class MobileNumberComponent implements OnInit {

  constructor(private _router: Router, public dialogRef:MatDialog) { }

  ngOnInit(): void {
  }

  public mobileVerification = new FormGroup({
    phoneNumber: new FormControl("",
         [Validators.required,
         Validators.pattern('^[0-9]*$'),
         Validators.maxLength(10),
         Validators.minLength(10)]
         ),
  })

  public get phoneNumber() {
    return this.mobileVerification.get('phoneNumber');
  }

  public mobileVerificationFormSubmit(): void {

    // this.dataService.phoneNumber = this.phoneNumber?.value;
    // console.log(this.dataService.phoneNumber);

    // this._router.navigateByUrl('/account');
    this.dialogRef.open(PopUpComponent, {
      width: '40%',
      autoFocus: false,
      restoreFocus: false,
    })
}

}
