/*----------------------------------------------------
*      custom js stuff
*----------------------------------------------------*/

$(document).ready(function() {
    $('ul.tree > li.closed').children('ul').hide();

    $(document).on('click', 'ul.tree > li > nav > h1', function() {
        if($(this).parents('li').last().hasClass('closed')) {
            $(this).parents('li').last().removeClass('closed');
            $(this).parents('nav').siblings('ul').slideDown(200, 'easeOutQuad');
        } else {
            $(this).parents('li').last().addClass('closed');
            $(this).parents('nav').siblings('ul').slideUp(200, 'easeOutQuad');
        }
    });

    $('#pageDescription').on('keyup', function() {
        var max = 160,
            len = $(this).val().length,
            char = max - len;

        if (len >= max) {
            $('#pageDescCharsRemain').addClass('limit');
        } else {
            $('#pageDescCharsRemain').removeClass('limit');
        }

        $('#pageDescCharsRemain').text(char);
    });
});
