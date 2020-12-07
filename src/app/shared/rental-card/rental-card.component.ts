import {Component, Input} from '@angular/core';
import {Rental} from "../../rental/shared/rental.model";

@Component({
  selector: 'app-rental-card',
  templateUrl: './rental-card.component.html',
  styleUrls: ['./rental-card.component.scss']
})
export class RentalCardComponent {

  @Input('rentalItem') set rentalItem(rental: Rental) {
    this.rental = rental;
  };

  rental: Rental;

}
