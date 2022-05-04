window.addEventListener('click', (event) => {

   let counter;

   // Проверяем клик по кнопкам Плюс либо Минус
   if ( event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus' ) {
      const counterWrapper = event.target.closest('.counter-wrapper');

      counter = counterWrapper.querySelector('[data-counter]');
   };


   if ( event.target.dataset.action === 'plus' ) {
      counter.innerText = ++counter.innerText;
   };

   if ( event.target.dataset.action === 'minus' ) {

      if ( +counter.innerText > 1 ) {

         counter.innerText = --counter.innerText;

      } else if (event.target.closest('.cart-wrapper') && +counter.innerText === 1) {

         event.target.closest('.cart-item').remove();


         toggleCartStatus ();

         calcCartPriceAndDelivery ();
      }

   }


   if (event.target.hasAttribute('data-action') && event.target.closest('.cart-wrapper')) {
      calcCartPriceAndDelivery ()
   }
})