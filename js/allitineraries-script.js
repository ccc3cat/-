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

    // 同頁面中的menu關閉呼叫
    document.addEventListener("DOMContentLoaded", function () {
        // 獲取 closeMenu 按鈕
        var closeMenuButton = document.getElementById("closeMenu");
    
        // 獲取 "最新消息" 和 "關於日本" 的連結
        var Hokkaido = document.querySelector("a[href='./allitineraries.html#Hokkaido']");
        var KANTO = document.querySelector("a[href='./allitineraries.html#KANTO']");
        var KANSAI = document.querySelector("a[href='./allitineraries.html#KANSAI']");
        var SHIKOKU = document.querySelector("a[href='./allitineraries.html#SHIKOKU']");
        var KYUSHU = document.querySelector("a[href='./allitineraries.html#KYUSHU']");
    
        // 定義模擬點擊 closeMenu 按鈕的函數
        function simulateCloseMenuClick() {
            closeMenuButton.click();
        }
    
        // 為 "最新消息" 和 "關於日本" 連結添加點擊事件監聽器
        Hokkaido.addEventListener("click", simulateCloseMenuClick);
        KANTO.addEventListener("click", simulateCloseMenuClick);
        KANSAI.addEventListener("click", simulateCloseMenuClick);
        SHIKOKU.addEventListener("click", simulateCloseMenuClick);
        KYUSHU.addEventListener("click", simulateCloseMenuClick);
    });