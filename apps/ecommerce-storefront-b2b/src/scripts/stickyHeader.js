// When the user scrolls the page, execute myFunction
window.onscroll = function () { myFunction() };
function myFunction() {
    if (document.readyState == 'complete' || document.readyState == 'interactive') {
        // Get the navbar
        var navbar = document.getElementById("header");
        // Get the offset position of the navbar
        var sticky = navbar.offsetTop;
        if (window.pageYOffset >= sticky) {
            // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
            navbar.classList.add("sticky");
        } else {
            navbar.classList.remove("sticky");
        }
    }
}

//when the user scrolls the page ,execute animations
window.onload = function () { myFunction1() };
function myFunction1() {
    var wow = new WOW(
        {
            boxClass: 'wow',      // animated element css class (default is wow)
            animateClass: 'animated', // animation css class (default is animated)
            offset: 0,          // distance to the element when triggering the animation (default is 0)
            mobile: true,       // trigger animations on mobile devices (default is true)
            live: true,       // act on asynchronously loaded content (default is true)
            callback: function (box) {
                // the callback is fired every time an animation is started
                // the argument that is passed in is the DOM node being animated
            },
            scrollContainer: null // optional scroll container selector, otherwise use window
        }
    );
    wow.init();
}