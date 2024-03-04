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
    const slides = document.querySelectorAll(".heroBannerSlides");
    if (slides.length > 0) {
        let currentSlide = 0;
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
    }




    //Start Down and Up Arrow
    document.querySelectorAll('.nav-header-bar').forEach(function (navHeaderBar) {
        if (navHeaderBar) {
            navHeaderBar.addEventListener('click', function () {
                var navId = this.dataset.navId;
                var navContentsOpen = document.querySelector('.nav-contents[data-nav-id="' + navId + '"]');
                var expandArrows = document.querySelector('.arrowDown[data-nav-id="' + navId + '"]');

                if (expandArrows && navContentsOpen) {
                    expandArrows.classList.toggle('rotate180');
                    navContentsOpen.classList.toggle('open');
                }
            });
        }
    });


    //Start navbar options
    const burgerMenu = document.getElementById('burger-menu');
    if (burgerMenu) {
        burgerMenu.addEventListener('click', function () {
            this.classList.toggle('open');
            const mobileNavPanel = document.getElementById('mobileNavPanel');
            if (mobileNavPanel) {
                mobileNavPanel.classList.toggle('open');
            }
        });
    }

    //Start FQS + and -
    $(document).ready(function () {
        $(".FAQS-title-question").click(function () {
            $(this).next(".question-content-answer").toggleClass("content-is-active");
            $(this).find(".question-plus-icon").find(".Question-toggle-closed, .Question-toggle-open").toggle();
        });
    });

    //About Read more Buttons
    const readMoreButton = document.getElementById('readMore');

    if (readMoreButton) {
        readMoreButton.addEventListener('click', function () {
            const expandHistory = document.querySelector('.expand-history');
            const expandActions = document.querySelector('.expands-action');
            const readMoreBtn = document.querySelector('.read-more-btn');
            const downArrow = document.getElementById('downArrowIcon');

            if (expandHistory) {
                if (expandHistory.style.height === '100%') {
                    expandHistory.style.height = '6rem';
                    readMoreBtn.style.opacity = '1';
                    expandActions.style.opacity = '1';
                    readMoreBtn.style.display = 'block';
                    downArrow.style.display = 'block';
                } else {
                    expandHistory.style.height = '100%';
                    readMoreBtn.style.opacity = '0';
                    expandActions.style.opacity = '0';
                    readMoreBtn.style.display = 'none';
                    downArrow.style.display = 'none';
                }
            }
        });
    }



    // About Us Page Infinity Photo Loop


    let currentLeftSlide = 0;
    let currentRightSlide = 0;
    const slidesLeft = document.querySelectorAll(".infinity-photo-content.left-slide-images");
    const slidesRight = document.querySelectorAll(".infinity-photo-content.right-slide-images");


    if (slidesLeft.length > 0 && slidesRight.length > 0) {
        function showSlide(slides, index) {
            slides.forEach((slide, i) => {
                if (i === index) {
                    slide.style.opacity = 1;
                } else {
                    slide.style.opacity = 0;
                }
            });
        }

        function nextAboutSlides() {
            currentLeftSlide = (currentLeftSlide + 1) % slidesLeft.length;
            showSlide(slidesLeft, currentLeftSlide);

            currentRightSlide = (currentRightSlide + 1) % slidesRight.length;
            showSlide(slidesRight, currentRightSlide);
        }

        showSlide(slidesLeft, currentLeftSlide);

        setTimeout(() => {
            nextAboutSlides();
            setInterval(nextAboutSlides, 2500);
        }, 500);
    }


    // Pagination and All Housing List

    const itemsPerPage = 24;
    const housingGrid = document.getElementById("housingGridList");
    const paginationContainer = document.getElementById("paginationContainer");


    let currentPage = 1;
    const previousPage = document.getElementById("previousPage");
    const nextPage = document.getElementById("nextPage");

    if (housingGrid && paginationContainer && previousPage && nextPage) {
        const housingItems = Array.from(housingGrid.querySelectorAll(".housing-grid-list-items"));
        const totalPages = Math.ceil(housingItems.length / itemsPerPage);
        previousPage.addEventListener("click", function () {
            if (currentPage > 1) {
                displayPage(currentPage - 1);
            }
        });

        nextPage.addEventListener("click", function () {
            const currentPage = getCurrentPage();
            if (currentPage < totalPages) {
                displayPage(currentPage + 1);
            }
        });

        for (let i = 1; i <= totalPages; i++) {
            const pageLink = document.createElement("span");
            pageLink.classList.add("page-link");
            pageLink.textContent = i;
            pageLink.addEventListener("click", function () {
                displayPage(i);
            });
            paginationContainer.insertBefore(pageLink, nextPage);
        }
        displayPage(1);
        function getCurrentPage() {
            const activePageLink = paginationContainer.querySelector(".active");
            return activePageLink ? parseInt(activePageLink.textContent) : 1;
        }

        function displayPage(pageNumber) {
            housingGrid.innerHTML = "";
            const startIndex = (pageNumber - 1) * itemsPerPage;
            const endIndex = pageNumber * itemsPerPage;
            for (let i = startIndex; i < endIndex && i < housingItems.length; i++) {
                const housingItem = housingItems[i].cloneNode(true);
                housingGrid.appendChild(housingItem);
            }
            highlightActivePage(pageNumber);
            currentPage = pageNumber;
        }

        function highlightActivePage(pageNumber) {
            const pageLinks = document.querySelectorAll(".page-link");
            pageLinks.forEach(link => link.classList.remove("active"));
            const activePageLink = pageLinks[pageNumber];
            if (activePageLink) {
                activePageLink.classList.add("active");
            }
        }
    }



    //Smooth Scroll
    var links = document.querySelectorAll('a[href^="#"]');

    links.forEach(function (link) {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            var targetId = this.getAttribute('href').substring(1);
            var targetElement = document.getElementById(targetId);

            if (targetElement) {
                var offsetTop = targetElement.offsetTop;

                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

});



