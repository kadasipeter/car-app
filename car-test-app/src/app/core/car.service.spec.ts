import { TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { of } from 'rxjs';

import { CarSelectorsService } from '../store/cars/car-selectors.service';
import { Car } from './car.model';
import { CarService } from './car.service';

const fakeCars: Car[] = [
  {
    productionYear: 2020,
    brand: 'BMW',
    price: 15000,
    color: 'Red',
  },
  {
    productionYear: 2018,
    brand: 'Mercedes',
    price: 25000,
    color: 'White',
  },
  {
    productionYear: 2005,
    brand: 'Ford',
    price: 27000,
    color: 'Black',
  },
];

describe('CarService', () => {
  const CarSelectorsServiceMock = jasmine.createSpyObj(
    'CarSelectorsService',
    ['getAllCars$'],
    []
  );
  CarSelectorsServiceMock.getAllCars$.and.returnValue(of(fakeCars));

  let service: CarService;

  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({})],
      providers: [
        provideMockStore,
        {
          provide: CarSelectorsService,
          useValue: CarSelectorsServiceMock,
        },
      ],
    })
  );

  beforeEach(() => {
    service = TestBed.inject(CarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
