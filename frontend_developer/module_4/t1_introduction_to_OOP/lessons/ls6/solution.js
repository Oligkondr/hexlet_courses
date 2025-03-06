import Segment from './Segment.js';
import Point from './Point.js';

const reverse = (segment) => {
  const beginPoint = segment.getBeginPoint();
  const endPoint = segment.getEndPoint();

  return new Segment(
    new Point(endPoint.getX(), endPoint.getY()),
    new Point(beginPoint.getX(), beginPoint.getY()),
  );
};

const beginPoint = new Point(1, 10);
const endPoint = new Point(11, -3);

const segment = new Segment(beginPoint, endPoint);
const reversedSegment = reverse(segment);

console.log(
  segment.beginPoint.x,
  segment.beginPoint.y,
  segment.endPoint.x,
  segment.endPoint.y,
);// => 1 10 11 -3

console.log(
  reversedSegment.beginPoint.x,
  reversedSegment.beginPoint.y,
  reversedSegment.endPoint.x,
  reversedSegment.endPoint.y,
); // => 11 -3 1 10
