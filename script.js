$(document).ready(() => {


    $(window).scroll(() => {
        if(this.scrollY > 20){
            $('.navbar').addClass('sticky');
        }else{
            $('.navbar').removeClass('sticky');
        }
    })

    //Toggle Navbar Menu
    $('.menu-btn').click(() => {
        $('.navbar .menu').toggleClass('active');
        $('.menu-btn i').toggleClass('active');

    })

});

