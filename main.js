$( document ).ready(function() {

  var uiMenu = $('.ui-context-menu.example');
  var zIndex = 1;

  /*$('.ui-view').on('contextmenu', function(e){

    zIndex++;
    console.log(e.pageX+ ' , ' + e.pageY);
    e.preventDefault();
    var width   = e.pageX;
    var heigth  = e.pageY;
    console.log(uiMenu);
    uiMenu.clone().css({
      "zIndex" : zIndex,
      "position": "absolute",
      "left": e.pageX,
      "top": e.pageY
    }).addClass('created').insertAfter($('.ui-view'));

  });*/

  $(document).keypress( function(e){

    if(e.which === 186){
        $('.ui-view').toggleClass('dark');
    }

  });

  $('.ui-checkbox').on('click', function(){

    var object = $(this);
    if(!object.hasClass('inactive')){
      if(object.hasClass('active')){
        object.removeClass('active');
      }else{
        object.addClass('active');
      }
    }

  });

  $('.ui-radio-button').on('click', function(){

    var object = $(this);
    if(!object.hasClass('inactive')){
      if(object.hasClass('active')){
        object.removeClass('active');
      }else{
        object.addClass('active');
      }
    }

  });

  $('.ui-icons-grouped figure').on('click', function(){

    $('.ui-icons-grouped .active').removeClass('active');
    $(this).addClass('active');

  });

  $('.ui-alignment-btn').on('click', function(){

    var object = $(this);
    if( !object.hasClass('inactive') ){

      $('.ui-alignment-btn.active').removeClass('active');
      object.addClass('active');

    }

  });

  $('.test-alert').on('click', function(){
    $('.alert').show();
  });

  $('.alert .ui-btn.cancel,.alert .ui-btn.gray,.alert .ui-btn.accept').on('click', function(){
    $('.alert').hide();
  });

  $('.ui-select').on('click', function(){
    $(this).children('.ui-select-input').toggleClass('selecting');
    $(this).children('.ui-select-dropdown').toggleClass('selecting');
  });

  $('.ui-select-dropdown article').on('click', function(e){
    $('.ui-select-input.selecting').removeClass('selecting');
    $('.ui-select-dropdown.selecting').removeClass('selecting');
    $('.ui-select-input article').text( $(this).text() );
    e.stopPropagation();
  });

  $('.ui-input-dropdown figure').on('click', function(){
    $('.ui-input-dropdown-dropdown').addClass('selecting');
    $('.ui-input-dropdown-input').addClass('selecting');
  });

  $('.ui-input-dropdown-dropdown article').on('click', function(e){
    $('.ui-input-dropdown-dropdown').removeClass('selecting');
    $('.ui-input-dropdown-input').removeClass('selecting');
    $('.ui-input-dropdown-input article').text( $(this).text() );
    e.stopPropagation();
  });


});
