const openMenuButton = document.getElementById('openMenu');
const closeMenuButton = document.getElementById('closeMenu');
const menu = document.getElementById('menu');
const overlay = document.getElementById('overlay');
const jumpLinks = document.querySelectorAll('.jumpLink'); // 使用类名选择所有跳转链接

openMenuButton.addEventListener('click', () => {
    menu.classList.add('show-menu');
    overlay.classList.add('show-overlay');
});

closeMenuButton.addEventListener('click', () => {
    menu.classList.remove('show-menu');
    overlay.classList.remove('show-overlay');
});

// 为每个跳转链接添加点击事件
jumpLinks.forEach((jumpLink) => {
    jumpLink.addEventListener('click', () => {
        // 点击链接时，关闭菜单和遮罩
        menu.classList.remove('show-menu');
        overlay.classList.remove('show-overlay');
    });
});


// 關於日本輪播圖
$(function () {
    $(".CarouselImg").cycle({
        // 輪播效果名稱
        fx: 'fade',
        // 第一次輪播時的第一張圖片停留時
        delay: -4000,
        // 輪播速度
        timeout: 500,
    });
});

// 輪播卡

$(document).ready(function () {
    function initializeOwl(selector, itemsDefault, itemsMedium, itemsSmall) {
        var owl = $(selector).owlCarousel({
            loop: true,
            autoplay: true,
            autoplayTimeout: selector === '.slider' ? 3000 : 4500,
            autoplayHoverPause: true,
            items: itemsDefault
        });

        function updateOwlItems() {
            var windowWidth = $(window).width();
            var newItems;
            if (windowWidth <= 640) {
                newItems = itemsSmall;
            } else if (windowWidth <= 820) {
                newItems = itemsMedium;
            } else {
                newItems = itemsDefault;
            }
            owl.trigger('destroy.owl.carousel');
            owl.owlCarousel({
                loop: true,
                autoplay: true,
                autoplayTimeout: selector === '.slider' ? 3000 : 4500,
                autoplayHoverPause: true,
                items: newItems
            });
        }

        $(window).resize(updateOwlItems);
        updateOwlItems(); // Initialize on page load
    }

    initializeOwl('.slider', 5, 3, 1);
    initializeOwl('.slider2', 3, 1, 1);
});

// TOP至頂按鈕
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
// 黏性導覽列
window.onscroll = function () { myFunction() };

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}

// 同頁面中的menu關閉呼叫
document.addEventListener("DOMContentLoaded", function () {
    // 獲取 closeMenu 按鈕
    var closeMenuButton = document.getElementById("closeMenu");

    // 獲取 "最新消息" 和 "關於日本" 的連結
    var latestNewsLink = document.querySelector("a[href='index.html#news']");
    var aboutJapanLink = document.querySelector("a[href='index.html#about']");

    // 定義模擬點擊 closeMenu 按鈕的函數
    function simulateCloseMenuClick() {
        closeMenuButton.click();
    }

    // 為 "最新消息" 和 "關於日本" 連結添加點擊事件監聽器
    latestNewsLink.addEventListener("click", simulateCloseMenuClick);
    aboutJapanLink.addEventListener("click", simulateCloseMenuClick);
});