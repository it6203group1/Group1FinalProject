import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Router} from '@angular/router';
//we know that response will be in JSON format
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}; 
@Injectable()
export class TextpostService {
    
    constructor(private http:HttpClient, private router:Router) {}
   // Uses http.get() to load data 
    getText() {
        return this.http.get('http://localhost:8000/textpage');
    }   
    addtextPost(txtPost:string)
    {
        this.http.post('http://localhost:8000/textpage',{txtPost}).subscribe((responseData)=>
        {console.log(responseData);
        });
        this.router.navigate(['/listPost']);  
    }
    deletePost(postId:string)
    {
        this.http.delete('http://localhost:8000/textpage/' + postId).subscribe(()=>
        {console.log("Deleted Post is :" + postId);
        });
        location.reload();
    }

    updatePost(postId:string,txtPost: string)
    {
        this.http.put('http://localhost:8000/textpage/' + postId,{txtPost}).subscribe(()=>
        {console.log("Updated Post is :" + postId);
        });
        this.router.navigate(['/listPost']);
    }
}