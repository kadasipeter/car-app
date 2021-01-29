import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

import { Car } from 'src/app/core/car.model';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuItemComponent implements OnInit {

  @Input() car: Car;
  @Input() index: number;

  constructor() { }

  ngOnInit(): void {
  }

}
