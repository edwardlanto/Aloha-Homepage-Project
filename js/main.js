$(document).ready(function() {
    $('.subscribe-button').click(function() {
      
        var sEmail = $('.email-form').val();
        if ($.trim(sEmail).length == 0) {
            alert('Please enter valid email address');
            // e.preventDefault();
        }
        if (validateEmail(sEmail)) {
            alert('Thanks For Subscribing');
            // e.preventDefault();
            console.log("foundit")
        }
        else {
            alert('Invalid Email Address');
            // e.preventDefault();
        }

    });
//subscribe-button click bracket

function validateEmail(sEmail) {
    var filter = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    if (filter.test(sEmail)) {
        return true;
    }
    else {
        return false;
    }
}// validateEmail function bracket
  
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  }); //smooth-scroll function bracket


$('.main-carousel').flickity({
		cellAlign: 'left',
		contain: true,
		percentPosition: true,
		imagesLoaded: true,
		autoPlay: true,
		prevNextButtons: false
	});//main-carousel bracket

});//DOCUMENT.ready bracket
