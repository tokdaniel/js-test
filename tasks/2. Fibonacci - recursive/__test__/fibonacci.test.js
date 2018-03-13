import 'chai/register-expect';
import sinon from 'sinon';
import scope from '../fibonacci';

describe('getFibonacciUntil() function', () => {
  it('should return the fibonacci numbers unil n in an array', function() {

    const result = scope.getFibonacciUntil(7).toString();
    const expected = '0,1,1,2,3,5,8';

    expect(result).to.equal(expected);
  });

  it('should be recursive', function() {

    const spy = sinon.spy(scope, "getFibonacciUntil");

    scope.getFibonacciUntil(7);
    expect(spy.callCount).to.equal(8);
  })
});
