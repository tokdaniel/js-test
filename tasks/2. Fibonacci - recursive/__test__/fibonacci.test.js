import 'chai/register-expect';
import { getFibonacciUntil } from '../fibonacci';

describe('getFibonacciUntil() function', () => {
  it('should return the fibonacci numbers unil n in an array', function() {

    const result = getFibonacciUntil(7).toString();
    const expected = '0,1,1,2,3,5,8';

    expect(result).to.equal(expected);
  });
});
