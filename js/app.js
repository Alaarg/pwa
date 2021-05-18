$(window).ready(function () {
  $(".floating_button").click(function () {
    $(".floating_button_tabs").toggleClass("active");
  });

  const divider = $(".divider").data("divider");
  const fontSize = $(".sbc_social").data("fontsize");
  const fontColor = $(".sbc_social").data("fontcolor");

  $(".divider").css("height", divider);
  $(".sbc_social").css("font-size", fontSize);
  $(".sbc_social i").css("color", fontColor);
});
