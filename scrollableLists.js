(function( $ ){
  $.fn.scrollableLists = function(options) {

    var settings = {
      'li_height'            : 20,
      'per_page'             : 10,
      'a_color'              : '#000',
      'a_background'         : '#fff',
      'a_hover_color'        : '#fff',
      'a_hover_background'   : '#555',
      'plugin_class'         : '_scrollable-list_',
      'up_symbol'            : '&uarr;',
      'down_symbol'          : '&darr;',
      'symbol_size'          : '14px'
    };

    if ( options ) {
      $.extend( settings, options );
    }

    viewportHeight = settings.li_height * settings.per_page;


    $("<style type='text/css'>" +
      "  .list-scroll-window {" +
      "    height: " + viewportHeight + "px;" +
      "    position: relative;" +
      "    overflow: hidden;" +
      "  }" +
      "" +
      "  .list-scroll-window ol, ul {" +
      "    position: absolute;" +
      "    top: 0px;" +
      "    margin-top: 0px;" +
      "  }" +
      "" +
      "  .list-scroll-window li {" +
      "    height: " + settings.li_height + "px;" +
      "  }" +
      "" +
      "  .window-wrapper {" +
      "    margin: 10px 0px;"  +
      "  }" +
      "" +
      "  .window-wrapper a." + settings.plugin_class + " {" +
      "    color: " + settings.a_color + ";" +
      "    font-size: " + settings.symbol_size + ";" +
      "    text-decoration: none;" +
      "    padding: 0px 10px 2px 10px;" + // larger target to click
      "    background-color: " + settings.a_background + ";" +
      "  }" +
      "" +
      "  .window-wrapper a." + settings.plugin_class + ":hover {" +
      "    background-color:" + settings.a_hover_background + ";" +
      "    color: " + settings.a_hover_color + ";" +
      "  }" +
      "" +
      "  .window-wrapper a." + settings.plugin_class + ".previous {" +
      "    visibility: hidden;" +
      "  }" +
      "" +
      "</style>").appendTo("head");


    $(".next").live('click', function (event) {
      event.preventDefault();
      activatedWindow = $(this).parent(".window-wrapper");
      list = activatedWindow.find("ol, ul");
      nextButton = $(this);
      prevButton = activatedWindow.find('.previous');

      nextButton.css("visibility","hidden"); //prevent double clicking
      prevButton.css("visibility","visible");  //if you clicked next, you can click previous
      list.animate({ top: "-=" + viewportHeight +"px" }, 300, function(){
        if ((list.find("li:last-child").position().top + settings.li_height) - viewportHeight + list.position().top > 0) {
          nextButton.css("visibility","visible");
        }
      });
    });

    $(".previous").live('click', function (event) {
      event.preventDefault();
      activatedWindow = $(this).parent(".window-wrapper");
      list = activatedWindow.find("ol, ul");
      prevButton = $(this);
      nextButton = activatedWindow.find('.next');

      prevButton.css("visibility","hidden"); //prevent double clicking
      nextButton.css("visibility","visible"); //if you clicked previous, you can click next
      list.animate({ top: "+=" + viewportHeight +"px" }, 300, function(){

        if (list.position().top < 0) {
          prevButton.css("visibility","visible");
        }
      });
    });

    return this.each(function() {
      var $this = $(this);
      $this.wrap("<div class='window-wrapper'></div>")
        .before("<a href='#' class='" + settings.plugin_class + " previous'>" + settings.up_symbol + "</a>")
        .after("<a href='#'  class='" + settings.plugin_class + " next'>" + settings.down_symbol + "</a>")
        .wrap("<div class='list-scroll-window'></div>");
    });
  };
})( jQuery );

