$(document).ready(function() {
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