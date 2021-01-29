import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { of } from 'rxjs';

import { Car } from 'src/app/core/car.model';
import { CarService } from 'src/app/core/car.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { SidebarFooterComponent } from './footer/sidebar-footer.component';
import { SidebarHeaderComponent } from './header/sidebar-header.component';
import { MenuItemComponent } from './menu/menu-item/menu-item.component';
import { SidebarMenuComponent } from './menu/sidebar-menu.component';

import { SidebarComponent } from './sidebar.component';

const fakeCars: Car[] = [
  {
    brand: 'Audi',
    price: 15000,
    productionYear: 2020,
    color: 'Red'
  },
  {
    brand: 'BMW',
    price: 15000,
    productionYear: 2005,
    color: 'Red'
  },
  {
    brand: 'Citroen',
    price: 25000,
    productionYear: 2020,
    color: 'Red'
  },
  {
    brand: 'Toyota',
    price: 12000,
    productionYear: 2018,
    color: 'Red'
  },
  {
    brand: 'Bugatti',
    price: 30000,
    productionYear: 2020,
    color: 'Red'
  },
];

describe('SidebarComponent', () => {
  let component: SidebarComponent;
  let fixture: ComponentFixture<SidebarComponent>;

  const carsServiceMock = jasmine.createSpyObj('CarsService', [], { cars$: of(fakeCars) });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        SidebarComponent,
        SidebarFooterComponent,
        SidebarHeaderComponent,
        SidebarMenuComponent,
        MenuItemComponent ],
      imports: [
        ReactiveFormsModule,
        FormsModule,

        SharedModule
      ],
      providers: [
        {provide: CarService, useValue: carsServiceMock}
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should filter cars by year', () => {
    expect(component.cars.length).toBe(5);
    component.onFilterCars(2020);
    expect(component.cars.length).toBe(3);
  });
});
