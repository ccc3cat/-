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



// TOP至頂按鈕
$('#gotop').click(function () {
    $('html,body').animate({ scrollTop: 0 }, 900);
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