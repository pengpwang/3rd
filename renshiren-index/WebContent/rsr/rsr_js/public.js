/**
 * Created by xcy on 2017/4/23.
 * 公用底部和右侧
 */
/*导航下拉二级导航*/
function setTab(name,cursel,n){
    for(var i=1;i<=n;i++){
        var menu=document.getElementById(name+i);
        var con=document.getElementById("con_"+name+"_"+i);
        menu.className=i==cursel?"on":"";
        con.style.display=i==cursel?"block":"none";
    }
};
/*首页反馈弹窗*/
$('.feedback').on('click',function () {
    $('.feed_back').fadeIn();

});
$('.close_box').on('click',function () {
    $('.feed_back').fadeOut();
});
/*返回顶部*/
$(window).scroll(function(){
    if($(window).scrollTop()>200){
        $('.top').fadeIn(200);
    }
    else{
        $('.top').fadeOut(200);
    }
});
$('.top').click(function(){
    $('body,html').animate({'scrollTop':'0px'},200)
});
/*在线咨询*/
/*document.write("<script type='text/javascript' charset='utf-8' src='https://www.v5kf.com/143635/v5kf.js?style=9'></script>");*/

/**百度统计***/
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?7f40adba6783b18086fb20b9b49f6196";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();

/****cnzz***/
var cnzz_protocol = (("https:" == document.location.protocol) ? " https://" : " http://");document.write(unescape("<span id='cnzz_stat_icon_1262640505'></span><script src='" + cnzz_protocol + "s13.cnzz.com/z_stat.php%3Fid%3D1262640505%26show%3Dpic' type='text/javascript'></script>"));

document.writeln("<a id=\"jsq\" href=\"calculator.html\" target=\"_blank\" title=\"工资社保计算器\"></a>");

/*window.onload = function() {
 /!*   var rsrTimer=setTimeout(function() {
        document.getElementById('v5frame').style.display='block';
        clearInterval(rsrTimer);
    }, 3000);*!/
    setInterval(changeColor,3000);
    function changeColor() {
        $("#v5Chat").remove();
        $("#v5Chat em").css({"display":"block","z-index":"9999","position":"absolute","border-radius":"5px","text-indent":"-99999px","height":"10px","background":"#ee1543","right":"-3px","top":"-5px","width":"10px"}).delay(1000).hide(0);
        var jsq=$("#v5bar");
        jsq.css("bottom","184px");
        $("#jsq").css("display","block");
    };
};*/
//



$(function(){
    // --footer--
    $('.n_footer-tm_sel-btn span').mouseover(function(){
        $('.n_footer-tm_sel-btn span').removeClass('n_footer-tm_sel-btn-active');
        $('.n_footer-tm_sel-item').removeClass('active');
        $('.n_footer-tm_sel-btn span').eq($(this).index()).addClass('n_footer-tm_sel-btn-active');
        $('.n_footer-tm_sel-item').eq($(this).index()).addClass('active');
    });

    var href = window.location.href;
    var active3_arr = ['honor.html', 'media_list.html', 'dynamic_list.html', 'marketing_list.html', 'marketing_con', 'shbx_', 'dynamic_list', 'xcgl_', 'media_', ''];
    var isActive3 = false;

    for(let i = 0; i < active3_arr.length; i++){
        if(href.indexOf(active3_arr[i]) > 0){
            isActive3 = true;
            break;
        }
    }

    // nav
    $('.n_header-item_wrap .n_header-item_wrap-sel').removeClass('active')
    if(href.indexOf('index.html') > 0){
        $('.n_header-item_wrap .n_header-item_wrap-sel').eq(0).addClass('active');
    }else if(href.indexOf('solution.html') > 0){
        $('.n_header-item_wrap .n_header-item_wrap-sel').eq(2).addClass('active');
    }else if(isActive3){
        $('.n_header-item_wrap .n_header-item_wrap-sel').eq(3).addClass('active');
    }else if(href.indexOf('about_us.html') > 0){
        $('.n_header-item_wrap .n_header-item_wrap-sel').eq(4).addClass('active');
    }else{
        if(href.indexOf('.html') > 0){
            $('.n_header-item_wrap .n_header-item_wrap-sel').eq(1).addClass('active');
        }else{
            $('.n_header-item_wrap .n_header-item_wrap-sel').eq(0).addClass('active');
        }
    }
});



