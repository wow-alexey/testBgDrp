;(function () {
    $(document).ready(function () {
        var contactUs = $('.contactUs');
        var overlay = $('.overlay');
        var cross = $('.cross');
        var searchPopup = $('.search-popup');
        var search = $('.search');

        contactUs.on('click', function () {
            overlay.fadeIn("fast");
        });

        search.on('click', function () {
            searchPopup.fadeIn("fast");
        });

        cross.on('click', function () {
            overlay.fadeOut("fast");
            searchPopup.fadeOut("fast");
        });


    });
})(jQuery);