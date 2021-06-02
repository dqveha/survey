$(document).ready(function() {
  $("#survey").submit(function(event) {
    event.preventDefault();
    const birthday = $("input#born").val();
    const favoriteColor = $("input#color").val();
    const music = $("input:radio[name=genre]:checked").val();
    const food1 = $("#food1").val();
    const first-name = $(input#first-name).val();
    const last-name = $(input#last-name).val();

    $(".output-name").text(first-name + " " + last-name);
    $(".output-food").text(food1);
    $(".output-born").text(birthday);
    $(".output-color").text(favoriteColor);
    $(".output-genre").text(music);

    $(".hide").show();
  });
});

  // $("form#name").submit(function(event)) {
  //   const first-name = $(#first-name).val();
  //   const last-name = $(#last-name).val();
  //   $("#output-name").text(first-name + " " + last-name);
  // });
  // $("form#food").submit(function(event) {
  //   const food1 = $("#food1").val();
  //   $("#output-food").text(food1);
  // });