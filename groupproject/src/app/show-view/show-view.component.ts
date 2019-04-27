import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AdService } from '../shared/ad.service';
import { Ad } from '../shared/ad.model';
import {ActivatedRoute, Router} from '@angular/router';
declare var M: any;


@Component({
  selector: 'app-show-view',
  templateUrl: './show-view.component.html',
  styleUrls: ['./show-view.component.css']
})
export class ShowViewComponent implements OnInit {

  constructor(private adService: AdService, private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    this.resetForm()
   this.fun(this.router.getNavigatedData())

  }
fun(val:Ad){
  if(val){
    this.adService.selectedAd = val
  }
  
}
  resetForm(form?: NgForm){
    if(form)
      form.reset();
      this.adService.selectedAd = {
        _id:"",
        name:"",
        description:"",
        location:"",
        price:null
      }
  }

  onSubmit(form: NgForm) {
    if (form.value._id == "") {
      this.adService.postAd(form.value).subscribe((res) => {
        this.resetForm(form);
      
        M.toast({ html: 'Saved successfully', classes: 'rounded' });
        this.router.navigate(['/showlisting'])
      });
    }
    else {
      this.adService.putAd(form.value).subscribe((res) => {
        this.resetForm(form);
        M.toast({ html: 'Updated successfully', classes: 'rounded' });
        this.router.navigate(['/showlisting'])
      });
    }
  }
}
