$(document).ready(function(){

    $("#mycarousel").carousel( { interval: 3000 } );
    $('#loginButton').click(function(){
        $('#loginModal').modal('toggle')
    });
    $('#reserveButton').click(function(){
        $('#reserveModal').modal('toggle')
    });
    $('#findButton').click(function(){
        $('#findModal').modal('toggle')
    });
    $('#updateButton').click(function(){
        $('#updateModal').modal('toggle')
    });
    $("#carouselButton").click(function(){
            if ($("#carouselButton").children("span").hasClass('fa-pause')) {
                $("#mycarousel").carousel('pause');
                $("#carouselButton").children("span").removeClass('fa-pause');
                $("#carouselButton").children("span").addClass('fa-play');
            }
            else if ($("#carouselButton").children("span").hasClass('fa-play')){
                $("#mycarousel").carousel('cycle');
                $("#carouselButton").children("span").removeClass('fa-play');
                $("#carouselButton").children("span").addClass('fa-pause');                    
            }
        });
});