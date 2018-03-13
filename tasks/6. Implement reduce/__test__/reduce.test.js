import 'chai/register-expect';
import { Reduce } from '../reduce';

describe('Reduce() function', () => {

  it('should work with numbers.', function() {

    const array = [1, 2, 3, 4, 5];
    const reducer = (acc, curr) => acc += curr;

    expect(Reduce(array, reducer, 0)).to.equal(15);
  });

  it('should work with strings', function() {

    const array = ['this ', 'is ', 'a ', 'string'];
    const reducer = (acc, curr) => acc.concat(curr);

    expect(Reduce(array, reducer, '')).to.equal('this is a string');
  });
});
