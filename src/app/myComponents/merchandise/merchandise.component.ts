import { Component, OnInit } from '@angular/core';

console.warn("This is lazy loading merchandise")
@Component({
  selector: 'app-merchandise',
  templateUrl: './merchandise.component.html',
  styleUrls: ['./merchandise.component.css']
})
export class MerchandiseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
