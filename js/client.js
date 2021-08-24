$(function(){
    // preload audio
    var toast = new Audio('media/toast.wav');

    $('.code').on('click', function(e) {

        e.preventDefault();
        let code = $(this).data('code');
        var codeReplaced = $('#code').html().replace('CODE', code); 
        let productName = $(this).data('productname'); 
        var productNameReplaced = $('#product').html().replace('Product Name', productName); 
        $('#code').html(codeReplaced); 
        $('#product').html(productNameReplaced); 

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
