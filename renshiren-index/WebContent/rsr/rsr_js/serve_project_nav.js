/**
 * Created by xcy on 2017/4/29.
 */
/*服务项目导航 默认样式*/
$('.select_on').css('border-bottom','6px solid #ff7b17');
$('.select_on').css('height','49px');
$('.select_on').hover(function () {
    $(this).css('border-bottom','0px');
    $(this).css('height','54px');
},function () {
    $(this).css('border-bottom','6px solid #ff7b17');
    $(this).css('height','49px');
});
$('.nav_son').hover(function () {
    $('.select_on').css('border-bottom','0px #fff');
    $('.select_on').css('height','54px');
},function () {
    $('.select_on').css('border-bottom','6px solid #ff7b17');
    $('.select_on').css('height','49px');
});
$('.point').hover(function () {
    $('.select_on').css('border-bottom','0px #fff');
    $('.select_on').css('height','54px');
},function () {
    $('.select_on').css('border-bottom','6px solid #ff7b17');
    $('.select_on').css('height','49px');
});
