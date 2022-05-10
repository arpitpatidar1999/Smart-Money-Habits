$(document).ready(function(){
    $('a').click(function(){
        //alert("i am click");
        var selected= $(this);
        $('a').removeClass('active');
        $(selected).addClass('active');
    });

    var $a = $('.a'),
    $b = $('.b'),
    $c = $('.c'),
    $d = $('.d'),
    $e = $('.e'),
    $f = $('.f'),
    $home = $('.home'),
    $whatwedo = $('.what-we-do'),
    $gamenlearn = $('.gameNlearn'),
    $ourapp= $('.our-app'),
    $reviews = $('.reviews'),
    $joinus = $('.join-us');

    $a.click(function(){
        $home.fadeIn();
        $whatwedo.fadeIn();
        $gamenlearn.fadeIn();
        $ourapp.fadeIn();
        $reviews.fadeIn();
        $joinus.fadeIn();
    });
    $b.click(function(){
        $whatwedo.fadeIn();
        $home.fadeOut();
        $gamenlearn.fadeOut();
        $ourapp.fadeOut();
        $reviews.fadeOut();
        $joinus.fadeOut();
    });
    $c.click(function(){
        $gamenlearn.fadeIn();
        $whatwedo.fadeOut();
        $home.fadeOut();
        $ourapp.fadeOut();
        $reviews.fadeOut();
        $joinus.fadeOut();
    });
    $d.click(function(){
        $ourapp.fadeIn();
        $whatwedo.fadeOut();
        $gamenlearn.fadeOut();
        $home.fadeOut();
        $reviews.fadeOut();
        $joinus.fadeOut();
    });
    $e.click(function(){
        $reviews.fadeIn();
        $whatwedo.fadeOut();
        $gamenlearn.fadeOut();
        $ourapp.fadeOut();
        $home.fadeOut();
        $joinus.fadeOut();
    });
    $f.click(function(){
        $joinus.fadeIn();
        $whatwedo.fadeOut();
        $gamenlearn.fadeOut();
        $ourapp.fadeOut();
        $reviews.fadeOut();
        $home.fadeOut();
    });

});


function submit_form() {
    document.contactform.submit();
    document.contactform.reset(); 
}