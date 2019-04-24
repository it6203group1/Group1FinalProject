import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-list-accounts',
  templateUrl: './list-accounts.component.html',
  styleUrls: ['./list-accounts.component.css']
})
export class ListAccountsComponent implements OnInit {

//declare variable to hold response and make it public to be accessible from components.html
public accounts;
//initialize the call using AccountService 
constructor(private _myService: AccountService) { }
ngOnInit() {
  this.getAccounts();
}
//method called OnInit

onDelete(accountId: string) {
  this._myService.deleteAccount(accountId);
}

getAccounts() {
 this._myService.getAccounts().subscribe(
    //read data and assign to public variable accounts
    data => { this.accounts = data},
    err => console.error(err),
    () => console.log('finished loading')
  );
}

}
