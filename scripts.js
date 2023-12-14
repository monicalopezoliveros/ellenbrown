// Functionality for handling the menu button and its behavior on different screen sizes
document.addEventListener("DOMContentLoaded", function() {
    const menuBtn = document.getElementById("menuBtn");
    const nav = document.getElementById("navHeader");
    let isMenuOpen = false;

    menuBtn.addEventListener("click", function() {
        if (!isMenuOpen) {
            nav.querySelector("ul").style.display = "block";
        } else {
            nav.querySelector("ul").style.display = "none";
        }
        isMenuOpen = !isMenuOpen;
    });

    // Add the event to close the menu when clicking a link
    const links = document.querySelectorAll('#navHeader ul li a');
    links.forEach(function(link) {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 600) { // Check the width of the window
                nav.querySelector("ul").style.display = "none";
                isMenuOpen = false;
            }
        });
    });

    // Add event to adjust menu on window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 600) { // Check the width of the window
            nav.querySelector("ul").style.display = "block";
        } else {
            nav.querySelector("ul").style.display = "none";
            isMenuOpen = false;
        }
    });
});