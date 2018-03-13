import 'chai/register-expect';
import Circle from '../Circle';
import Point from '../Point';

describe('Circle.includes() function', () => {

  it('should return FALSE if the point is outside the circle', function() {

    const Point = Point(3,4);
    const reducer = (acc, curr) => acc += curr;

    expect(Reduce(array, reducer, 0)).to.equal(15);
  });

  it('should work with strings', function() {

    const array = ['this ', 'is ', 'a ', 'string'];
    const reducer = (acc, curr) => acc.concat(curr);

    expect(Reduce(array, reducer, '')).to.equal('this is a string');
  });
});
