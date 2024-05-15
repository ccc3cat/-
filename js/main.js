// 漢堡 
const openMenuButton = document.getElementById('openMenu');
const closeMenuButton = document.getElementById('closeMenu');
const menu = document.getElementById('menu');

openMenuButton.addEventListener('click', () => {
    menu.classList.add('show-menu');
    overlay.classList.add('show-overlay');
});

closeMenuButton.addEventListener('click', () => {
    menu.classList.remove('show-menu');
    overlay.classList.remove('show-overlay');
});


// 關於日本輪播圖
$(function () {
    $("#CarouselImg").cycle({
        // 輪播效果名稱
        fx: 'fade',
        // 第一次輪播時的第一張圖片停留時
        delay: -4000,
        // 輪播速度
        timeout: 500,
    });
});

// 輪播卡
$(".slider").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    items: 5, // 修改这里来指定同时显示的图片数目
});

$(".slider2").owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 4500,
    autoplayHoverPause: true,
    items: 3, // 修改这里来指定同时显示的图片数目
});

    // 至頂按鈕
    $('#gotop').click(function () {
        $('html,body').animate({ scrollTop: 0 }, 1300);
    })

    // 淡出淡入
    $(window).scroll(function () {
        if ($(this).scrollTop() > 1000) {
            $('#gotop').stop().fadeTo('', 1);
        }
        else {
            $('#gotop').stop().fadeOut();
        }
    })