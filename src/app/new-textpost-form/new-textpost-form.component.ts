import { Component, OnInit,Input } from '@angular/core';
import {TextpostService} from '../textpost.service';
import {Router} from '@angular/router';
import {ActivatedRoute,ParamMap} from '@angular/router';
@Component({
  selector: 'app-new-textpost-form',
  templateUrl: './new-textpost-form.component.html',
  styleUrls: ['./new-textpost-form.component.css']
})
export class NewTextpostFormComponent implements OnInit {
  @Input() txtPost :string;
  private mode = "Create";
  private id : string;
  
 constructor(private _myService : TextpostService, private router:Router, public route : ActivatedRoute) { }

  addPost(){
   if(this.mode == 'Create')
      this._myService.addtextPost(this.txtPost);
    if(this.mode == 'Edit')
      this._myService.updatePost(this.id,this.txtPost);
    console.log("You Posted:" + this.txtPost);
    this.router.navigate(['/listPost']);
    
  }
  ngOnInit() {

    this.route.paramMap.subscribe((paramMap: ParamMap ) => {
      if (paramMap.has('_id'))
        { this.mode = 'Edit';  
          this.id = paramMap.get('_id');}
      else {this.mode = 'Create';
          this.id = null; }
    });
  }
}
