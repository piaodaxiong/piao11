export default window.onload = function () {
    window.onscroll = function (e) {
        var top = $(this).scrollTop();//当前窗口的滚动距离,即滚轮位置
        // console.log(top);
        // var go1Top = $("#tuijian").offset().top - $("#tuijian").height();//所在盒子的位置-盒子的高度=指定的位置
        if (top > 100)//当滚轮位置大于或等于指定位置的时候
        {
            $("#celan").css({ display: "block" });
        }
        else {
            $("#celan").css({ display: "none" });
        }
    }
}