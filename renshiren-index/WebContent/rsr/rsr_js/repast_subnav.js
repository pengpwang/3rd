/**
 * Created by xcy on 2017/4/29.
 */
/*导航关于人事人*/
$('.select_solu').css('border-bottom','6px solid #ff7b17');
$('.select_solu').css('height','49px');
$('.select_solu').hover(function () {
    $(this).css('border-bottom','0px');
    $(this).css('height','54px');
},function () {
    $(this).css('border-bottom','6px solid #ff7b17');
    $(this).css('height','49px');
});
$('.nav_son_solu').hover(function () {
    $('.select_solu').css('border-bottom','0px #fff');
    $('.select_solu').css('height','54px');
},function () {
    $('.select_solu').css('border-bottom','6px solid #ff7b17');
    $('.select_solu').css('height','49px');
});
$('.point').hover(function () {
    $('.select_solu').css('border-bottom','0px #fff');
    $('.select_solu').css('height','54px');
},function () {
    $('.select_solu').css('border-bottom','6px solid #ff7b17');
    $('.select_solu').css('height','49px');
});