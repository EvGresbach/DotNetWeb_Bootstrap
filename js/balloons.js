//Randomize Animations
$(window).on('load', function(){
        
        let animations = 
            ["animate__animated animate__bounce", "animate__animated animate__flash", 
            "animate__animated animate__pulse", "animate__animated animate__rubberBand", 
            "animate__animated animate__shakeX", "animate__animated animate__shakeY", 
            "animate__animated animate__headShake", "animate__animated animate__swing",
            "animate__animated animate__tada", "animate__animated animate__wobble", 
            "animate__animated animate__jello", "animate__animated animate__hearbeat"]; 
        
        let index = Math.floor(Math.random() * animations.length);  
        $('h1').addClass(animations[index]); 
    })

$(function(){
    //pickdate
    $('#birthday').pickadate({format: 'mmmm, d'}); 

    // uncheck all checkboxes (FireFox)
    $('.form-check-input').each(function () {
        $(this).prop('checked', false);
    });

    // event listener for check/uncheck
    $('.form-check-input').on('change', function () {
        // make the image visible
        $('#' + this.id + 'Img').css('visibility', 'visible');
        // animate balloon in/out based on checkbox
        $(this).is(':checked') ?
         $('#' + this.id + 'Img').removeClass().addClass('animate__animated animate__bounceInDown') :
         $('#' + this.id + 'Img').addClass('animate__animated animate__bounceOutUp');
    })

    //submit button toasts
    $('#submit').on('click', function(){
        if($('.card input[type=checkbox]#blue-green').is(':checked'))
            $('#successful-toast').toast({ delay: 6000 }).toast('show');
        
        else if($('.card input[type=checkbox]#pink').is(':checked'))
            $('#successful-toast').toast({ delay: 6000 }).toast('show'); 

        else if($('.card input[type=checkbox]#purple').is(':checked'))
            $('#successful-toast').toast({ delay: 6000 }).toast('show');
        else
            $('#failed-toast').toast({ delay: 6000 }).toast('show');
    })

    //check all
    $('#check-all').on('click', function(){
        $('input[type=checkbox]').prop('checked', true); 
    })

    //clear all
    $('#clear-all').on('click', function(){
        $('input[type=checkbox]').prop('checked', false); 
    })

    //hover to change h1
    $("#blue-green-label").hover(
        function(){
            $('h1').css('color', '#3da8a8'); 
        }, 
        function(){
            $('h1').css('color', 'slategray')
    })
    $("#pink-label").hover(
        function(){
            $('h1').css('color', 'pink'); 
        }, 
        function(){
            $('h1').css('color', 'slategray')
    })
    $("#purple-label").hover(
        function(){
            $('h1').css('color', 'purple'); 
        }, 
        function(){
            $('h1').css('color', 'slategray')
    })
})