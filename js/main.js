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
window.addEventListener('scroll', function () {
    var element = document.getElementById('elementToDisappear');
    var scrollPosition = window.scrollY;

    if (scrollPosition <= 250) {
        element.style.display = 'none'; // 滾動到 200px 高度時隱藏元素
    } else {
        element.style.display = 'block'; // 如果滾動高度小於 200px，則顯示元素
    }
});

