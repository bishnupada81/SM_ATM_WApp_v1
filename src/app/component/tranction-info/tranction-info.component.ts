import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { PopUpComponent } from '../pop-up/pop-up.component';

@Component({
  selector: 'app-tranction-info',
  templateUrl: './tranction-info.component.html',
  styleUrls: ['./tranction-info.component.css'],
  providers: [DatePipe]
})
export class TranctionInfoComponent implements OnInit {
  constructor(private datePipe: DatePipe,private _router: Router,public dialogRef:MatDialog) {
  }

 ngOnInit(): void {
 }

 currentDateAndTime = this.datePipe.transform(new Date(), 'yyyy-MM-dd HH:mm:ss');

 public goToScanNowPage(): void{
  //  this._router.navigateByUrl('/camera');
   this.dialogRef.open(PopUpComponent, {
      width: '40%',
      autoFocus: false,
      restoreFocus: false,
    })
 }

 public goToLandingPage(): void {
  this._router.navigate(['/']);
 }

}
