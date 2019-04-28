import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AdService } from '../shared/ad.service';
import { Ad } from '../shared/ad.model';
import { ActivatedRoute, Router } from '@angular/router';
import "angular2-navigate-with-data";
declare var M: any;

@Component({
  selector: 'app-ad',
  templateUrl: './ad.component.html',
  styleUrls: ['./ad.component.css'],
  providers: [AdService]
})
export class AdComponent implements OnInit {

  constructor(private adService: AdService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.refreshAdList();

  }


  refreshAdList() {
    this.adService.getAdList().subscribe((res) => {
      this.adService.ads = res as Ad[];
      console.log('m j vblk', this.adService.ads)
    });
  }

  onEdit(id) {

    this.router.navigateByData({
      url: ["/view-page"],
      data: id, //data - <any> type
      //extras: {} - <NavigationExtras> type, optional parameter
    });
  }
  onDelete(_id: string, form: NgForm) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.adService.deleteAd(_id).subscribe((res) => {
        this.refreshAdList();
        M.toast({ html: 'Deleted successfully', classes: 'rounded' });
      });
    }
  }
}
