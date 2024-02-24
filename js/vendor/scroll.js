/*=========================================================================
        Scroll Function
=========================================================================*/
document.addEventListener("DOMContentLoaded", function () {
    const arrowContainer = document.querySelector(".down-arrow");
    const arrowContainer2 = document.querySelector(".down-arrow_two");
    const aboutContainer = document.getElementById("animation");
    const circle_four = document.querySelector(".four");
    const service_content_img = document.getElementById("img_one");
    const service_content_img2 = document.getElementById("img_two");

    let isScrollingDownArrow = false;
    let isScrollingDownArrow2 = false;
    let isScrollingContainer = false;
    let isScrollingCircle4 = false;
    let isScrollingServiceContentImg = false;
    let isScrollingServiceContentImg2 = false;

    window.addEventListener("scroll", function () {
        if (window.scrollY > 50 && !isScrollingDownArrow) {
            arrowContainer.style.transform = "translateY(60px)";
            isScrollingDownArrow = true;
        } else if (window.scrollY <= 50 && isScrollingDownArrow) {
            arrowContainer.style.transform = "translateY(0)";
            isScrollingDownArrow = false;
        }
    });

    window.addEventListener("scroll", function () {
        if (window.scrollY > 2800 && !isScrollingDownArrow2) {
            arrowContainer2.style.transform = "translateY(154px)";
            isScrollingDownArrow2 = true;
        } else if (window.scrollY <= 2800 && isScrollingDownArrow2) {
            arrowContainer2.style.transform = "translateY(0)";
            isScrollingDownArrow2 = false;
        }
    });

    window.addEventListener("scroll", function () {
        if (window.scrollY > 50 && !isScrollingContainer) {
            aboutContainer.style.transform = "translateY(140px)";
            isScrollingContainer = true;
        } else if (window.scrollY <= 50 && isScrollingContainer) {
            aboutContainer.style.transform = "translateY(0)";
            isScrollingContainer = false;
        }
    });

/*=========================================================================
        Scroll Function - Circle
=========================================================================*/

    window.addEventListener("scroll", function () {
        if (window.scrollY > 2800 && !isScrollingCircle4) {
            circle_four.style.transform = "translateY(360px)";
            isScrollingCircle4 = true;
        } else if (window.scrollY <= 2800 && isScrollingCircle4) {
            circle_four.style.transform = "translateY(0)";
            isScrollingCircle4 = false;
        }
    });


/*=========================================================================
        Scroll Function - Service Section Img
=========================================================================*/

    window.addEventListener("scroll", function () {
        if (window.scrollY > 1200 && !isScrollingServiceContentImg) {
            service_content_img.style.transform = "translateY(0)"
            isScrollingServiceContentImg = true;
        } else if (window.scrollY <= 1200 && isScrollingServiceContentImg) {
            service_content_img.style.transform = "translateY(-50px)";
            isScrollingServiceContentImg = false;
        }
    });
    window.addEventListener("scroll", function () {
        if (window.scrollY > 2025 && !isScrollingServiceContentImg2) {
            service_content_img2.style.transform = "translateY(0)"
            isScrollingServiceContentImg2 = true;
        } else if (window.scrollY <= 2025 && isScrollingServiceContentImg2) {
            service_content_img2.style.transform = "translateY(-50px)";
            isScrollingServiceContentImg2 = false;
        }
    });

});


  
