import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list-bootstrap.component.html',
  styleUrls: ['./sales-person-list.component.css'],
})
export class SalesPersonListComponent implements OnInit {
  // create array of salespersons
  salesPersonList: SalesPerson[] = [
    new SalesPerson('Anup', 'Kumar', 'anup.kumar@love2code.com', 70000),
    new SalesPerson('John', 'Doee', 'john.doe@love2code.com', 40000),
    new SalesPerson('Claire', 'Murphy', 'claire.murphy@love2code.com', 90000),
    new SalesPerson('Mai', 'Truong', 'mai.truong@love2code.com', 60000),
  ];
  constructor() {}

  ngOnInit(): void {}
}
