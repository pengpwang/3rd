/**
 * Created by xcy on 2017/4/19.
 * 获取手机验证码
 */
var countdown=60;
function settime(val) {
    if (countdown == 0) {
        val.removeAttribute("disabled");
        val.value="重新获取验证码";
        countdown = 60;
    } else {
        val.setAttribute("disabled", true);
        val.value= countdown + "s后重新获取";
        countdown--;
        setTimeout(function() {
            settime(val);
        },1000);
    }
}