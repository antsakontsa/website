// work.html show/hide project description texts
$(document).ready(function () {
    $(".btn-light").click(function () {
        $('.desc-text', this).stop().toggle(500);
        $('.arrow-down', this).toggle();
        $('.arrow-up', this).toggle();
    });
});