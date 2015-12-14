$( document ).ready(function() {

  /*var uiMenu = $('.ui-context-menu.example');
  var zIndex = 1;
  $('.ui-view').on('contextmenu', function(e){

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

  $('.ui-checkbox').on('click', function(){

    var object = $(this);
    if(!object.hasClass('inactive')){
      object.toggleClass('active');
    }

  });

  $('.ui-radio-button').on('click', function(){

    var object = $(this);
    if(!object.hasClass('inactive')){
      object.toggleClass('active');
    }

  });

  $('.ui-icons-grouped figure').on('click', function(){

    $(this).siblings('.active').removeClass('active');
    $(this).addClass('active');

  });

  $('.ui-alignment-btn').on('click', function(){

    $(this).siblings('.active').removeClass('active');
    $(this).addClass('active');

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
    $(this).parent().removeClass('selecting');
    $(this).parent().siblings().removeClass('selecting');
    $(this).parent().siblings().children('article').text( $(this).text() );
    e.stopPropagation();
  });

  $('.ui-input-dropdown figure').on('click', function(){
    $(this).parent('.ui-input-dropdown-input').siblings('.ui-input-dropdown-dropdown').toggleClass('selecting');
  });

  $('.ui-input-dropdown-dropdown article').on('click', function(e){
    $(this).parent('.ui-input-dropdown-dropdown').removeClass('selecting');
    $(this).parent('.ui-input-dropdown-dropdown').siblings('.ui-input-dropdown-input').children('input').val( $(this).text() );
    e.stopPropagation();
  });

  $('.ui-input-search input').on('focus', function(){
    $(this).parent('.ui-input-search').addClass('active');
  });

  $('.ui-input-search .delete-content, .ui-input figure').on('mousedown', function(e){
    e.preventDefault();
  });

  $('.ui-input-search input').on('blur', function(){
    $(this).parent('.ui-input-search').removeClass('active');
  });

  $('.ui-input-search .delete-content, .ui-input figure').on('click', function(){
    $(this).siblings('input').val('');
  });

  $('.ui-input input').on('focus', function(){
    $(this).parent('.ui-input').addClass('active');
  });

  $('.ui-input input').on('blur', function(){
    $(this).parent('.ui-input').removeClass('active');
  });

});
