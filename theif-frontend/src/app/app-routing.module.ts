import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewTheifComponent } from './theif/new-theif/new-theif.component';
import { TheivesListComponent } from './theif/theives-list/theives-list.component';
import { UpdateDetailsComponent } from './theif/update-details/update-details.component';


const routes: Routes = [
  {
    path : '',
    redirectTo : 'addtheives',
    pathMatch : 'full',
  },
  {
    path :'addtheives',
    component : NewTheifComponent
  },
  {
    path : 'theiveslist',
    component : TheivesListComponent
  },
  {
    path : 'updatedetail',
    component : UpdateDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
