import neon1 from "../images/neon-1.png";
import neon2 from "../images/neon-2.png";
import neon3 from "../images/neon-3.png";
import { ISpeed, IImageSpeed } from '../typings'

/**
 * 速度和两次点击时间差的关系
 */
const Speed: ISpeed[] = [
  {
    speed: 50,
    diff: 50,
  },
  {
    speed: 46,
    diff: 70,
  },
  {
    speed: 42,
    diff: 100,
  },
  {
    speed: 38,
    diff: 125,
  },
  {
    speed: 34,
    diff: 200,
  },
  {
    speed: 26,
    diff: 250,
  },
  {
    speed: 25,
    diff: 300,
  },
  {
    speed: 22,
    diff: 400,
  },
  {
    speed: 18,
    diff: 500,
  },
  {
    speed: 15,
    diff: 800,
  },
  {
    speed: 12,
    diff: 1000,
  },
  {
    speed: 8,
    diff: 2000,
  },
  {
    speed: 3,
    diff: 2500,
  },
  {
    speed: 1,
    diff: 5000,
  },
  {
    speed: 0,
    diff: Infinity,
  },
];

/**
 * 速度和显示背景图片的关系
 */
const ImageSpeed: IImageSpeed[] = [{
  speed: 0,
  image: ''
}, {
  speed: 15,
  image: neon1,
}, {
  speed: 25,
  image: neon2,
}, {
  speed: Infinity,
  image: neon3
}]

export { Speed, ImageSpeed };
