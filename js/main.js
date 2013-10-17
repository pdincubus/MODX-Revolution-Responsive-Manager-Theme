/*----------------------------------------------------
*      custom js stuff
*----------------------------------------------------*/

$(document).ready(function() {
    $('ul.tree > li.closed').children('ul').hide();
    $('aside').find('ul.tree').hide().first().show();

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

    $('aside > nav.tabNav a').on('click', function(e) {
        e.preventDefault();
        var tab = $(this).attr('href');
        console.log(tab);

        $('aside').find('ul'+tab).show().siblings('ul.tree').hide();
        $('aside nav.tabNav li a').removeClass('active');
        $(this).addClass('active');
    });
});
