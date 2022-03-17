const imagesLength = $(".image-list").children().length; //4
let index = 0;
const handleItemActive = () => {
  $(".image-item").removeClass("active"); //첫화면에 띄울 첫이미지에만 active를 준 상태이므로, active를 다 제거해야하는 과정이 필요
  $(".image-item").eq(index).addClass("active");
  $(".button-list button").css("background", "white");
  $(".button-list button").eq(index).css("background", "black");
};

$(".btn-next").click(() => {
  //   index === imagesLength - 1 ? (index = 0) : (index += 1);
  index = (index + 1) % 4;
  handleItemActive();
});
$(".btn-prev").click(() => {
  index = index === 0 ? imagesLength - 1 : index - 1;
  handleItemActive();
});

$(".button-list button").click(function () {
  let id = $(this).data("id") - 1;
  $(".image-item").removeClass("active");
  $(".image-item").eq(id).addClass("active");
  $(".button-list button").css("background", "white");
  $(this).css("background", "black");
});
