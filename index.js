const cursorFollwer = document.getElementById("cursor-follower");

document.addEventListener("mousemove", function (event) {
  var width = window.innerWidth;
  var height = window.innerHeight;
  var originX = width / 2;
  var originY = height / 2;
  var x = event.clientX;
  var y = event.clientY;
  var transY = -(x - originX) / originX;
  var transX = (y - originY) / originY;
  cursorFollwer.style.transform =
    "perspective(1000px)" +
    "rotateX(" +
    transX * 5 +
    "deg) " +
    "rotateY(" +
    transY * 5 +
    "deg)" +
    " scale3d(1, 1, 1) ";
});

//萨达萨达是
let a = function () {};
