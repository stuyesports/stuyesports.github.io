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

window.onload = () => {
    let video = document.getElementById("headerVideo");
    if (!isMobile) {
        video.setAttribute("autoplay", "");
        video.play();
    } else {
        video.parentNode.removeChild(video);
    }
}

$("#hamburgerIcon").on("click", () => {
    document.getElementById("navbarCenter").classList.toggle("show");
});

if (!isMobile) {
    $(window).resize(() => {
        if ($(window).width >= 767) {
            document.getElementById("navbarCenter").classList.add("show");
        }
    })
}



