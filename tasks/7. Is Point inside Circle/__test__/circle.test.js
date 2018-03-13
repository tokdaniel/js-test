import 'chai/register-expect';
import Circle from '../Circle';
import Point from '../Point';

describe('Circle.includes() function', () => {

  it('should return FALSE if the point is outside the circle', function() {

    const point = Point(3, 4);
    const circle = Circle(Point(1, 2), 2);

    expect(circle.includes(point)).to.equal(false);
  });

  it('should return TRUE if the point is inside the circle', function() {

    const point = Point(3, 4);
    const circle = Circle(Point(1, 2), 3);

    expect(circle.includes(point)).to.equal(true);
  });

  it('should return TRUE if the point is tangential to the circle', function() {

    const point = Point(3, 3);
    const circle = Circle(Point(1, 3), 2);

    expect(circle.includes(point)).to.equal(true);
  });
});
