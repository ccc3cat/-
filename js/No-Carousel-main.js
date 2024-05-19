    // TOP至頂按鈕
    $('#gotop').click(function () {
        $('html,body').animate({ scrollTop: 0 }, 1300);
    })

    // 淡出淡入
    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            $('#gotop').stop().fadeTo('', 1);
        }
        else {
            $('#gotop').stop().fadeOut();
        }
    })