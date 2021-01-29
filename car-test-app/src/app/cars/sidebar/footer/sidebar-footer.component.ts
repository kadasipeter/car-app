import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

import { CarSummary } from 'src/app/core/car-summary.model';

@Component({
  selector: 'app-sidebar-footer',
  templateUrl: './sidebar-footer.component.html',
  styleUrls: ['./sidebar-footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarFooterComponent implements OnInit {

  @Input() carSummaries: CarSummary[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
