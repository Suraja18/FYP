// const navbar = document.getElementById('navigations');
// window.onscroll = function () {
//     scrollFunction()
// }
// function scrollFunction() {
//     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//         navbar.classList.add('inSticky')
//     } else {
//         navbar.classList.remove('inSticky')

//     }
// }


document.addEventListener("DOMContentLoaded", function () {
    let currentSlide = 0;
    const slides = document.querySelectorAll(".heroBannerSlides");

    function showSlide(index) {
        slides.forEach((slide, i) => {
            if (i === index) {
                slide.style.display = "block";
            } else {
                slide.style.display = "none";
            }
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    
    showSlide(currentSlide);

    
    setTimeout(() => {
        nextSlide(); 
        setInterval(nextSlide, 9500);
    }, 500);


    document.querySelectorAll('.nav-header-bar').forEach(function(navHeaderBar) {
        navHeaderBar.addEventListener('click', function() {
            var navId = this.dataset.navId;
            var navContentsOpen = document.querySelector('.nav-contents[data-nav-id="' + navId + '"]');
            var expandArrows = document.querySelector('.arrowDown[data-nav-id="' + navId + '"]');
            expandArrows.classList.toggle('rotate180');
            navContentsOpen.classList.toggle('open');
        });
    });


    document.getElementById('burger-menu').addEventListener('click', function() {
        this.classList.toggle('open');
        var mobileNavPanel = document.getElementById('mobileNavPanel');
        mobileNavPanel.classList.toggle('open');
    });
      

    $(document).ready(function () {
        $(".FAQS-title-question").click(function () {
            $(this).next(".question-content-answer").toggleClass("content-is-active");
            $(this).find(".question-plus-icon").find(".Question-toggle-closed, .Question-toggle-open").toggle();
        });
    });

});
