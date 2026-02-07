(function ($) {
  "use strict";

  // ==========================================
  //      Start Document Ready function
  // ==========================================
  $(document).ready(function () {
    // ============== Mobile Nav Menu Dropdown Js Start =======================
    function toggleSubMenu() {
      if ($(window).width() <= 991) {
        $(".has-submenu")
          .off("click")
          .on("click", function () {
            $(this)
              .toggleClass("active")
              .siblings(".has-submenu")
              .removeClass("active")
              .find(".nav-submenu")
              .slideUp(300);
            $(this).find(".nav-submenu").stop(true, true).slideToggle(300);
          });
      } else {
        $(".has-submenu").off("click");
      }
    }

    toggleSubMenu();
    $(window).resize(toggleSubMenu);
    // ============== Mobile Nav Menu Dropdown Js End =======================

    // ===================== Scroll Back to Top Js Start ======================
    var progressPath = document.querySelector(".progress-wrap path");
    var pathLength = progressPath.getTotalLength();
    progressPath.style.transition = progressPath.style.WebkitTransition =
      "none";
    progressPath.style.strokeDasharray = pathLength + " " + pathLength;
    progressPath.style.strokeDashoffset = pathLength;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = progressPath.style.WebkitTransition =
      "stroke-dashoffset 10ms linear";
    var updateProgress = function () {
      var scroll = $(window).scrollTop();
      var height = $(document).height() - $(window).height();
      var progress = pathLength - (scroll * pathLength) / height;
      progressPath.style.strokeDashoffset = progress;
    };
    updateProgress();
    $(window).scroll(updateProgress);
    var offset = 50;
    var duration = 550;
    jQuery(window).on("scroll", function () {
      if (jQuery(this).scrollTop() > offset) {
        jQuery(".progress-wrap").addClass("active-progress");
      } else {
        jQuery(".progress-wrap").removeClass("active-progress");
      }
    });
    jQuery(".progress-wrap").on("click", function (event) {
      event.preventDefault();
      jQuery("html, body").animate({ scrollTop: 0 }, duration);
      return false;
    });
    // ===================== Scroll Back to Top Js End ======================

    // ========================== add active class to navbar menu current page Js Start =====================
    function dynamicActiveMenuClass(selector) {
      let FileName = window.location.pathname.split("/").reverse()[0];

      // If we are at the root path ("/" or no file name), keep the activePage class on the Home item
      if (FileName === "" || FileName === "index.html") {
        // Keep the activePage class on the Home link
        selector
          .find("li.nav-menu__item.has-submenu")
          .eq(0)
          .addClass("activePage");
      } else {
        // Remove activePage class from all items first
        selector.find("li").removeClass("activePage");

        // Add activePage class to the correct li based on the current URL
        selector.find("li").each(function () {
          let anchor = $(this).find("a");
          if ($(anchor).attr("href") == FileName) {
            $(this).addClass("activePage");
          }
        });

        // If any li has activePage element, add class to its parent li
        selector.children("li").each(function () {
          if ($(this).find(".activePage").length) {
            $(this).addClass("activePage");
          }
        });
      }
    }

    if ($("ul").length) {
      dynamicActiveMenuClass($("ul"));
    }
    // ========================== add active class to navbar menu current page Js End =====================

    // ================================ Floating Progress js start =================================
    const progressContainers = document.querySelectorAll(".progress-container");

    function setPercentage(progressContainer) {
      const percentage =
        progressContainer.getAttribute("data-percentage") + "%";

      const progressEl = progressContainer.querySelector(".progress");
      const percentageEl = progressContainer.querySelector(".percentage");

      progressEl.style.width = percentage;
      percentageEl.innerText = percentage;
      percentageEl.style.insetInlineStart = percentage;
    }

    // Intersection Observer to trigger progress animation when section is in view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Element is in view, start the progress animation
            const progressContainer = entry.target;
            setPercentage(progressContainer);
            progressContainer
              .querySelector(".progress")
              .classList.remove("active");
            progressContainer
              .querySelector(".percentage")
              .classList.remove("active");
            observer.unobserve(progressContainer); // Stop observing once animation is triggered
          }
        });
      },
      {
        threshold: 0.5, // Adjust this value as needed (0.5 means half the section needs to be visible)
      },
    );

    // Start observing all progress containers
    progressContainers.forEach((progressContainer) => {
      observer.observe(progressContainer);
    });
    // ================================ Floating Progress js End =================================

    // ==================== teacher js start =======================
    var studentSwiperSlider = new Swiper(".student-swiper-slider", {
      autoplay: false,
      speed: 1500,
      grabCursor: true,
      spaceBetween: 30,
      loop: true,
      slidesPerView: 1,
      breakpoints: {
        300: {
          slidesPerView: 1,
        },
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
    // ==================== teacher js end =======================

    // ============================ student js start =======================
    var studentTwoSlider = new Swiper(".student-two-slider", {
      spaceBetween: 30,
      loop: true,
      speed: 1500,
      slidesPerView: 3,
      breakpoints: {
        300: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 3,
        },
      },
      navigation: {
        nextEl: "#student-two-button-next",
        prevEl: "#student-two-button-prev",
      },
    });
    // ============================ student js end =======================
    // ============================ student js start =======================
    var popularCategorySlider = new Swiper(".popular-category-slider", {
      spaceBetween: 12,
      loop: true,
      speed: 1500,
      slidesPerView: 1,
      breakpoints: {
        300: {
          slidesPerView: 2,
        },
        400: {
          slidesPerView: 2,
        },
        576: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        992: {
          slidesPerView: 4,
        },
        1200: {
          slidesPerView: 5,
        },
      },
      pagination: {
        el: ".popular-category-pagination",
        clickable: true,
      },
    });
    // ============================ student js end =======================

    // ======================= student review js start =======================
    var studentReviewThreeSlider = new Swiper(".student-review-three-slider", {
      spaceBetween: 30,
      loop: true,
      speed: 1500,
      slidesPerView: 2,
      breakpoints: {
        300: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
      },
      navigation: {
        nextEl: "#blog-two-button-next",
        prevEl: "#blog-two-button-prev",
      },
    });
    // ======================= student review js end =======================

    // ============================ blog js start =======================
    var blogTwoSlider = new Swiper(".blog-two-slider", {
      spaceBetween: 30,
      loop: true,
      speed: 1500,
      slidesPerView: 3,
      breakpoints: {
        300: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1199: {
          slidesPerView: 3,
        },
      },
      navigation: {
        nextEl: "#blog-two-button-next",
        prevEl: "#blog-two-button-prev",
      },
    });
    // ============================ blog js end =======================

    // ======================== brand js start =========================
    var brandSlider = new Swiper(".brand-slider", {
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
      autoplay: true,
      speed: 1500,
      grabCursor: true,
      spaceBetween: 20,
      loop: true,
      slidesPerView: 6,
      breakpoints: {
        300: {
          slidesPerView: 2,
        },
        575: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 4,
        },
        992: {
          slidesPerView: 5,
        },
        1200: {
          slidesPerView: 6,
        },
      },
    });

    // ======================== brand js end =========================

    // ======================== brand js start =========================
    var brandSlider = new Swiper(".footer-three-slider", {
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
      autoplay: true,
      speed: 1500,
      grabCursor: true,
      spaceBetween: 20,
      loop: true,
      slidesPerView: 9,
      breakpoints: {
        300: {
          slidesPerView: 2,
        },
        575: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 4,
        },
        992: {
          slidesPerView: 5,
        },
        1200: {
          slidesPerView: 6,
        },
        1300: {
          slidesPerView: 7,
        },
        1400: {
          slidesPerView: 8,
        },
        1500: {
          slidesPerView: 9,
        },
      },
    });

    // ======================== brand js end =========================

    // ===================== marketing js start ======================
    var marketingSlider = new Swiper(".marketing-slider", {
      slidesPerView: 1,
      loop: true,
      speed: 1500,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: "#button-next",
        prevEl: "#button-prev",
      },
    });
    // $(".bookmark-button").on ("click", function () {
    //   $(this).toggleClass("active");
    // })
    // ===================== marketing js end ======================

    // =================== testimonial js start =====================
    var testimonialSlider = new Swiper(".testimonial-slider", {
      slidesPerView: 1,
      loop: true,
      speed: 1500,
      autoplay: true,
      autoplay: {
        delay: 4000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".button-next",
        prevEl: ".button-prev",
      },
    });
    // =================== testimonial js end =====================

    // =================== brand slider four js start ===================
    var brandSliderFour = new Swiper(".brand-slider__four", {
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
      autoplay: true,
      speed: 1500,
      grabCursor: true,
      spaceBetween: 20,
      loop: true,
      slidesPerView: 5,
      breakpoints: {
        300: {
          slidesPerView: 2,
        },
        575: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 3,
        },
        992: {
          slidesPerView: 4,
        },
        1200: {
          slidesPerView: 5,
        },
      },
    });
    // =================== brand slider four js end ===================

    // =================== design slider four js start ========================
    var designCoursesSlider = new Swiper(".design-courses-slider", {
      slidesPerView: 3,
      loop: true,
      autoplay: true,
      speed: 1500,
      grabCursor: true,
      spaceBetween: 20,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: "#design-courses-button-next",
        prevEl: "#design-courses-button-prev",
      },
      breakpoints: {
        300: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 1,
        },
        992: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 3,
        },
      },
    });
    // =================== design slider four js end ========================

    // ==================== student slider four js start ======================
    var studentFourSlider = new Swiper(".student-four-slider", {
      slidesPerView: 2,
      loop: true,
      autoplay: true,
      speed: 1500,
      grabCursor: true,
      spaceBetween: 30,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: "#student-slide__next",
        prevEl: "#student-slide__prev",
      },
      breakpoints: {
        300: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 1,
        },
        1199: {
          slidesPerView: 2,
        },
      },
    });
    // ==================== student slider four js end ======================

    // ========================= exam preparation five js start ========================
    var examPreparationFiveSlider = new Swiper(
      ".exam-preparation-five-slider",
      {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        autoplay: true,
        speed: 1500,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
        breakpoints: {
          300: {
            slidesPerView: 1,
          },
          524: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1199: {
            slidesPerView: 3,
          },
        },
      },
    );
    // ========================= exam preparation five js end ========================

    // ======================== course catagory five js start ===========================
    var catagoryFiveSlider = new Swiper(".catagory-five-slider", {
      slidesPerView: 7,
      spaceBetween: 20,
      autoplay: true,
      speed: 1500,
      loop: true,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: "#catagory-five-button-next",
        prevEl: "#catagory-five-button-prev",
      },
      breakpoints: {
        300: {
          slidesPerView: 2,
        },
        624: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 4,
        },
        992: {
          slidesPerView: 5,
        },
        1199: {
          slidesPerView: 5,
        },
        1299: {
          slidesPerView: 6,
        },
        1399: {
          slidesPerView: 7,
        },
      },
    });
    // ======================== course catagory five js end ===========================

    // ====================== contact width js start ===============================
    var contactWidthSlider = new Swiper(".contact-width-slider", {
      slidesPerView: 1,
      loop: true,
      autoplay: true,
      speed: 1500,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: "#contact-button-next",
        prevEl: "#contact-button-prev",
      },
    });
    // ====================== contact width js end ===============================

    // ========================= testimonial five js start ==========================
    var testimonialFiveSlider = new Swiper(".testimonial-five-slider", {
      slidesPerView: 4,
      spaceBetween: 20,
      loop: true,
      autoplay: true,
      speed: 1500,
      autoplay: {
        delay: 0.1,
        disableOnInteraction: false,
      },
      breakpoints: {
        300: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 2,
        },
        1199: {
          slidesPerView: 3,
        },
        1399: {
          slidesPerView: 4,
        },
      },
    });

    var testimonialFiveSliderTwo = new Swiper(".testimonial-five-slider-two", {
      slidesPerView: 4,
      spaceBetween: 20,
      loop: true,
      autoplay: true,
      speed: 1500,
      autoplay: {
        delay: 0.1,
        disableOnInteraction: false,
      },
      breakpoints: {
        300: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 2,
        },
        1199: {
          slidesPerView: 3,
        },
        1399: {
          slidesPerView: 4,
        },
      },
    });
    // ========================= testimonial five js end ==========================

    // =================== footer js start ======================
    var footerBottomSlider = new Swiper(".footer-bottom__slider", {
      slidesPerView: 10,
      loop: true,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
      breakpoints: {
        300: {
          slidesPerView: 1,
        },
        370: {
          slidesPerView: 2,
        },
        550: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 4,
        },
        992: {
          slidesPerView: 5,
        },
        1200: {
          slidesPerView: 6,
        },
        1350: {
          slidesPerView: 7,
        },
        1450: {
          slidesPerView: 8,
        },
        1599: {
          slidesPerView: 9,
        },
        1799: {
          slidesPerView: 10,
        },
      },
    });
    // =================== footer js end ======================

    // =================== slider three js start ===================
    var swiperSliderThree = new Swiper(".swiper-slider__three", {
      slidesPerView: 1,
      loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: ".slider-three__button-next",
        prevEl: ".slider-three__button-prev",
      },
    });
    // =================== slider three js end ===================

    // ========================= magnific Popup Js Start =====================
    $(".play-button").magnificPopup({
      type: "iframe",
      removalDelay: 300,
      mainClass: "mfp-fade",
    });
    $(".play-button-2").magnificPopup({
      type: "iframe",
      removalDelay: 300,
      mainClass: "mfp-fade",
    });
    // ========================= magnific Popup Js End =====================

    // ====================== Marquee Js Start ========================
    if ($(".marquee_left").length) {
      $(".marquee_left").marquee({
        speed: 50,
        gap: 0,
        delayBeforeStart: 0,
        direction: $("html").attr("dir") === "rtl" ? "right" : "left",
        duplicated: true,
        pauseOnHover: true,
        startVisible: true,
        direction: "left",
      });
    }
    // ====================== Marquee Js End ========================

    // =========================  Search Bar 9 Js Start ==============
    $(".open-search").on("click", function () {
      $(".search_popup").addClass("search-opened");
      $(".search-popup-overlay").addClass("search-popup-overlay-open");
    });
    $(".search_close_btn").on("click", function () {
      $(".search_popup").removeClass("search-opened");
      $(".search-popup-overlay").removeClass("search-popup-overlay-open");
    });
    $(".search-popup-overlay").on("click", function () {
      $(".search_popup").removeClass("search-opened");
      $(this).removeClass("search-popup-overlay-open");
    });
    // =========================  Search Bar 9 Js End ==============

    // ======================== instructor js start ========================
    $(".show-social-icon-button").on("click", function () {
      $(this).toggleClass("active");
      $(this).next(".show-socials-icons").toggleClass("active");
    });
    // ======================== instructor js end ========================

    // ======================== course filter js start ============================
    $(".course-nave-menu").on("click", function () {
      $(this).siblings(".course-nave-menu__item").slideToggle("active");
    });
    // ======================== course filter js end ============================

    // ======================== course filter js start ============================
    $(".course-toggle__button").on("click", function () {
      $(".course-toggle-item").toggleClass("active");
    });
    $(".course-crose-button").on("click", function () {
      $(".course-toggle-item").removeClass("active");
    });
    // ======================== course filter js end ============================

    // ========================== Settings Panel Js Start =====================
    $(".settings-button").on("click", function () {
      $(".settings-panel").toggleClass("active");
      $(this).toggleClass("active");
    });

    $(document).on(
      "click",
      ".settings-panel__buttons .settings-panel__button",
      function () {
        $(this).siblings().removeClass("active");
        $(this).addClass("active");
      },
    );

    // Cursor start
    $(".cursor-animate").on("click", function () {
      $("body").removeClass("remove-animate-cursor");
    });

    $(".cursor-default").on("click", function () {
      $("body").addClass("remove-animate-cursor");
    });
    // Cursor end

    // Direction start
    $(".direction-ltr").on("click", function () {
      $("html").attr("dir", "ltr");
    });

    $(".direction-rtl").on("click", function () {
      $("html").attr("dir", "rtl");
    });
    // Direction end
    // ========================== Settings Panel Js End =====================

    // ********************* Toast Notification Js start *********************
    function toastMessage(messageType, messageTitle, messageText, messageIcon) {
      let $toastContainer = $("#toast-container");

      let $toast = $("<div>", {
        class: `toast-message ${messageType}`,
        html: `
      <div class="toast-message__content">
        <span class="toast-message__icon">
          <i class="${messageIcon}"></i>
        </span>
        <div class="flex-grow-1">
          <div class="d-flex align-items-start justify-content-between mb-1">
            <h6 class="toast-message__title">${messageTitle}</h6>
            <button type="button" class="toast-message__close">
              <i class="ph-bold ph-x"></i>
            </button>
          </div>
          <span class="toast-message__text">${messageText}</span>
        </div>
      </div>
      <div class="progress__bar"></div>
    `,
      });

      $toastContainer.append($toast);

      setTimeout(() => {
        $toast.addClass("active");
      }, 50);

      let totalDuration = 3500;
      let startTime = Date.now();
      let remainingTime = totalDuration;
      let toastTimeout = setTimeout(hideToast, remainingTime);

      function hideToast() {
        $toast.removeClass("active");
        setTimeout(() => {
          $toast.remove();
        }, 500);
      }

      // Remove Toast on Close Button Click
      $toast.find(".toast-message__close").on("click", function () {
        $toast.removeClass("active");
        setTimeout(() => {
          $toast.remove();
        }, 500);
      });

      // Pause Timeout on Hover
      $toast.on("mouseenter", function () {
        remainingTime -= Date.now() - startTime;
        clearTimeout(toastTimeout);
      });

      // Resume Timeout on Mouse Leave
      $toast.on("mouseleave", function () {
        startTime = Date.now();
        toastTimeout = setTimeout(hideToast, remainingTime);
      });
    }
    // ********************* Toast Notification Js End *********************

    // ========================= Delete Item Js start ===================
    $(document).on("click", ".delete-button", function () {
      $(this).closest(".delete-item").addClass("d-none");

      toastMessage(
        "danger",
        "Deleted",
        "You deleted successfully!",
        "ph-bold ph-trash",
      );
    });
    // ========================= Delete Item Js End ===================

    // ========================= Form Submit Js Start ===================
    $(document).on("submit", ".form-submit", function (e) {
      e.preventDefault();

      $("input").val("");

      $("textarea").val("");

      toastMessage(
        "success",
        "Success",
        "Form submitted successfully!",
        "ph-fill ph-check-circle",
      );
    });
    // ========================= Form Submit Js End ===================

    // ================== Password Show Hide Js Start ==========
    $(".toggle-password").on("click", function () {
      $(this).toggleClass("active");
      var input = $($(this).attr("id"));
      if (input.attr("type") == "password") {
        input.attr("type", "text");
        $(this).removeClass("ph-bold ph-eye-slash");
        $(this).addClass("ph-bold ph-eye");
      } else {
        input.attr("type", "password");
        $(this).addClass("ph-bold ph-eye-slash");
      }
    });
    // ========================= Password Show Hide Js End ===========================

    // ========================= AOS Js Start ===========================
    AOS.init({
      once: false,
    });
    // ========================= AOS Js End ===========================

    // ======================== counter up js start ======================
    const counterUp = window.counterUp.default;
    const callback = (entries) => {
      entries.forEach((entry) => {
        const el = entry.target;
        if (entry.isIntersecting && !el.classList.contains("is-visible")) {
          counterUp(el, {
            duration: 3500,
            delay: 16,
          });
          el.classList.add("is-visible");
        }
      });
    };
    const IO = new IntersectionObserver(callback, { threshold: 1 });

    // Banner statistics Counter
    const statisticsCounter = document.querySelectorAll(".counter");
    if (statisticsCounter.length > 0) {
      statisticsCounter.forEach((counterNumber) => {
        IO.observe(counterNumber);
      });
    }

    // performance Count
    const performanceCount = document.querySelectorAll(".counter");
    if (performanceCount.length > 0) {
      performanceCount.forEach((counterNumber) => {
        IO.observe(counterNumber);
      });
    }
    // ======================== counter up js end ======================

    // ========================= Category Js Start ===================
    let categoryButton = document.querySelector(".category-button");
    let categoryDropdown = document.querySelector(".category-dropdown");

    if (categoryButton && categoryDropdown) {
      categoryButton.addEventListener("click", function (event) {
        event.stopPropagation();
        this.classList.toggle("active");
        categoryDropdown.classList.toggle("active");
      });

      categoryDropdown.addEventListener("click", function (event) {
        event.stopPropagation();
        categoryButton.classList.add("active");
        categoryDropdown.classList.add("active");
      });

      document.querySelector("body").addEventListener("click", function () {
        categoryButton.classList.remove("active");
        categoryDropdown.classList.remove("active");
      });
    }
    // ========================= Category Js End ===================

    // ========================= Custom Accordion End ===================
      const $firstAccord = $(".custom-accord").first();
      $firstAccord.find(".custom-accord-btn").addClass("active");
      $firstAccord.find(".custom-accord-content").show();

      $(document).on("click", ".custom-accord-btn", function () {
        const $currentAccord = $(this).closest(".custom-accord");
        const $currentContent = $currentAccord.find(".custom-accord-content");

        // Close others
        $(".custom-accord-content").not($currentContent).slideUp(200);
        $(".custom-accord-btn").not(this).removeClass("active");

        // Toggle current
        $(this).toggleClass("active");
        $currentContent.stop(true, true).slideToggle(200);
      });
    // ========================= Custom Accordion End ===================

     // ========================== Add Attribute For Bg Image Js Start ====================
    $(".background-img").css("background", function () {
      var bg = "url(" + $(this).data("background-image") + ")";
      return bg;
    });
    // ========================== Add Attribute For Bg Image Js End =====================

     // ========================= Animated Radial Progress Js Start ===================
    function animateProgress() {
      $("svg.radial-progress").each(function () {
        // Check if the element is within the viewport
        const elementTop = $(this).offset().top;
        const elementBottom = elementTop + $(this).outerHeight();
        const viewportTop = $(window).scrollTop();
        const viewportBottom = viewportTop + $(window).height();

        if (elementBottom > viewportTop && elementTop < viewportBottom) {
          const percent = $(this).data("percentage");
          const radius = $(this).find("circle.complete").attr("r");
          const circumference = 2 * Math.PI * radius;
          const strokeDashOffset =
            circumference - (percent / 100) * circumference;

          // Animate the circle
          $(this)
            .find("circle.complete")
            .css("stroke-dashoffset", strokeDashOffset);
        }
      });
    }

    // Trigger animation on scroll and page load
    $(window).on("scroll", animateProgress);
    animateProgress(); // Run on page load
    // ========================= Animated Radial Progress Js End ===================

  });
  // ==========================================
  //      End Document Ready function
  // ==========================================

  // ========================= Preloader Js Start =====================
  $(window).on("load", function () {
    $(".loader-mask").fadeOut();
  });
  // ========================= Preloader Js End=====================

  // ========================= Header Sticky Js Start ==============
  $(window).on("scroll", function () {
    if ($(window).scrollTop() >= 260) {
      $(".header").addClass("fixed-header");
    } else {
      $(".header").removeClass("fixed-header");
    }
  });

  $(window).on("scroll", function () {
    if ($(window).scrollTop() >= 260) {
      $(".header-two").addClass("fixed-header");
    } else {
      $(".header-two").removeClass("fixed-header");
    }
  });

  $(window).on("scroll", function () {
    if ($(window).scrollTop() >= 260) {
      $(".header-three").addClass("fixed-header");
    } else {
      $(".header-three").removeClass("fixed-header");
    }
  });
  // ========================= Header Sticky Js End===================
})(jQuery);
