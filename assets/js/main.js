! function(a) {
    "use strict";
    var e = a(window);
    a("onload", (function() {
        var a = $(".grid", (function() {
            a.masonry({
                itemSelector: ".grid-item",
                percentPosition: !0
            })
        }))
    })),a(".slider-fade1").on("changed.owl.carousel", (function(e) {
        e = e.item.index - 2, a(".h5").removeClass("animated fadeInUp"), a(".title").removeClass("animated fadeInUp"), a("p").removeClass("animated fadeInUp"), a("a").removeClass("animated fadeInUp"), a(".owl-item").not(".cloned").eq(e).find(".h5").addClass("animated fadeInUp"), a(".owl-item").not(".cloned").eq(e).find(".title").addClass("animated fadeInUp"), a(".owl-item").not(".cloned").eq(e).find("p").addClass("animated fadeInUp"), a(".owl-item").not(".cloned").eq(e).find("a").addClass("animated fadeInUp")
    })),
    e.on("scroll", (function() {
        var o = e.scrollTop(),
            n = a(".navbar-brand img"),
            t = a(".navbar-brand.logodefault img"),
            s = a(".navbar-brand.dark img");
        o <= 50 ? (a("header").removeClass("scrollHeader").addClass("fixedHeader"), n.attr("src", "images/logo.png")) : (a("header").removeClass("fixedHeader").addClass("scrollHeader"), n.attr("src", "images/logo.png")), t.attr("src", "images/logo.png"), s.attr("src", "images/logo.png")
    })), e.on("scroll", (function() {
        500 < a(this).scrollTop() ? a(".scroll-to-top").fadeIn(400) : a(".scroll-to-top").fadeOut(400)
    })), a(".scroll-to-top").on("click",{passive: true}, (function(e) {
        e.preventDefault(), a("html, body").animate({
            scrollTop: 0
        }, 600)
    })), a(".bg-img").each((function(e) {
        a(this).attr("data-background") && a(this).css("background-image", "url(" + a(this).data("background") + ")")
    })), new WOW({
        boxClass: "wow",
        animateClass: "animated",
        offset: 0,
        mobile: !1,
        live: !0
    }).init(), a(".slider-fade1").owlCarousel({
        items: 1,
        loop: !0,
        dots: !0,
        margin: 0,
        nav: !1,
        navText: ["<i class='fa-solid fa-chevron-left'></i>", "<i class='fa-solid fa-chevron-right'></i>"],
        autoplay: false,
        smartSpeed: 1500,
        mouseDrag: !1,
        animateIn: "fadeIn",
        animateOut: "fadeOut",
        responsive: {
            992: {
                nav: !0,
                dots: !1
            }
        }
    }), a(".testimonial-slider").owlCarousel({
        loop: !0,
        responsiveClass: !0,
        autoplay: !0,
        autoplayTimeout: 5e3,
        smartSpeed: 1500,
        nav: !1,
        dots: !0,
        center: !1,
        margin: 10,
        responsive: {
            0: {
                items: 1,
                margin: 0
            },
            768: {
                items: 2
            },
            1201: {
                items: 3
            }
        }
    })
}(jQuery);