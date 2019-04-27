import { Component, OnInit, Input } from '@angular/core';
import { AccountService } from '../account.service'; 
import { Router } from '@angular/router';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-new-account-form',
  templateUrl: './new-account-form.component.html',
  styleUrls: ['./new-account-form.component.css']
})
export class NewAccountFormComponent implements OnInit {
  @Input() socialPlatform: string;
  @Input() userName: string;
  @Input() password: string;
  private mode = 'Add'; //default mode
  private id: string; //account ID
  
  constructor(private _myService: AccountService, private router: Router, public route: ActivatedRoute) { }
  onSubmit(){
    console.log("You submitted: " + this.socialPlatform + " " + this.userName + " " + this.password);
    if(this.mode == 'Add')
      this._myService.addAccounts(this.socialPlatform, this.userName, this.password);
    if(this.mode == 'Edit')
      this._myService.updateAccount(this.id, this.socialPlatform, this.userName, this.password);
  }
  
  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap ) => {
      if (paramMap.has('_id'))
        { this.mode = 'Edit'; /*request had a parameter _id */
          this.id = paramMap.get('_id');}
      else {this.mode = 'Add';}
    });
  }

}
