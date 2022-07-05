function detectMob() {
    const toMatch = [
        /Android/i,
        /webOS/i,
        /iPhone/i,
        /iPad/i,
        /iPod/i,
        /BlackBerry/i,
        /Windows Phone/i
    ];

    return toMatch.some((toMatchItem) => {
        return navigator.userAgent.match(toMatchItem);
    });
}

const isMobile = detectMob();

$(() => {
    $(document).scroll(function () {
        var $nav = $(".navbar");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
});

$("#hamburgerIcon").on("click", () => {
    document.getElementById("navbarCenter").classList.toggle("show");
});

if (!isMobile) {
    $(window).resize(() => {
        if ($(window).width >= 767) {
            document.getElementById("navbarCenter").classList.add("show");
        }
    })
} else {

}