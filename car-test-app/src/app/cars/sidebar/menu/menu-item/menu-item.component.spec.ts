import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Car } from 'src/app/core/car.model';
import { SharedModule } from 'src/app/shared/shared.module';

import { MenuItemComponent } from './menu-item.component';

const fakeCar: Car = {brand: 'Audi', color: 'Red', productionYear: 2020, price: 15000};

describe('MenuItemComponent', () => {
  let component: MenuItemComponent;
  let fixture: ComponentFixture<MenuItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        MenuItemComponent
      ],
      imports: [
        SharedModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuItemComponent);
    component = fixture.componentInstance;
    component.car = fakeCar;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
