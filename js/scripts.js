$(document).ready(function() {
  $("#survey").submit(function(event) {
    event.preventDefault();
    const birthday = $("#born").val();
    const favoriteColor = $("#color").val();
    const music = $("input:radio[name=genre]:checked").val();
    const food1 = $("#food1").val();
    const name = $("#name").val();

    $(".output-name").text(name);
    $(".output-food").text(food1);
    $(".output-born").text(birthday);
    $(".output-color").text(favoriteColor);
    $(".output-genre").text(music);

    $("#hide").show();
  });
});