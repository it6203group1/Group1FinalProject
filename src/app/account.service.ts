import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Router} from '@angular/router';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
 
@Injectable()
export class AccountService {
 
    constructor(private http:HttpClient, private router:Router) {}
 
    // Uses http.get() to load data 
getAccounts() {
    return this.http.get('http://localhost:8000/accounts');
    }

    // Uses http.post() to post data 
addAccounts(socialPlatform: string, userName: string, password: string) {
    this.http.post('http://localhost:8000/accounts',{ socialPlatform, userName, password })
        .subscribe((responseData) => {
            console.log(responseData);
        });
        this.router.navigate(['/listAccounts']);
    }

deleteAccount(accountId: string) {
    this.http.delete("http://localhost:8000/accounts/" + accountId)
        .subscribe(() => {
            console.log('Deleted: ' + accountId);
        });
        location.reload();
    }

updateAccount(accountId: string, socialPlatform: string, userName: string, password: string) {
        //request path http://localhost:8000/accounts/5xbd456xx 
        //socialplatform, username, and password will be send as HTTP body parameters 
    this.http.put("http://localhost:8000/accounts/" + accountId,{ socialPlatform, userName, password })
        .subscribe(() => {
            console.log('Updated: ' + accountId);
        });
        this.router.navigate(['/listAccounts']);
    }

}
