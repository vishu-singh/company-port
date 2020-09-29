$(document).ready(function(){
    $('#owl-one').owlCarousel({
        loop:true,
        margin:30,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            767:{
                items:1
            },
            768:{
                items:2
            },
            1000:{
                items:2
            }
        }
    });

    $('#owl-two').owlCarousel({
        loop:false,
        margin:30,
        nav:true,
        center:false,
        responsive:{
            0:{
                items:1
            },
            767:{
                items:1
            },
            768:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });
    

    $('.requirment').click(function(){
        $('.defaulter').addClass('show');
        
    });

    $('.visithows').click(function(){
        $('body, html').animate({
            scrollTop: $('#howits').offset().top - 150
        });
    });


    $('.visittestinom').click(function(){
        $('body, html').animate({
            scrollTop: $('#testinomial').offset().top - 120
        });
    });



   
});