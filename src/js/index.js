//引入CSS
import "../css/reset.css";
import "../css/index.css";

// 引入js
import { followElementById } from "../js/cursorFollower"; //鼠标跟踪
followElementById("cursor-follower");

//console输出的话
const consoleGreets = [
  "既然你都打开了开发者工具，想必也是懂的",
  "Github传送门=> https://github.com/xioajiumi",
  "虽然也没有啥好玩的 ,,ԾㅂԾ,,",
];
consoleGreets.forEach((greet) => console.error(greet));
