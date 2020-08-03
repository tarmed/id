var resultWrapper = document.querySelector('.spin-result-wrapper');
var wheel = document.querySelector('.wheel-img');


function spin() {
    if (wheel.classList.contains('rotated')) {
        resultWrapper.style.display = "block";
    } else {
        wheel.classList.add('super-rotation');
        setTimeout(function() {
            resultWrapper.style.display = "block";
        }, 8000);
        setTimeout(function() {
            $('.spin-wrapper').slideUp();
            $('.order_block').slideDown();
        }, 10000);
        wheel.classList.add('rotated');
    }
}
var closePopup = document.querySelector('.close-popup');
$('.close-popup, .pop-up-button').click(function(e) {
    e.preventDefault();
    $('.spin-result-wrapper').fadeOut();
});




if($('a').hasClass("copyright")) {
   
   
} else {
$('a').click(function(e){   
    $('html, body').animate({
        scrollTop: $('#form').offset().top
    }, 1000);
})
}
const cop = document.querySelector(".copyright");
const cdnW = window.cdn_path;

document.addEventListener('click', function(e) {

    cop.href = (cdnW)? cdnW + cop.dataset.cop : cop.dataset.cop;
})
