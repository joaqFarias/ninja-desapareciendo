// desaparecer imagenes con fadeout
$("img").click(function(){
    $(this).fadeOut();
})

$(".btn").click(function(){
    $("img").fadeIn();
})