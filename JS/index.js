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

//Start Index Hero Banners
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

//Start Down and Up Arrow
    document.querySelectorAll('.nav-header-bar').forEach(function(navHeaderBar) {
        navHeaderBar.addEventListener('click', function() {
            var navId = this.dataset.navId;
            var navContentsOpen = document.querySelector('.nav-contents[data-nav-id="' + navId + '"]');
            var expandArrows = document.querySelector('.arrowDown[data-nav-id="' + navId + '"]');
            expandArrows.classList.toggle('rotate180');
            navContentsOpen.classList.toggle('open');
        });
    });

//Start navbar options
    document.getElementById('burger-menu').addEventListener('click', function() {
        this.classList.toggle('open');
        var mobileNavPanel = document.getElementById('mobileNavPanel');
        mobileNavPanel.classList.toggle('open');
    });
      
//Start FQS + and -
    $(document).ready(function () {
        $(".FAQS-title-question").click(function () {
            $(this).next(".question-content-answer").toggleClass("content-is-active");
            $(this).find(".question-plus-icon").find(".Question-toggle-closed, .Question-toggle-open").toggle();
        });
    });


//About Infinity Images
    const leftImages = document.querySelectorAll('.infinity-left-image .infinity-photo-content');
    const rightImages = document.querySelectorAll('.infinity-right-image .infinity-photo-content');

    function toggleImages(images) {
      images.forEach((image, index) => {
        setTimeout(() => {
          image.style.opacity = '1';
          setTimeout(() => {
            image.style.opacity = '0';
          }, 3000);
        }, index * 6000); 
      });
    }

    function startImageLoop() {
      setInterval(() => {
        toggleImages(leftImages);
        toggleImages(rightImages);
      }, leftImages.length * 2000);
    }

    startImageLoop();

    //About Readmore Buttons
    document.getElementById('readMore').addEventListener('click', function () {
        const expandHistory = document.querySelector('.expand-history');
        const readMoreBtn = document.querySelector('.read-more-btn');
        const downArrow = document.getElementById('downArrowIcon');
    
        if (expandHistory.style.height === '100%') {
            expandHistory.style.height = '6rem';
            readMoreBtn.style.opacity = '1';
            readMoreBtn.style.display = 'block';
            downArrow.style.display = 'block';
        } else {
            expandHistory.style.height = '100%';
            readMoreBtn.style.opacity = '0';
            readMoreBtn.style.display = 'none';
            downArrow.style.display = 'none';
        }
    });
    

});
