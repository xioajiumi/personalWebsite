//在这里处理界面跟随鼠标摇晃

let argList = {};

let rotateFactor = 0.3;

function cancelRotate(el) {
  el.style.transform =
    "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
}

function handleLeave(el) {
  el.addEventListener("mouseleave", function (event) {
    cancelRotate(el);
    el.style.transition = "all 0.3s ease-in-out";
    setTimeout(() => {
      el.style.transition = "all 0.2s ease-in-out";
    }, 300);
  });
}
function handleEnter(el) {
  el.addEventListener("mouseenter", function (event) {
    el.style.transition = "all 0.2s ease";
    setTimeout(() => {
      el.style.transition = "";
    }, 200);
  });
}

function startFollow(el) {
  const box = el.getBoundingClientRect();
  const originX = box.width / 2;
  const originY = box.height / 2;
  el.addEventListener("mousemove", function (event) {
    const x = event.clientX;
    const y = event.clientY;
    const transY = -(x - originX) / originX;
    const transX = (y - originY) / originY;
    el.style.transform =
      "perspective(1000px)" +
      "rotateX(" +
      transX * 5 * rotateFactor +
      "deg) " +
      "rotateY(" +
      transY * 5 * rotateFactor +
      "deg)" +
      " scale3d(1, 1, 1) ";
  });
}
// 对外暴露主函数
function followElementById(elId, args) {
  const el = document.getElementById(elId);
  startFollow(el);
  handleEnter(el);
  handleLeave(el);
}
