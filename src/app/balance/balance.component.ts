import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-balance',
  template: `
    <p>
      Your account balance is $4,000
    </p>
  `,
  styles: [
  ]
})
export class BalanceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
