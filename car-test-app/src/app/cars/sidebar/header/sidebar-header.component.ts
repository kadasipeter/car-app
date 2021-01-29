import { Component, OnInit, ChangeDetectionStrategy, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

import { debounceTime, distinctUntilChanged, filter } from 'rxjs/operators';

@Component({
  selector: 'app-sidebar-header',
  templateUrl: './sidebar-header.component.html',
  styleUrls: ['./sidebar-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarHeaderComponent implements OnInit {

  @Output() filterChanged: EventEmitter<number> = new EventEmitter();

  filter = new FormControl();

  constructor() {
  }

  ngOnInit(): void {
      this.filter.valueChanges
          .pipe(
              debounceTime(300),
              distinctUntilChanged(),
              filter(x => (!isNaN(+x)))
          )
          .subscribe(value => {
              this.filterChanged.emit(+value);
          });
  }

}
