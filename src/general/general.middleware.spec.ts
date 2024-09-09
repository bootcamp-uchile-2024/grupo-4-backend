import { GeneralMiddleware } from './general.middleware';

describe('GeneralMiddleware', () => {
  it('should be defined', () => {
    expect(new GeneralMiddleware()).toBeDefined();
  });
});
