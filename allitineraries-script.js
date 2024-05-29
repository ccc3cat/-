// 獲取所有的輪播項目和指示器
const carouselItems = document.querySelectorAll('.carousel-inner input[type="radio"]');
const carouselIndicators = document.querySelectorAll('.carousel-indicators li input');

// 設置初始索引
let currentIndex = 0;

// 自動播放函數
function autoPlay() {
    // 切換到下一張輪播項目
    currentIndex = (currentIndex + 1) % carouselItems.length;
    
    // 切換到下一張輪播項目
    carouselItems[currentIndex].checked = true;

    // 更新指示器狀態
    updateIndicators();
}

// 更新指示器狀態函數
function updateIndicators() {
    carouselIndicators.forEach((indicator, index) => {
        if (index === currentIndex) {
            indicator.checked = true;
        } else {
            indicator.checked = false;
        }
    });
}

// 每隔一段時間自動播放
const interval = setInterval(autoPlay, 3000); // 5000毫秒（即5秒）為間隔時間，可以根據需要調整

// 當用戶點擊指示器時，停止自動播放並切換到相應的輪播項目
carouselIndicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        currentIndex = index;
        updateIndicators();
    });
});


// 頁面跳轉區
document.querySelectorAll('a[href^="#Hokkaido"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
    });
});

document.querySelectorAll('a[href^="#KANTO"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
    });
});

document.querySelectorAll('a[href^="#KANSAI"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
    });
});

document.querySelectorAll('a[href^="#SHIKOKU"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
    });
});

document.querySelectorAll('a[href^="#KYUSHU"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
    });
});
