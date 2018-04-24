/*
* @Author: Marte
* @Date:   2018-04-02 20:44:11
* @Last Modified by:   Marte
* @Last Modified time: 2018-04-03 17:13:23
*/

$("#zou").mousedown(function(){
    // alert();
    $("#zou").html('<img src="images/zouwy.png" alt="">');
    // p=$("#benti img").offset()
    // $("#benti").animate({
    //     left:'+=100px',
    // },5000);

    // alert(p.left);
    $("#benti").css("animation","myfirst 5s");
    $("#benti").css("animation-fill-mode","forwards");
    $("#fan").css("animation","myfirst 5s");
    $("#fan").css("animation-fill-mode","forwards");
    setTimeout(function(){
        $("#fan").css("z-index","51");
    },1500)



})
$("#zou").mouseup(function(){
    // alert();
    $("#zou").html('<img src="images/zou.png" alt="">');
})
$("#you").mousedown(function(){
    // alert();
    $("#you").html('<img src="images/youwy.png" alt="">');
})
$("#you").mouseup(function(){
    // alert();
    $("#you").html('<img src="images/you.png" alt="">');
})
// $("#benti img").animate({
//         left:"100px",
//     },"5000");