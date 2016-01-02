jQuery(document).ready(function ($) {

    $(".scroll a, .navbar-brand, .gototop").click(function (event) {
        event.preventDefault();
        $('html,body').animate({scrollTop: $(this.hash).offset().top}, 600, 'swing');
        $(".scroll li").removeClass('active');
        $(this).parents('li').toggleClass('active');
    });
});

function submitForm() {
    location.reload();
}
function post() {
    method = "post"; // Set method to post by default if not specified.
    path = "//formspree.io/tharinda221@gmail.com";
    // The rest of this code assumes you are not using a library.
    // It can be made less wordy if you use one.
    var form = document.createElement("form");
    form.setAttribute("method", method);
    form.setAttribute("action", path);

    var hiddenField = document.createElement("input");
    hiddenField.setAttribute("type", "hidden");
    hiddenField.setAttribute("name", key);
    hiddenField.setAttribute("value", params[key]);

    form.appendChild(hiddenField);

    document.body.appendChild(form);
    form.submit();
}


var wow = new WOW(
    {
        boxClass: 'wowload',      // animated element css class (default is wow)
        animateClass: 'animated', // animation css class (default is animated)
        offset: 0,          // distance to the element when triggering the animation (default is 0)
        mobile: true,       // trigger animations on mobile devices (default is true)
        live: true        // act on asynchronously loaded content (default is true)
    }
);
wow.init();


$('.carousel').swipe({
    swipeLeft: function () {
        $(this).carousel('next');
    },
    swipeRight: function () {
        $(this).carousel('prev');
    },
    allowPageScroll: 'vertical'
});



