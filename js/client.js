$(function(){
    // preload audio
    var toast = new Audio('media/toast.wav');

    $('.code').on('click', function(e) {

        e.preventDefault();
        let code = $(this).data('code');
        let productName = $(this).data('productname'); 
        $('#code').text(code); 
        $('#product').text(productName); 

        // first pause the audio (in case it is still playing)
        toast.pause();
        // reset the audio
        toast.currentTime = 0;
        // play audio
        toast.play();

        
        
        $('#toast').toast({ autohide: false }).toast('show');
    });

    $(document).on('keydown', function(e){
        e.preventDefault(); 
        if (e.key === 'Escape'){
            $('#toast').toast('hide'); 
        }
    })
});
