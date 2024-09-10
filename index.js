//在这里处理界面跟随鼠标摇晃
const cursorFollwer = document.getElementById("cursor-follower");
document.addEventListener("mousemove", function (event) {
  let width = window.innerWidth;
  let height = window.innerHeight;
  let originX = width / 2;
  let originY = height / 2;
  let x = event.clientX;
  let y = event.clientY;
  let transY = -(x - originX) / originX;
  let transX = (y - originY) / originY;
  const dangerRange = 1;
  if (y <= dangerRange || height - y <= dangerRange) {
    cursorFollwer.style.transform =
      "perspective(1000px)" +
      "rotateX(" +
      transX * 0 +
      "deg) " +
      "rotateY(" +
      transY * 0 +
      "deg)" +
      " scale3d(1, 1, 1) ";
  } else {
    setTimeout(function rotate() {
      cursorFollwer.style.transform =
        "perspective(1000px)" +
        "rotateX(" +
        transX * 5 +
        "deg) " +
        "rotateY(" +
        transY * 5 +
        "deg)" +
        " scale3d(1, 1, 1) ";
    }, 50);
  }
});

//console输出的话
const consoleGreets=[
  "既然你都打开了开发者工具，想必也是懂的",
  "Github传送门=> https://github.com/xioajiumi",
  "虽然也没有啥好玩的 ,,ԾㅂԾ,,",
]
consoleGreets.forEach(greet=>console.error(greet))
