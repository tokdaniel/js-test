import Point from './Point';

export default function(center, radius) {
  return {
    center,
    radius,
    getCircumference() {
      return 2 * radius * Math.PI;
    },
    getArea() {
      return radius ** 2 * Math.PI;
    },
    includes(Point) {
      const dist = Math.sqrt((center.x - Point.x) ** 2 + (center.y - Point.y) ** 2);

      return dist <= radius;
    }
  }
}
