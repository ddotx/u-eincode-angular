import { Component, OnInit } from '@angular/core';
import {Rental} from "../shared/rental.model";
import {RentalService} from "../shared/rental.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-rental-detail',
  templateUrl: './rental-detail.component.html',
  styleUrls: ['./rental-detail.component.scss']
})
export class RentalDetailComponent implements OnInit {

  rental: Rental;

  constructor(
    private rentalService: RentalService,
    private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.rentalService
        .getRentalById(params['rentalId'])
        .subscribe(rental => {
          this.rental = rental;
        })
    })
  }

}
