//hide screens
$(".second-screen").hide();
$(".cart-screen").hide();
$(".third-screen").hide();
$(".aisle-screen").hide();
$(".success-screen").hide();
$(".fail-screen").hide();
$(".fourth-screen").hide();
$(".fourth-screen2").hide();
$(".groclist").hide();
$(".list-screen").hide();
$(".cereal-screen").hide();

//hide buttons
$(".next-button").hide();
$(".next-button3").hide();
$(".next-button32").hide();
$(".next-button4").hide();

$(".apple").hide();
$(".cereal").hide();

$(".start-button").click(function() {
    $(".first-screen").hide();
    $(".second-screen").show();
});

$(".basket").dblclick(function() {
    $(".second-screen").hide();
    $(".third-screen").show();
});

$(".cart").dblclick(function() {
    $(".second-screen").hide();
    $(".cart-screen").show();
});

$(".dirty-wheel").click(function() {
    $(".dirty-wheel").attr("src", "https://i.imgur.com/ntoBUW1.png");
    $(".next-button").show();
    $(".wheel-text").text("Clean!");

});

$(".next-button").click(function() {
    $(".cart-screen").hide();
    $(".third-screen").show();
});

$(".list").click(function() {
    $(".third-screen").hide();
    $(".list-screen").show();
});

$(".aisle").click(function() {
    $(".third-screen").hide();
    $(".aisle-screen").show();
});

$(".next-button2").click(function() {
    $(".aisle-screen").hide();
    $(".fourth-screen2").show();
});

$(".wallet").dblclick(function() {
    $(".wallet").attr("src", "https://png.clipart.me/istock/previews/1789/17891685-fifty-dollar-bill-cartoon.jpg");
    $(".next-button3").show();

});

$(".wallet2").dblclick(function() {
    $(".wallet2").attr("src", "https://png.clipart.me/istock/previews/1789/17891685-fifty-dollar-bill-cartoon.jpg");
    $(".next-button32").show();

});

$(".next-button3").click(function() {
    $(".fourth-screen").hide();
    $(".success-screen").show();
    $(".next-button4").delay(6000).fadeIn(400);

});

$(".next-button32").click(function() {
    $(".fourth-screen2").hide();
    $(".fail-screen").show();
    $(".next-button4").delay(6000).fadeIn(400);
});

$(".next-button4").click(function() {
    $(".first-screen").show();
    $(".success-screen").hide();
    $(".fail-screen").hide();
    $(".next-button4").hide();
});

$(".click").hover(function() {
    $(".groclist").slideDown();
    $(".apple").show();
    $(".cereal").show();
});

$(".cereal").click(function() {
    $(".cereal-screen").show();
    $(".list-screen").hide();
});

$(".apple").click(function() {
    $(".list-screen").hide();
    $(".fourth-screen").show();

});

$(".next-button5").click(function() {
    $(".cereal-screen").hide();
    $(".fourth-screen").show();
});