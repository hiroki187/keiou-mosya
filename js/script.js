$(function() {
    // const index = $('.guide-content').index(this);
    $(".guide-content").hover(function() {
        const desktopindex = $(".guide-content").index(this);
        $(".guide-nav").eq(desktopindex).removeClass("active");
    }, function() {
        const desktopindex = $(".guide-content").index(this);
        $(".guide-nav").eq(desktopindex).addClass("active");
    });

    $(".mobile-guide-content").hover(function() {
        const mobileindex = $(".mobile-guide-content").index(this);
        $(".mobile-guide-nav").eq(mobileindex).removeClass("active");
    }, function() {
        const mobileindex = $(".mobile-guide-content").index(this);
        $(".mobile-guide-nav").eq(mobileindex).addClass("active");
    });
});