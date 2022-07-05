$(() => {
    $(document).scroll(function () {
        var $nav = $(".navbar");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
});

$("#hamburgerIcon").on("click", () => {
    document.getElementById("navbarCenter").classList.toggle("show");
});

$(window).resize(() => {
    if ($(window).width >= 767) {
        document.getElementById("navbarCenter").classList.add("show");
    }
})