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