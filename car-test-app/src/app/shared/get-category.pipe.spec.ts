import { IsFairCarPipe } from './is-fair-car.pipe';

describe('GetCategoryPipe', () => {
  it('create an instance', () => {
    const pipe = new IsFairCarPipe();
    expect(pipe).toBeTruthy();
  });
});
