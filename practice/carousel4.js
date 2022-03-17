let index = 0;

const imageListLength = $(".image-list").children().length;
const buttonActive = () => {
  $(".button-list button").css("background", "white");
  $(".button-list button").eq(index).css("background", "black");
};

$(".btn-next").click(() => {
  index = index === imageListLength - 1 ? 0 : index + 1;
  $(".image-list").css("transform", `translateX(-${index * 800}px)`);
  buttonActive();
});
$(".btn-prev").click(() => {
  index = index === 0 ? imageListLength - 1 : index - 1;
  $(".image-list").css("transform", `translateX(-${index * 800}px)`);
  buttonActive();
});

$(".button-list button").click(function () {
  let id = $(this).data("id") - 1;
  $(".image-item").removeClass("active");
  $(".image-list").css("transform", `translateX(-${id * 800}px)`);
  $(".button-list button").css("background", "white");
  $(this).css("background", "black");
});
