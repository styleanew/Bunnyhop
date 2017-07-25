$(document).ready(function () {
    try {
        var testimonialIndex = Math.floor(Math.random() * bannerQuotes.length);
        $("span.testimonials p").html(bannerQuotes[testimonialIndex].quote);
        $("span.testimonials strong").html(bannerQuotes[testimonialIndex].author);
        $("span.testimonials cite").html("");
    } catch (err) {

    }
});