import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SocialEditorComponent } from './social-editor/social-editor.component';
import { HttpClientModule } from '@angular/common/http'; 
import { AccountService } from './account.service';
import { Routes, RouterModule } from '@angular/router';
import { NewAccountFormComponent } from './new-account-form/new-account-form.component';
import { MatFormFieldModule, MatButtonModule, MatMenuModule, MatIconModule } from '@angular/material';
import { MatInputModule, MatCardModule } from '@angular/material'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component';
import { ListAccountsComponent } from './list-accounts/list-accounts.component';
import { NewTextpostFormComponent } from './new-textpost-form/new-textpost-form.component';
import { ListTextpostComponent } from './list-textpost/list-textpost.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TextpostService } from './textpost.service';
import { UserFormComponent } from './user-form/user-form.component';
import { UserListComponent } from './user-list/user-list.component';
import { DataService } from './data.service';
import { SocialLoginModule, AuthServiceConfig, FacebookLoginProvider} from "angular-6-social-login";
import { HttpModule } from '@angular/http';


export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
      [
        {
          id: FacebookLoginProvider.PROVIDER_ID,
          provider: new FacebookLoginProvider("687487458374632")
        }
      ]
  );
  return config;
  }

const appRoutes: Routes = [ {
   path: '',                     //default component to display
   component: ListAccountsComponent
 },       {
   path: 'addAccount',         //Matt
   component: NewAccountFormComponent
 },       {
   path: 'editAccount/:_id',         //Matt 
   component: NewAccountFormComponent
  },        {
   path: 'listAccounts',       //Matt
   component: ListAccountsComponent
  },       {
    path: 'addPost',         //Chinmaya
    component: NewTextpostFormComponent
  },        {
    path: 'editPost/:_id',      //Chinmaya   
    component: NewTextpostFormComponent
  },        {
    path: 'listPost',       //Chinmaya
    component: ListTextpostComponent
  },        { 
    path: 'create',   //Jose
    component: UserFormComponent 
  },        {
    path: 'list',  //Jose
    component: UserListComponent
  },        {
    path: 'editPicture/:_id',  //Jose
    component: UserFormComponent
},          {
    path: '**',                 //when path cannot be found
    component: NotFoundComponent
  },
];


@NgModule({
  declarations: [
    AppComponent,
    SocialEditorComponent,
    NewAccountFormComponent,
    NavigationMenuComponent,
    ListAccountsComponent,
    NewTextpostFormComponent,
    ListTextpostComponent,
    NotFoundComponent,
    UserFormComponent,
    UserListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    RouterModule.forRoot(appRoutes),
    MatCardModule,
    SocialLoginModule,
    HttpModule,
  ],
  providers: [AccountService, TextpostService, DataService,
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
