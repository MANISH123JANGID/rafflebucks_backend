
   




$(document).ready(function(){
    $('.btn_show_all').on('click', function(){
        $('.hidden_cate_box').slideToggle();
        $(this).text($(this).text() == 'Show Less' ? 'Show More' : 'Show Less');
    });
   // hockey 
    $('.three_d_hockey').on('click', function(){
        $('#hockey_game_overlay').fadeIn(100);
        $('#hockey_game').html('<iframe src="https://www.crazygames.com/embed/3d-air-hockey"  frameborder="0"></iframe>');
    });
    $('.close_btn').on('click', function(){
        $('#hockey_game_overlay').fadeOut(500);
        $('#hockey_game').html('<div></div>');
    })
    //snake game 
    $('#silly_snake').on('click', function(){
        $('#snake_game_overlay').fadeIn(100);
        $('#snake_game').html(' <iframe id="embededGame" src="https://play.idevgames.co.uk/embed/sillysnake" scrolling="no" seamless="seamless" frameBorder="0" >Browser not compatible.</iframe>');
    });
    $('.close_btn').on('click', function(){
        $('#snake_game_overlay').fadeOut(500);
        $('#snake_game').html('<div></div>');
    })
    // cricket game 
    $('#cricket').on('click', function(){
        $('#cricket_game_overlay').fadeIn(100);
        $('#cricket_game').html('<iframe src="https://www.crazygames.com/embed/cricket-frvr"  frameborder="0"></iframe>');
    }); 
    $('.close_btn').on('click', function(){
        $('#cricket_game_overlay').fadeOut(500);
        $('#cricket_game').html('<div></div>');
    })
    // basketball game 
    $('#basket').on('click', function(){
        $('#basket_game_overlay').fadeIn(100);
        $('#basket_game').html('<iframe src="https://www.crazygames.com/embed/tap-tap-shots" frameborder="0"></iframe>');
    });
    $('.close_btn').on('click', function(){
        $('#basket_game_overlay').fadeOut(500);
        $('#basket_game').html('<div></div>');
    })
    // Football Game 
    $('#football').on('click', function(){
        $('#football_game_overlay').fadeIn(100);
        $('#football_game').html('<iframe src="https://www.crazygames.com/embed/penalty-shooters-2"  frameborder="0"></iframe>');
    });
    $('.close_btn').on('click', function(){
        $('#football_game_overlay').fadeOut(500);
        $('#football_game').html('<div></div>');
    })

    // car game 
    $('#car').on('click', function(){
        $('#car_game_overlay').fadeIn(100);
        $('#car_game').html('<iframe src="https://www.crazygames.com/embed/russian-car-driver-zil-130" frameborder="0"></iframe>');
    });
    $('.close_btn').on('click', function(){
        $('#car_game_overlay').fadeOut(500);
        $('#car_game').html('<div></div>');
    })
});



$(document).ready(function() {
    // Select all links with hashes
    $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
    // On-page links
    if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
        && 
        location.hostname == this.hostname
    ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
            
            scrollTop: target.offset().top
        }, 1000, function() {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
            return false;
            } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
            };
        });
        }
    }
    });
});

/* GAME OPENER */
