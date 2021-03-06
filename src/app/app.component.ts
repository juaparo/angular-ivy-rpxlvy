import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
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

  order = {
    brand: null,
    color: null,
    tire: null
  };

  constructor() {}

  /**
   * Lo que busco es que al clickear en una me devuelva solo
   * el objecto que seleccione y que ademas tenga la propiedad
   * ischecked en true
   */
  getSelected(objchecked: any, type: string, val?: any) {
    if (type === 'brand') this.order.brand = objchecked.value;
    if (type === 'color') this.order.color = objchecked.value;
    if (type === 'tire') this.order.tire = objchecked.value;
  }

  ngOnInit() {}
}
