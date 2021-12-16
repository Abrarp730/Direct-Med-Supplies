// When the user scrolls the page, execute myFunction
window.onscroll = function () { myFunction() };

// Get the navbar

function myFunction() {
    if (document.readyState == 'complete' || document.readyState == 'interactive') {

        var navbar = document.getElementById("header");
        var sticky = navbar.offsetTop;
        if (window.pageYOffset >= sticky) {
            navbar.classList.add("sticky");
            // navbar.classList.add("sticky1");
            // navbar.classList.add("sticky2");

        } else {
            navbar.classList.remove("sticky");
            // navbar.classList.remove("sticky1");
            // navbar.classList.add("sticky2");
        }
    }
}

// Get the offset position of the navbar

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position