import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

import { CarService } from 'src/app/core/car.service';

@Component({
  selector: 'app-car-create',
  templateUrl: './car-create.component.html',
  styleUrls: ['./car-create.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarCreateComponent implements OnInit {
  carCreateForm: FormGroup;

  get inputBrand(): AbstractControl {
    return this.carCreateForm.controls.inputBrand;
  }
  constructor(
    private formBuilder: FormBuilder,
    private carsService: CarService
  ) {}

  ngOnInit(): void {
    this.carCreateForm = this.formBuilder.group({
      inputBrand: [
        '',
        [
          Validators.required,
          Validators.maxLength(20),
          Validators.pattern('[a-zA-Z ]*'),
        ],
      ]
    });
  }

  insertCar(): void {
    this.carsService.addCar(this.inputBrand.value);
    this.inputBrand.setValue('');
  }
}
