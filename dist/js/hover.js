// work.html show/hide project description texts
$(document).ready(function () {
    $(".btn-light").hover(function () {
        $('.desc-text', this).stop().toggle(500);
    });
});