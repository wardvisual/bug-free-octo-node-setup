import add from '@src/math/add';

describe('This shoud return 10', () => {
  it('should pass', () => {
    expect(add(15)).toBe(20);
  });
});
