import { Pipe, PipeTransform } from '@angular/core';

import { Car } from '../core/car.model';
import { CarSummary } from '../core/car-summary.model';

@Pipe({
  name: 'getSummary',
})
export class GetSummaryPipe implements PipeTransform {
  transform(cars: Car[]): CarSummary[] {
    const fairCount = cars.filter(
      (c) => c.price < 20000 && c.productionYear > (new Date().getFullYear() - 5)
    ).length;

    return [
      { priceCategory: 'Fair', count: fairCount },
      { priceCategory: 'Expensive', count: cars.length - fairCount },
    ];
  }
}
