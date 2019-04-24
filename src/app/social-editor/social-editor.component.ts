import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-social-editor',
  templateUrl: './social-editor.component.html',
  styleUrls: ['./social-editor.component.css']
})
export class SocialEditorComponent implements OnInit {
  socialForm = this.fb.group({
    socialPlatform: ['', Validators.required],
    userName: ['', Validators.required],
    password: ['', Validators.required]
  })
 
  additiontitle = " Add Social Media Information to App ";
  constructor(private fb: FormBuilder ) { }
  clearbuttonName = 'Clear Form';
  addbuttonName = 'Add Info';
  addbuttonClicked() {
  this.addbuttonName = "Added";
}
 
  ngOnInit() {
  }
onSubmit() {
  // TODO: Use EventEmitter with form value
  console.warn(this.socialForm.value);
}
}
