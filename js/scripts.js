$(function(){

    var isOpen = false;

    $('#logo-menu').click(function(){
        var $target = $('#left-bar-hidden');
        if(!isOpen){
            $target.css({"left": "0"});
        }
        else{
            $target.css({"left": "-150%"});
        }
        isOpen = !isOpen;
    });

    $('#right-bar').click(function(){
        var $target = $('#right-bar-hidden');
            $target.css({"right": "0"});
    });
    $('#close').click(function(){
        var $target = $('#right-bar-hidden');
            $target.css({"right": "-150%"});
    });

    //INPUT CONTROLER

    $('.arrows').click(function(){
        let direction = $(this).attr('data-direction');

        var target = $('#page2_main-input').val();

        if(direction === 'up' && target<99){
            target++;
        }
        else if(direction === 'down' && target>1){
            target--;
        }
        $('#page2_main-input').val(target);
    });

    $('form').submit(function(){
        return false;
    });

    $('#page2_main-input').focusout(function(){
        if($('#page2_main-input').val()>99){
            $('#page2_main-input').val(99);
        }
        else if($('#page2_main-input').val()<1){
            $('#page2_main-input').val(1);
        }
    });

    //PICTURE CONTROL

    $('.last-icons:first-child').click(function(){
        $('#page2_main-photo').removeClass('img-normal');
        $('#page2_main-photo').addClass('img-zoom');
    });

    $('.last-icons:last-child').click(function(){
        $('#page2_main-photo').addClass('img-normal');
        $('#page2_main-photo').removeClass('img-zoom');
    });

    //FORM CONTROLLER

    $('#page3_delete-mark').click(function(){
        $('#page3_search-input').val("");
    });
});