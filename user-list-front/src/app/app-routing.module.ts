import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayUserListComponent } from './components/display-user-list/display-user-list.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'users', component: DisplayUserListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
