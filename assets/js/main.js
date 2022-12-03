jQuery(
    (function ($) {
        "use strict";
        $(window).on("scroll", function () {
            if ($(this).scrollTop() > 30) {
                $(".navbar-area").addClass("is-sticky");
            } else {
                $(".navbar-area").removeClass("is-sticky");
            }
        });
        jQuery(".mean-menu").meanmenu({ meanScreenWidth: "1199" });
        $(".others-option-for-responsive .dot-menu").on("click", function () {
            $(".others-option-for-responsive .container .container").toggleClass("active");
        });
        $(".navbar-nav .search-box").on("click", function () {
            $(".search-overlay").toggleClass("search-overlay-active");
        });
        $(".search-overlay-close").on("click", function () {
            $(".search-overlay").removeClass("search-overlay-active");
        });
        $(".others-options .search-box").on("click", function () {
            $(".search-overlay").toggleClass("search-overlay-active");
        });
        $(".search-overlay-close").on("click", function () {
            $(".search-overlay").removeClass("search-overlay-active");
        });
        $(".main-banner-area").mousemove(function (e) {
            var wx = $(window).width();
            var wy = $(window).height();
            var x = e.pageX - this.offsetLeft;
            var y = e.pageY - this.offsetTop;
            var newx = x - wx / 2;
            var newy = y - wy / 2;
            $(".main-banner-content, .main-banner-image, .banner-image-shape-1, .banner-image-shape-2, .banner-fun-fact-item").each(function () {
                var speed = $(this).attr("data-speed");
                if ($(this).attr("data-revert")) speed *= -0.4;
                TweenMax.to($(this), 1, { x: 1 - newx * speed, y: 1 - newy * speed });
            });
        });
        $(".main-banner-area-with-years").mousemove(function (e) {
            var wx = $(window).width();
            var wy = $(window).height();
            var x = e.pageX - this.offsetLeft;
            var y = e.pageY - this.offsetTop;
            var newx = x - wx / 2;
            var newy = y - wy / 2;
            $(".main-banner-years-content, .main-banner-years-image, .banner-image-shape-1, .banner-image-shape-2, .main-banner-shape-1").each(function () {
                var speed = $(this).attr("data-speed");
                if ($(this).attr("data-revert")) speed *= -0.4;
                TweenMax.to($(this), 1, { x: 1 - newx * speed, y: 1 - newy * speed });
            });
        });
        $(".main-banner-area-wrap").mousemove(function (e) {
            var wx = $(window).width();
            var wy = $(window).height();
            var x = e.pageX - this.offsetLeft;
            var y = e.pageY - this.offsetTop;
            var newx = x - wx / 2;
            var newy = y - wy / 2;
            $(".main-banner-wrap-content, .main-banner-wrap-image, .banner-image-shape-1, .banner-image-shape-2, .banner-image-shape-3, .banner-image-shape-4, .banner-funfact-box").each(function () {
                var speed = $(this).attr("data-speed");
                if ($(this).attr("data-revert")) speed *= -0.4;
                TweenMax.to($(this), 1, { x: 1 - newx * speed, y: 1 - newy * speed });
            });
        });
        $(".about-area").mousemove(function (e) {
            var wx = $(window).width();
            var wy = $(window).height();
            var x = e.pageX - this.offsetLeft;
            var y = e.pageY - this.offsetTop;
            var newx = x - wx / 2;
            var newy = y - wy / 2;
            $(".about-content, .about-image, .about-image-shape-1, .about-image-shape-2, .about-image-shape-3, .about-image-shape-4, .about-image-shape-5, .about-shape-1, .about-shape-2, .about-shape-6").each(function () {
                var speed = $(this).attr("data-speed");
                if ($(this).attr("data-revert")) speed *= -0.4;
                TweenMax.to($(this), 1, { x: 1 - newx * speed, y: 1 - newy * speed });
            });
        });
        $(".about-area-with-bg-color").mousemove(function (e) {
            var wx = $(window).width();
            var wy = $(window).height();
            var x = e.pageX - this.offsetLeft;
            var y = e.pageY - this.offsetTop;
            var newx = x - wx / 2;
            var newy = y - wy / 2;
            $(".about-image-wrap, .video-view, .about-content-wrap, .about-shape-3, .about-shape-4, .about-shape-5").each(function () {
                var speed = $(this).attr("data-speed");
                if ($(this).attr("data-revert")) speed *= -0.4;
                TweenMax.to($(this), 1, { x: 1 - newx * speed, y: 1 - newy * speed });
            });
        });
        $(".video-area").mousemove(function (e) {
            var wx = $(window).width();
            var wy = $(window).height();
            var x = e.pageX - this.offsetLeft;
            var y = e.pageY - this.offsetTop;
            var newx = x - wx / 2;
            var newy = y - wy / 2;
            $(".video-view-content").each(function () {
                var speed = $(this).attr("data-speed");
                if ($(this).attr("data-revert")) speed *= -0.4;
                TweenMax.to($(this), 1, { x: 1 - newx * speed, y: 1 - newy * speed });
            });
        });
        $(".newsletter-area").mousemove(function (e) {
            var wx = $(window).width();
            var wy = $(window).height();
            var x = e.pageX - this.offsetLeft;
            var y = e.pageY - this.offsetTop;
            var newx = x - wx / 2;
            var newy = y - wy / 2;
            $(".newsletter-shape-1, .newsletter-shape-2, .newsletter-shape-3").each(function () {
                var speed = $(this).attr("data-speed");
                if ($(this).attr("data-revert")) speed *= -0.4;
                TweenMax.to($(this), 1, { x: 1 - newx * speed, y: 1 - newy * speed });
            });
        });
        $(".choose-us-area").mousemove(function (e) {
            var wx = $(window).width();
            var wy = $(window).height();
            var x = e.pageX - this.offsetLeft;
            var y = e.pageY - this.offsetTop;
            var newx = x - wx / 2;
            var newy = y - wy / 2;
            $(".choose-us-content, .choose-us-image, .choose-image-shape-1, .choose-image-shape-2, .choose-image-shape-3, .choose-image-shape-4, .choose-image-shape-5, .choose-image-shape-6, .choose-image-shape-7, .funfact-card").each(
                function () {
                    var speed = $(this).attr("data-speed");
                    if ($(this).attr("data-revert")) speed *= -0.4;
                    TweenMax.to($(this), 1, { x: 1 - newx * speed, y: 1 - newy * speed });
                }
            );
        });
        $(".testimonials-area").mousemove(function (e) {
            var wx = $(window).width();
            var wy = $(window).height();
            var x = e.pageX - this.offsetLeft;
            var y = e.pageY - this.offsetTop;
            var newx = x - wx / 2;
            var newy = y - wy / 2;
            $(".testimonials-image, .testimonials-box-content, .testimonials-image-shape-1, .testimonials-image-shape-2, .testimonials-content-shape-1, .testimonials-shape-1").each(function () {
                var speed = $(this).attr("data-speed");
                if ($(this).attr("data-revert")) speed *= -0.4;
                TweenMax.to($(this), 1, { x: 1 - newx * speed, y: 1 - newy * speed });
            });
        });
        $(".working-process-area").mousemove(function (e) {
            var wx = $(window).width();
            var wy = $(window).height();
            var x = e.pageX - this.offsetLeft;
            var y = e.pageY - this.offsetTop;
            var newx = x - wx / 2;
            var newy = y - wy / 2;
            $(".working-process-shape-1, .working-process-shape-2").each(function () {
                var speed = $(this).attr("data-speed");
                if ($(this).attr("data-revert")) speed *= -0.4;
                TweenMax.to($(this), 1, { x: 1 - newx * speed, y: 1 - newy * speed });
            });
        });
        $(".footer-area").mousemove(function (e) {
            var wx = $(window).width();
            var wy = $(window).height();
            var x = e.pageX - this.offsetLeft;
            var y = e.pageY - this.offsetTop;
            var newx = x - wx / 2;
            var newy = y - wy / 2;
            $(".footer-shape-1, .footer-shape-2, .widget-shape").each(function () {
                var speed = $(this).attr("data-speed");
                if ($(this).attr("data-revert")) speed *= -0.4;
                TweenMax.to($(this), 1, { x: 1 - newx * speed, y: 1 - newy * speed });
            });
        });
        $(".page-banner-area").mousemove(function (e) {
            var wx = $(window).width();
            var wy = $(window).height();
            var x = e.pageX - this.offsetLeft;
            var y = e.pageY - this.offsetTop;
            var newx = x - wx / 2;
            var newy = y - wy / 2;
            $(".page-banner-shape-1, .page-banner-shape-2, .page-banner-shape-3, .page-banner-shape-4").each(function () {
                var speed = $(this).attr("data-speed");
                if ($(this).attr("data-revert")) speed *= -0.4;
                TweenMax.to($(this), 1, { x: 1 - newx * speed, y: 1 - newy * speed });
            });
        });
        $(".faq-area").mousemove(function (e) {
            var wx = $(window).width();
            var wy = $(window).height();
            var x = e.pageX - this.offsetLeft;
            var y = e.pageY - this.offsetTop;
            var newx = x - wx / 2;
            var newy = y - wy / 2;
            $(".faq-shape-1").each(function () {
                var speed = $(this).attr("data-speed");
                if ($(this).attr("data-revert")) speed *= -0.4;
                TweenMax.to($(this), 1, { x: 1 - newx * speed, y: 1 - newy * speed });
            });
        });
        $(".appointment-area").mousemove(function (e) {
            var wx = $(window).width();
            var wy = $(window).height();
            var x = e.pageX - this.offsetLeft;
            var y = e.pageY - this.offsetTop;
            var newx = x - wx / 2;
            var newy = y - wy / 2;
            $(".appointment-form-wrap, .appointment-form-image, .appointment-image-shape-1, .appointment-image-shape-2, .appointment-image-shape-3, .appointment-image-shape-4").each(function () {
                var speed = $(this).attr("data-speed");
                if ($(this).attr("data-revert")) speed *= -0.4;
                TweenMax.to($(this), 1, { x: 1 - newx * speed, y: 1 - newy * speed });
            });
        });
        $(".contact-information-area").mousemove(function (e) {
            var wx = $(window).width();
            var wy = $(window).height();
            var x = e.pageX - this.offsetLeft;
            var y = e.pageY - this.offsetTop;
            var newx = x - wx / 2;
            var newy = y - wy / 2;
            $(".contact-information-shape-1").each(function () {
                var speed = $(this).attr("data-speed");
                if ($(this).attr("data-revert")) speed *= -0.4;
                TweenMax.to($(this), 1, { x: 1 - newx * speed, y: 1 - newy * speed });
            });
        });
        $(".portfolio-slides").owlCarousel({
            loop: true,
            nav: false,
            dots: false,
            autoHeight: true,
            smartSpeed: 500,
            margin: 20,
            autoplayHoverPause: true,
            autoplay: true,
            responsive: { 0: { items: 1 }, 768: { items: 2 }, 1200: { items: 4 } },
        });
        $(".testimonials-slides").owlCarousel({
            loop: true,
            nav: false,
            dots: true,
            smartSpeed: 500,
            margin: 25,
            autoplayHoverPause: true,
            autoplay: true,
            responsive: { 0: { items: 1 }, 576: { items: 1 }, 768: { items: 2 }, 1200: { items: 3 } },
        });
        $(".testimonials-slides-two1").owlCarousel({
            loop: true,
            nav: false,
            dots: true,
            smartSpeed: 500,
            margin: 25,
            autoplayHoverPause: true,
            autoplay: true,
            responsive: { 0: { items: 1 }, 576: { items: 1 }, 768: { items: 1 }, 1200: { items: 1 } },
        });
        $(".testimonials-slides-two2").owlCarousel({
            loop: true,
            nav: false,
            dots: true,
            smartSpeed: 500,
            margin: 25,
            autoplayHoverPause: true,
            autoplay: true,
            responsive: { 0: { items: 1 }, 576: { items: 1 }, 768: { items: 1 }, 1200: { items: 1 } },
        });
        $(".testimonials-slides-two3").owlCarousel({
            loop: true,
            nav: false,
            dots: true,
            smartSpeed: 500,
            margin: 25,
            autoplayHoverPause: true,
            autoplay: true,
            responsive: { 0: { items: 1 }, 576: { items: 1 }, 768: { items: 1 }, 1200: { items: 1 } },
        });
        $(".testimonials-slides-two4").owlCarousel({
            loop: true,
            nav: false,
            dots: true,
            smartSpeed: 500,
            margin: 25,
            autoplayHoverPause: true,
            autoplay: true,
            responsive: { 0: { items: 1 }, 576: { items: 1 }, 768: { items: 1 }, 1200: { items: 1 } },
        });
        $(".testimonials-slides-three").owlCarousel({
            loop: true,
            nav: true,
            dots: true,
            smartSpeed: 500,
            margin: 25,
            autoplayHoverPause: true,
            autoplay: true,
            navText: ["<i class='ri-arrow-left-line'></i>", "<i class='ri-arrow-right-line'></i>"],
            responsive: { 0: { items: 1 }, 576: { items: 1 }, 768: { items: 1 }, 1200: { items: 1 } },
        });
        $(".partner-slides").owlCarousel({
            loop: true,
            nav: false,
            dots: false,
            autoHeight: true,
            smartSpeed: 500,
            margin: 30,
            autoplayHoverPause: true,
            autoplay: true,
            responsive: { 0: { items: 2 }, 768: { items: 3 }, 1200: { items: 6 } },
        });
        $(".tab ul.tabs").addClass("active").find("> li:eq(0)").addClass("current");
        $(".tab ul.tabs li").on("click", function (g) {
            var tab = $(this).closest(".tab"),
                index = $(this).closest("li").index();
            tab.find("ul.tabs > li").removeClass("current");
            $(this).closest("li").addClass("current");
            tab.find(".tab_content")
                .find("div.tabs_item")
                .not("div.tabs_item:eq(" + index + ")")
                .slideUp();
            tab.find(".tab_content")
                .find("div.tabs_item:eq(" + index + ")")
                .slideDown();
            g.preventDefault();
        });
        $(".newsletter-form")
            .validator()
            .on("submit", function (event) {
                if (event.isDefaultPrevented()) {
                    formErrorSub();
                    submitMSGSub(false, "Please enter your email correctly.");
                } else {
                    event.preventDefault();
                }
            });
        function callbackFunction(resp) {
            if (resp.result === "success") {
                formSuccessSub();
            } else {
                formErrorSub();
            }
        }
        function formSuccessSub() {
            $(".newsletter-form")[0].reset();
            submitMSGSub(true, "Thank you for subscribing!");
            setTimeout(function () {
                $("#validator-newsletter").addClass("hide");
            }, 4000);
        }
        function formErrorSub() {
            $(".newsletter-form").addClass("animated shake");
            setTimeout(function () {
                $(".newsletter-form").removeClass("animated shake");
            }, 1000);
        }
        function submitMSGSub(valid, msg) {
            if (valid) {
                var msgClasses = "validation-success";
            } else {
                var msgClasses = "validation-danger";
            }
            $("#validator-newsletter").removeClass().addClass(msgClasses).text(msg);
        }
        $(".newsletter-form").ajaxChimp({ url: "https://envytheme.us20.list-manage.com/subscribe/post?u=60e1ffe2e8a68ce1204cd39a5&amp;id=42d6d188d9", callback: callbackFunction });
        function makeTimer() {
            var endTime = new Date("September 20, 2025 17:00:00 PDT");
            var endTime = Date.parse(endTime) / 1000;
            var now = new Date();
            var now = Date.parse(now) / 1000;
            var timeLeft = endTime - now;
            var days = Math.floor(timeLeft / 86400);
            var hours = Math.floor((timeLeft - days * 86400) / 3600);
            var minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
            var seconds = Math.floor(timeLeft - days * 86400 - hours * 3600 - minutes * 60);
            if (hours < "10") {
                hours = "0" + hours;
            }
            if (minutes < "10") {
                minutes = "0" + minutes;
            }
            if (seconds < "10") {
                seconds = "0" + seconds;
            }
            $("#days").html(days + "<span>Days</span>");
            $("#hours").html(hours + "<span>Hours</span>");
            $("#minutes").html(minutes + "<span>Minutes</span>");
            $("#seconds").html(seconds + "<span>Seconds</span>");
        }
        setInterval(function () {
            makeTimer();
        }, 0);
        $(".input-counter").each(function () {
            var spinner = jQuery(this),
                input = spinner.find('input[type="text"]'),
                btnUp = spinner.find(".plus-btn"),
                btnDown = spinner.find(".minus-btn"),
                min = input.attr("min"),
                max = input.attr("max");
            btnUp.on("click", function () {
                var oldValue = parseFloat(input.val());
                if (oldValue >= max) {
                    var newVal = oldValue;
                } else {
                    var newVal = oldValue + 1;
                }
                spinner.find("input").val(newVal);
                spinner.find("input").trigger("change");
            });
            btnDown.on("click", function () {
                var oldValue = parseFloat(input.val());
                if (oldValue <= min) {
                    var newVal = oldValue;
                } else {
                    var newVal = oldValue - 1;
                }
                spinner.find("input").val(newVal);
                spinner.find("input").trigger("change");
            });
        });
        $(".popup-youtube").magnificPopup({ disableOn: 320, type: "iframe", mainClass: "mfp-fade", removalDelay: 160, preloader: false, fixedContentPos: false });
        $("#datepicker").datepicker();
        $(".selectize-filter").selectize({ create: true, sortField: "text" });
        $(".odometer").appear(function (e) {
            var odo = $(".odometer");
            odo.each(function () {
                var countNumber = $(this).attr("data-count");
                $(this).html(countNumber);
            });
        });
        AOS.init();
        $(".blog-more-item").slice(0, 2).show();
        $("#loadmore").on("click", function (e) {
            e.preventDefault();
            $(".blog-more-item:hidden").slice(0, 2).slideDown();
        });
        if ($(".wow").length) {
            var wow = new WOW({ mobile: false });
            wow.init();
        }
        $(window).on("scroll", function () {
            var scrolled = $(window).scrollTop();
            if (scrolled > 600) $(".go-top").addClass("active");
            if (scrolled < 600) $(".go-top").removeClass("active");
        });
        $(".go-top").on("click", function () {
            $("html, body").animate({ scrollTop: "0" }, 500);
        });
        jQuery(window).on("load", function () {
            jQuery(".preloader").fadeOut(500);
        });
    })(jQuery)
);
