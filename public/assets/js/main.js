(function(){
  console.log("harp + surge");
})();

jQuery(document).ready(function($) {
			$('.my-slider').unslider();
		});

$('.grid').masonry({
  itemSelector: '.grid-item',
  columnWidth: '.grid-sizer',
  percentPosition: true
});

