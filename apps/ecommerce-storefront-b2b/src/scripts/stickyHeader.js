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



window.onload = function () {
    // Cache DOM Element
    var scrollable = $('.scrollable');
    console.log(scrollable,"Scrollable")

    // Keeping the Scrollable state separate
    var state = {
        pos: {
            lowest: 0,
            current: 0
        },

        offset: {
            top: [0, 0] //Old Offset, New Offset
        }
    };

    //
    scrollable.slimScroll({
        height: '32rem',
        width: '24rem',
        start: 'top'
    });
    
    //
    scrollable.slimScroll().bind('slimscrolling', function (e, pos) {
        // Update the Scroll Position and Offset

        // Highest Position
        state.pos.highest = pos !== state.pos.highest ?
            pos > state.pos.highest ? pos : state.pos.highest :
            state.pos.highest;

        // Update Offset State
        state.offset.top.push(pos - state.pos.lowest);
        state.offset.top.shift();

        if (state.offset.top[0] < state.offset.top[1]) {
            console.log('...Scrolling Down');
            // ... YOUR CODE ...
        } else if (state.offset.top[1] < state.offset.top[0]) {
            console.log('Scrolling Up...');
            // ... YOUR CODE ...
        } else {
            console.log('Not Scrolling');
            // ... YOUR CODE ...
        }
    });
};
//# sourceURL=pen.js
