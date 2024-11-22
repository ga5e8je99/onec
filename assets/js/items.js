

// modal variables

// mobile menu variables
const mobileMenuOpenBtn = document.querySelectorAll('[data-mobile-menu-open-btn]');
const mobileMenu = document.querySelectorAll('[data-mobile-menu]');
const mobileMenuCloseBtn = document.querySelectorAll('[data-mobile-menu-close-btn]');
const overlay = document.querySelector('[data-overlay]');

for (let i = 0; i < mobileMenuOpenBtn.length; i++) {

  // mobile menu function
  const mobileMenuCloseFunc = function () {
    mobileMenu[i].classList.remove('active');
    overlay.classList.remove('active');
  }

  mobileMenuOpenBtn[i].addEventListener('click', function () {
    mobileMenu[i].classList.add('active');
    overlay.classList.add('active');
  });



}




// accordion variables
const accordionBtn = document.querySelectorAll('[data-accordion-btn]');
const accordion = document.querySelectorAll('[data-accordion]');

for (let i = 0; i < accordionBtn.length; i++) {

  accordionBtn[i].addEventListener('click', function () {

    const clickedBtn = this.nextElementSibling.classList.contains('active');

    for (let i = 0; i < accordion.length; i++) {

      if (clickedBtn) break;

      if (accordion[i].classList.contains('active')) {

        accordion[i].classList.remove('active');
        accordionBtn[i].classList.remove('active');

      }

    }

    this.nextElementSibling.classList.toggle('active');
    this.classList.toggle('active');

  });

}

/*header-user-actions*/


// Buttons
var account = document.getElementById('account');
var cart = document.getElementById('cart');
var heart = document.getElementById('heart');


//Lists

var accountList = document.getElementById('account-list');
var heartList = document.getElementById('fav-items');
var cartList = document.getElementById('cart-items');

// Function to show account list
account.addEventListener('click', () => {
  accountList.classList.toggle('active');
});

//  Function to hide account list
document.addEventListener('click', (event) => {
  if (!account.contains(event.target) && !accountList.contains(event.target)) {
    accountList.classList.remove('active');
  }
});
///////////
// Function to show account list
heart.addEventListener('click', () => {
  heartList.classList.toggle('active');
});

//  Function to hide account list
document.addEventListener('click', (event) => {
  if (!heart.contains(event.target) && !heartList.contains(event.target)) {
    heartList.classList.remove('active');
  }
});
//////////
// Function to show account list
cart.addEventListener('click', () => {
  cartList.classList.toggle('active');
});

//  Function to hide account list
document.addEventListener('click', (event) => {
  if (!cart.contains(event.target) && !cartList.contains(event.target)) {
    cartList.classList.remove('active');
  }
});

























//Fav

var favCount=0;
var cartCount=0;
var itemLocal;
var card=document.querySelectorAll('.card');
card.forEach(item=>{
  var details={
    image:item.querySelector('img'),
    name:item.querySelector('.card-title'),
    price:item.querySelector('.beforeDiscount')
  }
  
  item.querySelector('.favorite-btn').addEventListener('click',function(){
    this.classList.toggle('clicked');
    
    if (this.classList.contains('clicked')) {
      
      // Change icon
      this.querySelector('i').classList.remove('fa-heart-circle-plus');
      this.querySelector('i').classList.add('fa-heart-circle-minus');
  
      // Change count
      favCount = ++favCount;
      document.getElementById('fav-count').textContent = favCount.toString();
  
      // Insert into fav
      var favList = document.getElementById('fav-list');
      var favItem = document.createElement('li');
  
      // Store a reference to the original card
      const originalCard = this.closest('.card');
  
      favItem.setAttribute('data-card-id', originalCard.getAttribute('data-card-id')); // Add a unique ID to match
      favItem.innerHTML = `
          <img src="${details.image.src}" alt="${details.name.textContent}" width="50px">
          <div class="product-name">${details.name.textContent}</div>
          <div class="price">${details.price.textContent}</div>
          <div id="remove"><i class="fa-solid fa-minus"></i></div>`;
      
      favList.appendChild(favItem);

      // Remove "No items" message if it exists
      const noItemsMessage = document.getElementById('no-items-message');
      if (noItemsMessage) {
          noItemsMessage.remove();
      }
  
      // Add event listener to the remove button
      favItem.querySelector("#remove").addEventListener('click', function () {
          favItem.remove(); // Remove the item from the list
          favCount = --favCount; // Update the favorite count
          document.getElementById('fav-count').textContent = favCount.toString();
  
          // Change the icon back to 'fa-heart-circle-plus' in the original card
          const originalIcon = originalCard.querySelector('.fa-heart-circle-minus');
          if (originalIcon) {
              originalIcon.classList.remove('fa-heart-circle-minus');
              originalIcon.classList.add('fa-heart-circle-plus');
          }
  
          // Remove the 'clicked' class from the button in the original card
          originalCard.querySelector('.favorite-btn').classList.remove('clicked');
  
          // Show "No items" message if the list is empty
          if (favList.children.length === 0) {
              const message = document.createElement('li');
              message.id = 'no-items-message';
              message.textContent = 'No items';
              favList.appendChild(message);
          }
      });
  } else {
      // Change icon back
      this.querySelector('i').classList.add('fa-heart-circle-plus');
      this.querySelector('i').classList.remove('fa-heart-circle-minus');
  
      // Change count
      favCount = --favCount;
      document.getElementById('fav-count').textContent = favCount.toString();
  
      // Remove the corresponding item from the favorites list
      const originalCard = this.closest('.card');
      const favList = document.getElementById('fav-list');
      const favItemToRemove = favList.querySelector(`[data-card-id="${originalCard.getAttribute('data-card-id')}"]`);
      
      if (favItemToRemove) {
          favItemToRemove.remove();
      }
  
      // Show "No items" message if the list is empty
      if (favList.children.length === 0) {
          const message = document.createElement('li');
          message.id = 'no-items-message';
          message.textContent = 'No items';
          favList.appendChild(message);
      }
  }
  
  });
  

//cart



item.querySelector('.cart-btn').addEventListener('click',function(){
  this.classList.toggle('clicked');
  if (this.classList.contains('clicked')) {
    // Change icon
    this.querySelector('i').classList.remove('fa-cart-plus');
    this.querySelector('i').classList.add('fa-cart-minus');

    // Change count
    cartCount = ++cartCount; 
    document.getElementById('cart-count').textContent = cartCount.toString();

    // Insert into cart
    var cartList = document.getElementById('cart-list');
    var cartItem = document.createElement('li');

    // Store a reference to the original card
    const originalCard = this.closest('.card');

    cartItem.setAttribute('data-card-id', originalCard.getAttribute('data-card-id')); // Add a unique ID to match
    cartItem.innerHTML = `
        <img src="${details.image.src}" alt="${details.name.textContent}" width="50px">
        <div class="product-name">${details.name.textContent}</div>
        <div class="price">${details.price.textContent}</div>
        <div id="remove-cart"><i class="fa-solid fa-minus"></i></div>`;
    
    cartList.appendChild(cartItem);

    // Remove "No items" message if it exists
    const noItemsMessageCart = document.getElementById('no-items-message');
    if (noItemsMessageCart) {
      noItemsMessageCart.remove();
    }

    // Add event listener to the remove button
    cartItem.querySelector("#remove-cart").addEventListener('click', function () {
        cartItem.remove(); // Remove the item from the list
        cartCount = --cartCount; // Update the favorite count
        document.getElementById('cart-count').textContent = cartCount.toString();

        // Change the icon back to 'fa-heart-circle-plus' in the original card
        const originalIcon = originalCard.querySelector('.fa-cart-minus');
        if (originalIcon) {
            originalIcon.classList.remove('fa-cart-minus');
            originalIcon.classList.add('fa-cart-plus');
        }

        // Remove the 'clicked' class from the button in the original card
        originalCard.querySelector('.cart-btn').classList.remove('clicked');

        // Show "No items" message if the list is empty
        if (cartList.children.length === 0) {
            const messageCart = document.createElement('li');
            messageCart.id = 'no-items-message';
            messageCart.textContent = 'No items';
            cartList.appendChild(messageCart);
        }
    });
} else {
    // Change icon back
    this.querySelector('i').classList.add('fa-cart-plus');
    this.querySelector('i').classList.remove('fa-cart-minus');

    // Change count
    cartCount = --cartCount;
    document.getElementById('cart-count').textContent = cartCount.toString();

    // Remove the corresponding item from the favorites list
    const originalCard = this.closest('.card');
    const cartList = document.getElementById('cart-list');
    const cartItemToRemove = cartList.querySelector(`[data-card-id="${originalCard.getAttribute('data-card-id')}"]`);
    
    if (cartItemToRemove) {
        cartItemToRemove.remove();
    }

    // Show "No items" message if the list is empty
    if (cartList.children.length === 0) {
        const messageCart = document.createElement('li');
        messageCart.id = 'no-items-message';
        messageCart.textContent = 'No items';
        cartList.appendChild(messageCart);
    }
}

});








});













