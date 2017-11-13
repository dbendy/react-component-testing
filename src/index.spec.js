/* eslint-env jest */
import foo from './';

describe('fn', () => {
  it('runs', () => {
    expect(foo()).toBe('bar');
  });
});
