$(function(){
    $(".header-container").load("header.html");
    $(".footer-container").load("footer.html");
});

$(function() {

    $('input').each(function() {
        if ($(this).val()) {
            $(this).siblings('label').addClass('contains-text');
        } else {
            $(this).attr('required', true);
        }
    });
    $('input, textarea').focus(function() {
        $(this).addClass('focus');
    });

    $('input, textarea').blur(function() {

        $(this).siblings('label').toggleClass('contains-text', !!$(this).val());
        if (!$(this).val()) {
            $(this).removeClass('focus').attr('required', true);
        } else {
            $(this).removeAttr('required');
        }
    });
    
    $(function(){
        $('input').each( element => {
            if(!$(element).val()) {
                $(this).attr('required', 'true');
            }

        })
    })
    
});