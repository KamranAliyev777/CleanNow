$(document).ready(function(){
    $(window).scroll(function(){
        var x=$(window).scrollTop();  
  if(x>64){
      $('.header_bottom_fixed').addClass('fixed');
  }
  else{
    $('.header_bottom_fixed').removeClass('fixed');
  }
    });
    $(".third_section_middle > a").colorbox({rel:'group3'});
})