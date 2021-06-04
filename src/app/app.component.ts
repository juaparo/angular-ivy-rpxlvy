import { Component, OnInit, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;

  carBrands: any[] = [
    { name: 'Volvo', value: 'volvo', ischecked: false },
    { name: 'McLaren', value: 'mclaren', ischecked: false },
    { name: 'Ferrari', value: 'ferrari', ischecked: false }
  ];

  carColors: any[] = [
    { name: 'Custom blue', value: 'blue', ischecked: false },
    { name: 'Custom red', value: 'red', ischecked: false },
    { name: 'Custom gold', value: 'gold', ischecked: false }
  ];

  carTires: any[] = [
    { name: 'Pirelli', value: 'pirelli', ischecked: false },
    { name: 'Michelin', value: 'michelin', ischecked: false },
    { name: 'Continental', value: 'continental', ischecked: false }
  ];

  constructor() {}

  getSelected(checked) {
    let brand = this.carBrands.filter(c => c.ischecked === checked);

    console.log(brand);
  }

  ngOnInit() {}
}
