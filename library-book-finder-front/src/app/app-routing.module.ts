import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../app/login/login/login.component';
import { BookComponent } from './book/book/book.component';
import { UserComponent } from './user/user/user.component';
import { AddBooksComponent } from './book/add-books/add-books.component';
import { AddUserComponent } from './user/add-user/add-user.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirect to login by default
  { path: 'login', component: LoginComponent },
  { path: 'books', component:BookComponent},
  { path: 'books/add', component:AddBooksComponent},
  {path: 'users', component:UserComponent},
  {path: 'users/add', component:AddUserComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
