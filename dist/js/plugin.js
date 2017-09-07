;(function () {
    $(document).ready(function () {
        var contactUs = $('.contactUs');
        var overlay = $('.overlay');
        var cross = $('.cross');
        var searchPopup = $('.search-popup');
        var search = $('.search');

        contactUs.on('click', function () {
            overlay.fadeIn("fast");
            return false;
        });

        search.on('click', function () {
            searchPopup.fadeIn("fast");
            return false;
        });

        cross.on('click', function () {
            overlay.fadeOut("fast");
            searchPopup.fadeOut("fast");
            return false;
        });


    });
})(jQuery);