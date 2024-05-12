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




// TOP的滾動隱藏效果
document.addEventListener('DOMContentLoaded', function () {
    var element = document.getElementById('elementToDisappear');
    var scrollPosition = window.scrollY;

    if (scrollPosition <= 250) {
        element.style.display = 'none'; // 滾動到 250px 高度時隱藏元素
    } else {
        element.style.display = 'block'; // 如果滾動高度小於 250px，則顯示元素
    }

    window.addEventListener('scroll', function () {
        var scrollPosition = window.scrollY;

        if (scrollPosition <= 250) {
            element.style.display = 'none'; // 滾動到 250px 高度時隱藏元素
        } else {
            element.style.display = 'block'; // 如果滾動高度小於 250px，則顯示元素
        }
    });
});


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