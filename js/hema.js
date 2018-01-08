$(".corewhite").click(function() {
  $( "#corewhite" ).toggle();
  $( "#corered" ).hide();
  $( "#coreplatelet" ).hide();
  $( "#corebleed" ).hide();
  $( "#coreblood" ).hide();
  $( ".corewhite" ).toggleClass("corevaluesactive");
  $( ".corered" ).removeClass("corevaluesactive");
  $( ".coreplatelet" ).removeClass("corevaluesactive");
  $( ".corebleed" ).removeClass("corevaluesactive");
  $( ".coreblood" ).removeClass("corevaluesactive");
  $(window).scrollTop($('#corewhite').offset().top - 300).scrollLeft($('#corewhite').offset().left);
});
$(".corered").click(function() {
  $( "#corered" ).toggle();
  $( "#corewhite" ).hide();
  $( "#coreplatelet" ).hide();
  $( "#corebleed" ).hide();
  $( "#coreblood" ).hide();
  $( ".corered" ).toggleClass("corevaluesactive");
  $( ".corewhite" ).removeClass("corevaluesactive");
  $( ".coreplatelet" ).removeClass("corevaluesactive");
  $( ".corebleed" ).removeClass("corevaluesactive");
  $( ".coreblood" ).removeClass("corevaluesactive");
  $(window).scrollTop($('#corered').offset().top - 300).scrollLeft($('#corered').offset().left);
});
$(".coreplatelet").click(function() {
  $( "#coreplatelet" ).toggle();
  $( "#corered" ).hide();
  $( "#corewhite" ).hide();
  $( "#corebleed" ).hide();
  $( "#coreblood" ).hide();
  $( ".coreplatelet" ).toggleClass("corevaluesactive");
  $( ".corered" ).removeClass("corevaluesactive");
  $( ".corewhite" ).removeClass("corevaluesactive");
  $( ".corebleed" ).removeClass("corevaluesactive");
  $( ".coreblood" ).removeClass("corevaluesactive");
  $(window).scrollTop($('#coreplatelet').offset().top - 300).scrollLeft($('#coreplatelet').offset().left);
});
$(".corebleed").click(function() {
  $( "#corebleed" ).toggle();
  $( "#corered" ).hide();
  $( "#coreplatelet" ).hide();
  $( "#corewhite" ).hide();
  $( "#coreblood" ).hide();
  $( ".corebleed" ).toggleClass("corevaluesactive");
  $( ".corered" ).removeClass("corevaluesactive");
  $( ".coreplatelet" ).removeClass("corevaluesactive");
  $( ".corewhite" ).removeClass("corevaluesactive");
  $( ".coreblood" ).removeClass("corevaluesactive");
  $(window).scrollTop($('#corebleed').offset().top - 300).scrollLeft($('#corebleed').offset().left);
});
$(".coreblood").click(function() {
  $( "#coreblood" ).toggle();
  $( "#corered" ).hide();
  $( "#coreplatelet" ).hide();
  $( "#corebleed" ).hide();
  $( "#corewhite" ).hide();
  $( ".coreblood" ).toggleClass("corevaluesactive");
  $( ".corered" ).removeClass("corevaluesactive");
  $( ".coreplatelet" ).removeClass("corevaluesactive");
  $( ".corebleed" ).removeClass("corevaluesactive");
  $( ".corewhite" ).removeClass("corevaluesactive");
  $(window).scrollTop($('#coreblood').offset().top - 300).scrollLeft($('#coreblood').offset().left);
});
$(document).ready(function() {
    // browser window scroll (in pixels) after which the "back to top" link is shown
    var offset = 300,
      //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
      offset_opacity = 1200,
      //duration of the top scrolling animation (in ms)
      scroll_top_duration = 700,
      //grab the "back to top" link
      $back_to_top = $('.cd-top');

    //hide or show the "back to top" link
    $(window).scroll(function(){
      ( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
      if( $(this).scrollTop() > offset_opacity ) { 
        $back_to_top.addClass('cd-fade-out');
      }
    });
    //smooth scroll to top
  $back_to_top.on('click', function(event){
    event.preventDefault();
    $('#backToHema').animate({
      scrollTop: 0 ,
      }, scroll_top_duration
    );
  }); 
});
