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
import { MatInputModule } from '@angular/material'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component';
import { ListAccountsComponent } from './list-accounts/list-accounts.component';
import { NewTextpostFormComponent } from './new-textpost-form/new-textpost-form.component';
import { ListTextpostComponent } from './list-textpost/list-textpost.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TextpostService } from './textpost.service';
import { UserFormComponent } from './Users/Components/user-form/user-form.component';
import { UserListComponent } from './Users/Components/user-list/user-list.component';

const appRoutes: Routes = [ {
  path: '',                     //default component to display
   component: ListAccountsComponent
 },       {
   path: 'addAccount',         //when accounts added 
   component: NewAccountFormComponent
 },       {
  path: 'editAccount/:_id',         //when accounts edited 
  component: NewAccountFormComponent
  },        {
   path: 'listAccounts',       //when accounts listed
   component: ListAccountsComponent
  },       {
    path: 'addPost',         
    component: NewTextpostFormComponent
  },        {
    path: 'editPost/:_id',         
    component: NewTextpostFormComponent
  },        {
    path: 'listPost',       
    component: ListTextpostComponent
  },        {
    path: '**',                 //when path cannot be found
    component: NotFoundComponent
  },
  { 
    path: 'create', 
    component: UserFormComponent 
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
    UserListComponent
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
  ],
  providers: [AccountService, TextpostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
