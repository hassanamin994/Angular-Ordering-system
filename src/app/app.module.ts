import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterationComponent } from './registeration/registeration.component';
import { UsersListComponent } from './users-list/users-list.component';
import { GroupsComponent } from './groups/groups.component';
import { GroupsListComponent } from './groups/groups-list/groups-list.component';
import { GroupItemComponent } from './groups/groups-list/group-item.component';
import { GroupUsersComponent } from './group-users/group-users.component';
import { UserItemComponent } from './users-list/user-item/user-item.component';

import { ApiRouterService } from './api-router.service';
import { LocalstorageService } from './localstorage.service';
import { FriendsComponent } from './friends/friends.component';
import { NewGroupUsersService } from './new-group-users.service';
import { OrdersComponent } from './orders/orders.component';
import { AddOrderComponent } from './orders/add-order/add-order.component';  

const appRoutes: Routes = [
  { 'path':'login', component: LoginComponent },
  { 'path':'registration', component: RegisterationComponent },
  { 'path':'groups', component: GroupsComponent },
  { 'path':'friends', component: FriendsComponent },
  { 'path':'orders/add', component: AddOrderComponent },
  { 'path':'', redirectTo:'/login', pathMatch: "full" },
  { 'path':'**', redirectTo:'/login', pathMatch: "full" }
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterationComponent,
    UsersListComponent,
    GroupsComponent,
    GroupsListComponent,
    GroupItemComponent,
    GroupUsersComponent,
    UserItemComponent,
    FriendsComponent,
    OrdersComponent,
    AddOrderComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ ApiRouterService, LocalstorageService , NewGroupUsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
