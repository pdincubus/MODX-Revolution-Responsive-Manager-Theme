/*----------------------------------------------------
*      custom js stuff
*----------------------------------------------------*/

function charLimit(maxLen, thisField) {
    var max = maxLen,
        len = thisField.val().length,
        char = max - len;

    if (len >= max) {
        $(thisField).parent().find('.charsRemain').addClass('limit');
    } else {
        $(thisField).parent().find('.charsRemain').removeClass('limit');
    }

    $(thisField).parent().find('.charsRemain').text(char);
}

$(document).ready(function() {
    $('ul.tree > li.closed').children('ul').hide();
    $('aside').find('ul.tree').hide().first().show();
    $('aside').find('nav.controlsNav ul').hide().first().show();
    $('article').find('section').hide().first().show();

    $(document).on('click', 'ul.tree > li > nav > h1', function() {
        if($(this).parents('li').last().hasClass('closed')) {
            $(this).parents('li').last().removeClass('closed').addClass('active');
            $(this).parents('nav').siblings('ul').slideDown(200, 'easeOutQuad');
        } else {
            $(this).parents('li').last().addClass('closed').removeClass('active');
            $(this).parents('nav').siblings('ul').slideUp(200, 'easeOutQuad');
        }
    });

    $('#pageTitle').on('keyup', function() {
        charLimit(70, $(this));
    });

    $('#pageDescription').on('keyup', function() {
        charLimit(160, $(this));
    });

    $('aside > nav.tabNav li a').on('click', function(e) {
        e.preventDefault();
        var tab = $(this).attr('href');
        var nav = tab.replace('#', '.');

        $('aside').find('ul'+tab).show().siblings('ul.tree').hide();
        $('aside').find('ul'+nav).show().siblings('ul').hide();
        $('aside nav.tabNav li a').removeClass('active');
        $(this).addClass('active');
    });

    $('#resourceEdit nav.tabNav li a').on('click', function(e) {
        e.preventDefault();
        var tab = $(this).attr('href');

        $('article').find('section'+tab).show().siblings('section').hide();
        $('#resourceEdit nav.tabNav li a').removeClass('active');
        $(this).addClass('active');
    });

    $('#pageStyle').dropdownatron();

    $('.awesomeBar').on({
        focus: function() {
            $(this).siblings('ul').slideDown(200);
        },
        blur:  function() {
            $(this).siblings('ul').slideUp(200);
        }
    });
});
