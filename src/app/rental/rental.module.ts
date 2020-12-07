import { RouterModule, Routes } from '@angular/router';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RentalCardComponent } from '../shared/rental-card/rental-card.component';
import { RentalComponent } from './rental.component';
import { RentalDetailComponent } from './rental-detail/rental-detail.component';
import { RentalListingComponent } from './rental-listing/rental-listing.component';
import {AuthGuard} from "../auth/shared/auth.guard";
import {RentalSecretComponent} from "./rental-secret/rental-secret.component";

const routes: Routes = [
  {
    path: 'rentals',
    component: RentalComponent,
    children: [
      {path: '', component: RentalListingComponent},
      {path: 'secret', component: RentalSecretComponent, canActivate: [AuthGuard]},
      {path: ':rentalId', component: RentalDetailComponent}
    ]
  }
]

@NgModule({
  declarations: [RentalDetailComponent, RentalListingComponent, RentalComponent, RentalCardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class RentalModule { }
