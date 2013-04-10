/**
 * Created with JetBrains WebStorm.
 * User: maoheming
 * Date: 13-4-10
 * Time: 下午5:50
 * To change this template use File | Settings | File Templates.
 */
$(function () {
    sendMsg();
    function sendMsg() {
        if (!$(".J_send").length) return this;

        $(".J_send").click(function () {
            if ($("#msg").val() == "") return this;
            var msg = $("#msg").val();
            var mydate = new Date();
            var myyear = mydate.getFullYear();
            var mymonth = mydate.getMonth();
            var myday = mydate.getDate();
            var mytime = mydate.toLocaleTimeString();
            var str = '<div class="words right">' +
                '<div class="sentence">' + msg + '</div>' +
                '<div class="date-time">' + myyear + '.' + mymonth + '.' + myday + ' ' + mytime + '</div>' +
                '</div>';
            $("#dialogue").append(str);
            $("#msg").val("");
        });
    }
});