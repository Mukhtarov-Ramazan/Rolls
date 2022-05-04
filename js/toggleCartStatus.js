function toggleCartStatus () {
   const cartWrapper = document.querySelector('.cart-wrapper');

   const cartEmty = document.querySelector('[data-cart-empty ]');
   const orederForm = document.querySelector('#order-form');
   const cartTotal = document.querySelector('.cart-total')

   
   if (cartWrapper.children.length > 0) {

      cartEmty.classList.add('none');

      orederForm.classList.remove('none');

      cartTotal.classList.remove('none');
   } else {

      cartEmty.classList.remove('none');

      orederForm.classList.add('none');

      cartTotal.classList.add('none')
   }
}