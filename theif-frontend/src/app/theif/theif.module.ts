import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewTheifComponent } from './new-theif/new-theif.component';
import { UpdateDetailsComponent } from './update-details/update-details.component';
import { TheivesListComponent } from './theives-list/theives-list.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';



@NgModule({
  declarations: [NewTheifComponent, UpdateDetailsComponent, TheivesListComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class TheifModule { }
