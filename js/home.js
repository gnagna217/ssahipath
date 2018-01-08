$(".corevision").click(function() {
  $( "#corevision" ).toggle();
  $( "#coregoals" ).hide();
  $( "#corevals" ).hide();
  $( ".corevision" ).toggleClass("corevaluesactive");
  $( ".coregoals" ).removeClass("corevaluesactive");
  $( ".corevals" ).removeClass("corevaluesactive");
  $(window).scrollTop($('#corevision').offset().top - 300).scrollLeft($('#corevision').offset().left);
});
$(".coregoals").click(function() {
  $( "#coregoals" ).toggle();
  $( "#corevision" ).hide();
  $( "#corevals" ).hide();
  $( ".corevision" ).removeClass("corevaluesactive");
  $( ".coregoals" ).toggleClass("corevaluesactive");
  $( ".corevals" ).removeClass("corevaluesactive");
  $(window).scrollTop($('#coregoals').offset().top - 300).scrollLeft($('#coregoals').offset().left);
});
$(".corevals").click(function() {
  $( "#corevals" ).toggle();
  $( "#coregoals" ).hide();
  $( "#corevision" ).hide();
  $( ".corevision" ).removeClass("corevaluesactive");
  $( ".coregoals" ).removeClass("corevaluesactive");
  $( ".corevals" ).toggleClass("corevaluesactive");
  $(window).scrollTop($('#corevals').offset().top - 300).scrollLeft($('#corevals').offset().left);
});