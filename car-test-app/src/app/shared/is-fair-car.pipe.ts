import { Pipe, PipeTransform } from '@angular/core';

import { Car } from '../core/car.model';

@Pipe({
  name: 'isFairCar'
})
export class IsFairCarPipe implements PipeTransform {

  transform(car: Car): boolean {
    return car.price < 20000 && car.productionYear > (new Date().getFullYear() - 5);
  }

}
