$(document).ready(function(){
	/* == Inspired from jQuery Magic Line Using Transforms
A PEN BY Todd Miller == */
	/* Add/Remove class active on li on click
	======================= */
	$("#main-nav li").on("click", function(){
		$("#main-nav li.active").removeClass("active");
		$(this).addClass("active");
	});
	
	/* Function for vertical sliding menu
	======================= */
	function slidingLine() {
      var $el, topPos, newHeight,
      $mainNav = $("#main-nav");
      
		// Create a new li and append it to ul
      $mainNav.append("<li id='slidingLine'></li>");
      var $slidingLine = $("#slidingLine");

      $slidingLine // Defining initial height and position
          .height($(".active").outerHeight())
          .css("top", $(".active").position().top)
          .data("origTop", $slidingLine.position().top)
          .data("origHeight", $slidingLine.height());
      
      $("#main-nav li").hover(function() { // Set new height and position
        $el = $(this);
        topPos = $el.position().top;
        newHeight = $el.outerHeight();
        $slidingLine.stop().animate({
            top: topPos,
            height: newHeight
        });
      }, function() { // Animate
        $slidingLine.stop().animate({
            top: $(".active").position().top,
            height: $(".active").outerHeight()
      });
    });
  }
	
  	slidingLine();
});