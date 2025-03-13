//引入CSS
import "../css/reset.css";
import "../css/index.css";

import { followElementById } from "../js/cursorFollower"; //鼠标跟踪

function isMobile() {
  // 使用正则表达式匹配常见的移动设备关键词
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
}

if (isMobile()) {
  // 移动端就不做鼠标跟随效果了
} else {
  // 引入js
  followElementById("cursor-follower");
}

//console输出的话
const consoleGreets = [
  "既然你都打开了开发者工具，想必也是懂的",
  "Github传送门=> https://github.com/xioajiumi",
  "虽然也没有啥好玩的 ,,ԾㅂԾ,,",
];
consoleGreets.forEach((greet) => console.error(greet));
