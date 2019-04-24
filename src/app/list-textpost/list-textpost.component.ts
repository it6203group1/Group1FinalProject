import { Component, OnInit } from '@angular/core';
import {TextpostService} from '../textpost.service';

@Component({
  selector: 'app-list-textpost',
  templateUrl: './list-textpost.component.html',
  styleUrls: ['./list-textpost.component.css']
})
export class ListTextpostComponent implements OnInit {

  public textpost;

  constructor(private _myService: TextpostService){}
  ngOnInit(){
    this.getText();
    }

  getText(){
    this._myService.getText().subscribe(
      data => {this.textpost = data},
      err=> console.error(err),
      ()=> console.log('Loading is Done'));
    }
    
  onDelete(postId: string)
  {
    this._myService.deletePost(postId);
    
  }
  

}
