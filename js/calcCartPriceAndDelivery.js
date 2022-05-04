function calcCartPriceAndDelivery () {

   const cartItems = document.querySelectorAll('.cart-item');
   const totalPriceEl = document.querySelector('.total-price');
   const deliveryCost = document.querySelector('.delivery-cost'); 

   // Общая стоимость товаров
   let priceTotal = 0;

   cartItems.forEach((item) => {
      const amountEl = item.querySelector('[data-counter]');
      const priceEl = item.querySelector('.price__currency');


      const currentPrice = parseInt(amountEl.innerText) * parseInt(priceEl.innerText);

      priceTotal += currentPrice;

   })

   totalPriceEl.innerText = priceTotal;



   if (priceTotal >= 600) {
      deliveryCost.classList.add('free');
      deliveryCost.innerText = 'бесплатно';
   } else {
      deliveryCost.classList.remove('free')
      deliveryCost.innerText = '200 ₽'
   }
}