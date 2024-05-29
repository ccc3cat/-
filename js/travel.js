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






document.addEventListener('DOMContentLoaded', function () {
    let journeyBoxes = document.querySelectorAll('.journey-box');

    journeyBoxes.forEach(journeyBox => {
        let dayImg = journeyBox.querySelector('.day-img');
        let nextImgs = journeyBox.querySelectorAll('.next-img');

        let active = false;  //開始拖動=結束拖動
        let initialX;  //水平位置
        let currentX;  //，計算拖動的距離，根據這個距離移動圖片。
        let currentOffset = 0;
        let order = 1;  //圖片的顯示順序（即 order 屬性）

        dayImg.addEventListener("touchstart", dragStart, false);   //touchstart當觸碰時，會觸發dragStart的函數
        document.addEventListener("touchend", dragEnd, false);  //touchend"當停止觸碰時，觸發dragEnd的函數
        document.addEventListener("touchmove", drag, false);  //touchmove當觸碰&移動時，會觸發drag的函數

        function dragStart(a) {  //當觸碰時
            console.log('dragstart');

            dayImg.style.cursor = 'grabbing';

            if (a.type === "touchstart") {
                initialX = a.touches[0].clientX;
            } else {
                initialX = a.clientX;
            }

            active = true; //表示開始拖動
        }

        function dragEnd(a) {
            if (active) {
                console.log('dragEnd');

                if (currentX) {
                    currentOffset = currentOffset + currentX - initialX;
                }

                dayImg.style.cursor = 'grabend';
                active = false; //表示拖動結束

                snap();
            }
        }

        function drag(a) {
            if (active) {
                console.log('drag');

                a.preventDefault();

                if (a.type === "touchmove") {
                    currentX = a.touches[0].clientX;
                } else {
                    currentX = a.clientX;
                }

                translateB(currentX - initialX);
                currentOffset += currentX - initialX;

                initialX = currentX;

                checkOffset();

            }
        }

        function translateB(deltaX) {
            dayImg.style.transform = 'translateX(' + (currentOffset + deltaX) + 'px)';
        }

        function snapB() {
            console.log((currentOffset % 550));  /* 550圖片寬度 */

            let rounded = Math.round((currentOffset % 550) / 550);
            let snapped;

            if (rounded === 0) {
                snapped = currentOffset - (currentOffset % 550);
            } else {
                snapped = currentOffset + ((550 - Math.abs(currentOffset % 550)) * rounded);
            }

            dayImg.style.transform = 'translateX(' + snapped + 'px)';
            currentOffset = snapped;

            checkOffset();
        }

        function checkOffset() {
            let tempOffset = currentOffset;
            let direction = 0; //表示不進行移動

            if (active) {
                tempOffset += currentX - initialX;
            }

            if (tempOffset >= 275) {  //550寬度的一半
                direction = -1;
            } else if (tempOffset <= -275) {
                direction = 1;
            }

            if (direction !== 0) {
                console.log(tempOffset);
                translateB(550 * direction);
                updateOrder(direction * -1);
                currentOffset += 550 * direction;
            }
        }

        function updateOrder(direction) {
            order = (order + direction + nextImgs.length) % nextImgs.length;
            console.log(order);
            if (order === 0) {
                nextImgs.forEach(function (item) {
                    item.style.order = 0;
                });
            } else if (order === nextImgs.length - 1) {
                for (let i = 1; i < nextImgs.length; i++) {
                    nextImgs[i].style.order = -1;
                }

            } else if (direction === 1) {
                nextImgs[nextImgs.length - order].style.order = -1;
            } else {
                nextImgs[nextImgs.length - order - 1].style.order = 0;
            }
        }


        //按鈕設定

        journeyBox.querySelector('.btn-day-right').addEventListener('click', function (a) {
            dayImg.style.transform = 'translateX(' + (currentOffset + 550) + 'px)';
            currentOffset += 550;
            checkOffset();
        });

        journeyBox.querySelector('.btn-day-lift').addEventListener('click', function (a) {
            dayImg.style.transform = 'translateX(' + (currentOffset - 550) + 'px)';
            currentOffset -= 550;
            checkOffset();
        });
    });
});


// 行程特色切換輪播
let slideIndex = 1;
showSlides(slideIndex);

// 上一張和下一張按鈕的控制
function plusSlides(n) {
    slideIndex += n;
    updateNav(slideIndex);
    showSlides(slideIndex);
}

// 點擊圓點控制
function currentSlide(n) {
    slideIndex = n;
    updateNav(slideIndex);
    showSlides(slideIndex);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let slides2 = document.getElementsByClassName("mySlides2");
    let slides3 = document.getElementsByClassName("mySlides3");
    let paragraphs = document.getElementsByClassName("paragraph");
    let headings = document.getElementsByClassName("headings-container");

    // 循環輪播
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }

    // 隱藏所有幻燈片
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < slides2.length; i++) {
        slides2[i].style.display = "none";
    }
    for (i = 0; i < slides3.length; i++) {
        slides3[i].style.display = "none";
    }

    // 隱藏所有段落
    for (i = 0; i < paragraphs.length; i++) {
        paragraphs[i].style.display = "none";
    }
    for (i = 0; i < headings.length; i++) {
        headings[i].style.display = "none";
    }

    // 顯示當前幻燈片
    slides[slideIndex - 1].style.display = "block";
    slides2[slideIndex - 1].style.display = "block";
    slides3[slideIndex - 1].style.display = "block";
    // 顯示當前段落
    paragraphs[slideIndex - 1].style.display = "block";
    headings[slideIndex - 1].style.display = "block";
}

function updateNav(index) {
    var lis = document.querySelectorAll(".feature-box ul li");
    lis.forEach(function (li, i) {
        if (i === (index - 1) % lis.length) {
            li.classList.add("active");
        } else {
            li.classList.remove("active");
        }
    });
}

document.addEventListener("DOMContentLoaded", function () {
    currentSlide(1); // 預設選中第一個 li 並顯示對應幻燈片
});
