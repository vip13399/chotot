var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);
// silder-------------------------------------------------------
let sliderBox = $(".sliderBox");
let sliderimg = $(".sliderImg");
let sliderImgs = $$(".sliderBox .sliderImg .img_item");
let dots = $$(".sliderBox .sliderDots li");
let next = $("#next");
let prev = $("#prev");

let active = 0;
let lengthItem = sliderImgs.length - 1;

let autoslider = setInterval(() => {
  next.onclick();
}, 5000);
next.onclick = function () {
  active + 1 > lengthItem ? (active = 0) : (active += 1);
  reloadslider();
};
prev.onclick = function () {
  active - 1 < 0 ? (active = lengthItem) : (active = active - 1);
  reloadslider();
};
function reloadslider() {
  //tìm vị trí hiện tại của img
  let setoffsetleft = sliderImgs[active].offsetLeft;
  sliderimg.style.left = -setoffsetleft + "px";
  // thêm xoá class active để dot thay đổi
  $(".sliderBox .sliderDots li.active").classList.remove("active");
  dots[active].classList.add("active");
  //kiểm tra khi click thì xoá autoslider và thêm lại
  clearInterval(autoslider);
  autoslider = setInterval(() => {
    next.onclick();
  }, 5000);
}
//lặp qua cái thẻ li  lắng nghe sự kiện click
dots.forEach((li, key) => {
  li.addEventListener("click", function () {
    active = key;
    reloadslider();
  });
});
