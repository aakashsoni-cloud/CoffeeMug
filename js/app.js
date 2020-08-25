
document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems , {
        duration : 1000,
        dist: -80,
        shift: 30,
        indicators: true,
    });
});
