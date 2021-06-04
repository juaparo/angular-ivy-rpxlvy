import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  //templateUrl: './app.component.html',
  template: `
    <div>
      <ul>
        <li *ngFor="let b of carBrands; let i = index">
          <input
            #brand
            [checked]="b.ischecked"
            (click)="
              getSelected((carBrands[i].ischecked = !carBrands[i].ischecked))
            "
            [value]="b.ischecked"
            type="radio"
            name="brand"
          />
          <label [for]="b.name">{{ b.name }}</label>
        </li>
      </ul>
    </div>

    <div>
      <ul>
        <li *ngFor="let c of carColors; let i = index">
          <input type="radio" [value]="false" name="colors" />
          <label [for]="c.name">{{ c.name }}</label>
        </li>
      </ul>
    </div>

    <div>
      <ul>
        <li *ngFor="let t of carTires; let i = index">
          <input type="radio" [value]="false" name="tires" />
          <label [for]="t.name">{{ t.name }}</label>
        </li>
      </ul>
    </div>
  `,
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

  constructor() {}

  /**
   * Lo que busco es que al clickear en una me devuelva solo
   * el objecto que seleccione y que ademas tenga la propiedad
   * ischecked en true
   */
  getSelected(checked) {
    let brand = this.carBrands.filter(c => c.ischecked === checked);

    console.log(brand);
  }

  ngOnInit() {}
}
