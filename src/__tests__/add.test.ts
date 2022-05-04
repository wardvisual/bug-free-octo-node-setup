import add from '@src/math/add';

describe('This shoud return 10', () => {
  it('should pass', () => {
    expect(add(5)).toBe(10);
  });
});
