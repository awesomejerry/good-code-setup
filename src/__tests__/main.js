import main from '../main';

describe('my test suite', () => {

  it('adds two numbers', () => {
    expect(main(1, 2)).toEqual(3);
  });

});
