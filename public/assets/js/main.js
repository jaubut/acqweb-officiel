Snipcart.api.configure('show_continue_shopping', true);

Snipcart.subscribe('cart.ready', function (cart) {
  if (cart != null && cart.items && cart.items.length > 0) {
    $('.snipcart-summary').show();
  }
});

Snipcart.subscribe('item.added', function (item) {
  $('.snipcart-summary').show();
});

Snipcart.subscribe('item.removed', function (item, items) {
  cart = Snipcart.api.cart.get();
  
  if (cart.items.length <= 0) {
    $('.snipcart-summary').hide();
  }
});

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

    