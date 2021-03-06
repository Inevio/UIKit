$( document ).ready(function() {

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

  $('.ui-input-dropdown input').on('focus', function(){
    $(this).parent().parent('.ui-input-dropdown').addClass('active');
  });

  $('.ui-input-dropdown input').on('blur', function(){
    $(this).parent().parent('.ui-input-dropdown').removeClass('active');
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
