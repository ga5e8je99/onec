'use strict';



//main page
var mainPageLinkD={
  home:document.getElementById("home-page"),
  men:document.getElementById('men'),
  Women:document.getElementById('Women'),
  perfume:document.getElementById('perfume')
}
var sectionPageLinkDesktop={
  //mens sections
  menShirt:document.getElementById('men-shirt-link'),
  menShort:document.getElementById('men-short-link'),
  menSafety:document.getElementById('men-safety-link'),
  menFormal:document.getElementById('men-formal-link'),
  menCasual:document.getElementById('men-casual-link'),

  //women section
  womenDress:document.getElementById('women-dress-link'),
  womenFormal:document.getElementById('women-formal-link'),
  womenCasual:document.getElementById('women-casual-link'),

  //perfume section
  clothes:document.getElementById('clothes-perfume-link'),
  deodorant:document.getElementById('deodorant-link'),
  flower:document.getElementById('flower-link'),
  airFreshener:document.getElementById('air-freshener-link')
};
var sectionsPages={
  home:document.getElementById('home'),

  menShirt:document.getElementById('men-shirt'),
  menShort:document.getElementById('men-short'),
  menSafety:document.getElementById('men-safety'),
  menFormal:document.getElementById('men-formal'),
  menCasual:document.getElementById('men-casual'),

  womenDress:document.getElementById('women-dress'),
  womenFormal:document.getElementById('women-formal'),
  womenCasual:document.getElementById('women-casual'),

  clothes:document.getElementById('clothes-perfume'),
  deodorant:document.getElementById('deodorant'),
  flower:document.getElementById('flower-fragrance'),
  airFreshener:document.getElementById('air-freshener')
};

// var mainPageLinkDEntriesArray = Object.entries(mainPageLinkD);


// var sectionPageLinkDesktopEntriesArray = Object.entries(sectionPageLinkDesktop);


// var sectionsPagesEntriesArray = Object.entries(sectionsPages);


//home
mainPageLinkD.home.addEventListener('click',function () {
  sectionsPages.home.classList.add('activeHome');
  mainPageLinkD.home.classList.add('page');

  for (let i = 0; i < sectionsPagesEntriesArray.length; i++) {
    sectionsPagesEntriesArray[i].classList.remove('activePage');    
  }  
  for (let i = 0; i < sectionPageLinkDesktopEntriesArray.length; i++) {
    sectionPageLinkDesktopEntriesArray[i].classList.remove('activeLink');
  }
});
// Categories sections












// Men's sections
sectionPageLinkDesktop.menShirt.addEventListener('click', function () {
  // إزالة الـ class "activePage" من جميع العناصر
  Object.values(sectionsPages).forEach((section) => {
    section.classList.remove('activePage');
  });

  // إضافة الـ class "activePage" للعنصر menShirt
  sectionsPages.menShirt.classList.add('activePage');

  // إزالة الـ class "activeLink" من جميع الروابط
  Object.values(sectionPageLinkDesktop).forEach((link) => {
    link.classList.remove('activeLink');
  });

  // إضافة الـ class "activeLink" للعنصر menShirt
  sectionPageLinkDesktop.menShirt.classList.add('activeLink');
  sectionsPages.home.classList.remove('activeHome');
  mainPageLinkD.home.classList.remove('page');
});


sectionPageLinkDesktop.menShort.addEventListener('click', function () {
  // إزالة الـ class "activePage" من جميع العناصر
  Object.values(sectionsPages).forEach((section) => {
    section.classList.remove('activePage');
  });

  // إضافة الـ class "activePage" للعنصر menShirt
  sectionsPages.menShort.classList.add('activePage');

  // إزالة الـ class "activeLink" من جميع الروابط
  Object.values(sectionPageLinkDesktop).forEach((link) => {
    link.classList.remove('activeLink');
  });

  // إضافة الـ class "activeLink" للعنصر menShirt
  sectionPageLinkDesktop.menShort.classList.add('activeLink');

  sectionsPages.home.classList.remove('activeHome');
  mainPageLinkD.home.classList.remove('page');
});


sectionPageLinkDesktop.menSafety.addEventListener('click', function () {
  // إزالة الـ class "activePage" من جميع العناصر
  Object.values(sectionsPages).forEach((section) => {
    section.classList.remove('activePage');
  });

  // إضافة الـ class "activePage" للعنصر menShirt
  sectionsPages.menSafety.classList.add('activePage');

  // إزالة الـ class "activeLink" من جميع الروابط
  Object.values(sectionPageLinkDesktop).forEach((link) => {
    link.classList.remove('activeLink');
  });

  // إضافة الـ class "activeLink" للعنصر menShirt
  sectionPageLinkDesktop.menSafety.classList.add('activeLink');

  sectionsPages.home.classList.remove('activeHome');
  mainPageLinkD.home.classList.remove('page');
});

sectionPageLinkDesktop.menFormal.addEventListener('click', function () {
  // إزالة الـ class "activePage" من جميع العناصر
  Object.values(sectionsPages).forEach((section) => {
    section.classList.remove('activePage');
  });

  // إضافة الـ class "activePage" للعنصر menShirt
  sectionsPages.menFormal.classList.add('activePage');

  // إزالة الـ class "activeLink" من جميع الروابط
  Object.values(sectionPageLinkDesktop).forEach((link) => {
    link.classList.remove('activeLink');
  });

  // إضافة الـ class "activeLink" للعنصر menShirt
  sectionPageLinkDesktop.menFormal.classList.add('activeLink');

  sectionsPages.home.classList.remove('activeHome');
  mainPageLinkD.home.classList.remove('page');
});

sectionPageLinkDesktop.menCasual.addEventListener('click', function () {
  // إزالة الـ class "activePage" من جميع العناصر
  Object.values(sectionsPages).forEach((section) => {
    section.classList.remove('activePage');
  });

  // إضافة الـ class "activePage" للعنصر menShirt
  sectionsPages.menCasual.classList.add('activePage');

  // إزالة الـ class "activeLink" من جميع الروابط
  Object.values(sectionPageLinkDesktop).forEach((link) => {
    link.classList.remove('activeLink');
  });

  // إضافة الـ class "activeLink" للعنصر menShirt
  sectionPageLinkDesktop.menShort.classList.add('activeLink');

  sectionsPages.home.classList.remove('activeHome');
  mainPageLinkD.home.classList.remove('page');
});

// Women's sections


sectionPageLinkDesktop.womenDress.addEventListener('click', function () {
  // إزالة الـ class "activePage" من جميع العناصر
  Object.values(sectionsPages).forEach((section) => {
    section.classList.remove('activePage');
  });

  // إضافة الـ class "activePage" للعنصر menShirt
  sectionsPages.womenDress.classList.add('activePage');

  // إزالة الـ class "activeLink" من جميع الروابط
  Object.values(sectionPageLinkDesktop).forEach((link) => {
    link.classList.remove('activeLink');
  });

  // إضافة الـ class "activeLink" للعنصر menShirt
  sectionPageLinkDesktop.womenDress.classList.add('activeLink');

  sectionsPages.home.classList.remove('activeHome');
  mainPageLinkD.home.classList.remove('page');
});


sectionPageLinkDesktop.womenFormal.addEventListener('click', function () {
  // إزالة الـ class "activePage" من جميع العناصر
  Object.values(sectionsPages).forEach((section) => {
    section.classList.remove('activePage');
  });

  // إضافة الـ class "activePage" للعنصر menShirt
  sectionsPages.womenFormal.classList.add('activePage');

  // إزالة الـ class "activeLink" من جميع الروابط
  Object.values(sectionPageLinkDesktop).forEach((link) => {
    link.classList.remove('activeLink');
  });

  // إضافة الـ class "activeLink" للعنصر menShirt
  sectionPageLinkDesktop.womenFormal.classList.add('activeLink');

  sectionsPages.home.classList.remove('activeHome');
  mainPageLinkD.home.classList.remove('page');
});


sectionPageLinkDesktop.womenCasual.addEventListener('click', function () {
  // إزالة الـ class "activePage" من جميع العناصر
  Object.values(sectionsPages).forEach((section) => {
    section.classList.remove('activePage');
  });

  // إضافة الـ class "activePage" للعنصر menShirt
  sectionsPages.womenCasual.classList.add('activePage');

  // إزالة الـ class "activeLink" من جميع الروابط
  Object.values(sectionPageLinkDesktop).forEach((link) => {
    link.classList.remove('activeLink');
  });

  // إضافة الـ class "activeLink" للعنصر menShirt
  sectionPageLinkDesktop.womenCasual.classList.add('activeLink');

  sectionsPages.home.classList.remove('activeHome');
  mainPageLinkD.home.classList.remove('page');
});

// Perfume sections
sectionPageLinkDesktop.clothes.addEventListener('click', function () {
  // إزالة الـ class "activePage" من جميع العناصر
  Object.values(sectionsPages).forEach((section) => {
    section.classList.remove('activePage');
  });

  // إضافة الـ class "activePage" للعنصر menShirt
  sectionsPages.clothes.classList.add('activePage');

  // إزالة الـ class "activeLink" من جميع الروابط
  Object.values(sectionPageLinkDesktop).forEach((link) => {
    link.classList.remove('activeLink');
  });

  // إضافة الـ class "activeLink" للعنصر menShirt
  sectionPageLinkDesktop.clothes.classList.add('activeLink');

  sectionsPages.home.classList.remove('activeHome');
  mainPageLinkD.home.classList.remove('page');
});

sectionPageLinkDesktop.deodorant.addEventListener('click', function () {
  // إزالة الـ class "activePage" من جميع العناصر
  Object.values(sectionsPages).forEach((section) => {
    section.classList.remove('activePage');
  });

  // إضافة الـ class "activePage" للعنصر menShirt
  sectionsPages.deodorant.classList.add('activePage');

  // إزالة الـ class "activeLink" من جميع الروابط
  Object.values(sectionPageLinkDesktop).forEach((link) => {
    link.classList.remove('activeLink');
  });

  // إضافة الـ class "activeLink" للعنصر menShirt
  sectionPageLinkDesktop.deodorant.classList.add('activeLink');

  sectionsPages.home.classList.remove('activeHome');
  mainPageLinkD.home.classList.remove('page');
});

sectionPageLinkDesktop.flower.addEventListener('click', function () {
  // إزالة الـ class "activePage" من جميع العناصر
  Object.values(sectionsPages).forEach((section) => {
    section.classList.remove('activePage');
  });

  // إضافة الـ class "activePage" للعنصر menShirt
  sectionsPages.flower.classList.add('activePage');

  // إزالة الـ class "activeLink" من جميع الروابط
  Object.values(sectionPageLinkDesktop).forEach((link) => {
    link.classList.remove('activeLink');
  });

  // إضافة الـ class "activeLink" للعنصر menShirt
  sectionPageLinkDesktop.flower.classList.add('activeLink');

  sectionsPages.home.classList.remove('activeHome');
  mainPageLinkD.home.classList.remove('page');
});

sectionPageLinkDesktop.airFreshener.addEventListener('click', function () {
  // إزالة الـ class "activePage" من جميع العناصر
  Object.values(sectionsPages).forEach((section) => {
    section.classList.remove('activePage');
  });

  // إضافة الـ class "activePage" للعنصر menShirt
  sectionsPages.airFreshener.classList.add('activePage');

  // إزالة الـ class "activeLink" من جميع الروابط
  Object.values(sectionPageLinkDesktop).forEach((link) => {
    link.classList.remove('activeLink');
  });

  // إضافة الـ class "activeLink" للعنصر menShirt
  sectionPageLinkDesktop.airFreshener.classList.add('activeLink');

  sectionsPages.home.classList.remove('activeHome');
  mainPageLinkD.home.classList.remove('page');
});


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



var favCount = 0;
var cartCount = 0;
let fav = [];
let cartItems = [];

// استرجاع المفضلة من localStorage
if (localStorage.getItem('favprudect') !== null) {
  fav = JSON.parse(localStorage.getItem('favprudect'));
  favCount = fav.length;  // تحديث عدد المفضلة عند تحميل الصفحة
}

// استرجاع السلة من localStorage
if (localStorage.getItem('cartproudct') !== null) {
  cartItems = JSON.parse(localStorage.getItem('cartproudct'));
}

var card = document.querySelectorAll('.card');
card.forEach(item => {
  var details = {
    image: item.querySelector('img').src,
    name: item.querySelector('.card-title').textContent,
    price: item.querySelector('.beforeDiscount').textContent,
    id: item.getAttribute('data-card-id')  // إضافة ID المنتج
  };

  // عند تحميل الصفحة نقوم بعرض المفضلة المخزنة من localStorage
  if (fav.length > 0) {
    fav.forEach(product => {
      var favList = document.getElementById('fav-list');
      var favItem = document.createElement('li');
      favItem.setAttribute('data-card-id', product.id);  // استخدام ID المنتج
      favItem.innerHTML = `
        <img src="${product.image}" alt="${product.name}" width="50px">
        <div class="product-name">${product.name}</div>
        <div class="price">${product.price}</div>
        <div id="remove"><i class="fa-solid fa-minus"></i></div>`;

      favList.appendChild(favItem);

      // إضافة مستمع الحدث لزر الإزالة
      favItem.querySelector("#remove").addEventListener('click', function () {
        favItem.remove(); // إزالة العنصر من القائمة
        favCount = --favCount; // تحديث عدد المفضلة
        document.getElementById('fav-count').textContent = favCount.toString();

        // إزالة المنتج من localStorage
        fav = fav.filter(item => item.id !== product.id);
        localStorage.setItem('favprudect', JSON.stringify(fav));

        // عرض رسالة "لا توجد عناصر" إذا كانت القائمة فارغة
        const favList = document.getElementById('fav-list');
        if (favList.children.length === 0) {
          const message = document.createElement('li');
          message.id = 'no-items-message';
          message.textContent = 'No items';
          favList.appendChild(message);
        }
      });
    });
  }

  item.querySelector('.favorite-btn').addEventListener('click', function () {
    this.classList.toggle('clicked');
    const originalCard = this.closest('.card');

    if (this.classList.contains('clicked')) {
      // تغيير الأيقونة
      this.querySelector('i').classList.remove('fa-heart-circle-plus');
      this.querySelector('i').classList.add('fa-heart-circle-minus');

      // تغيير عدد المفضلة
      favCount = ++favCount;
      document.getElementById('fav-count').textContent = favCount.toString();

      // إضافة المنتج إلى المفضلة في localStorage
      fav.push(details);
      localStorage.setItem('favprudect', JSON.stringify(fav));

      // إضافة المنتج إلى القائمة في الواجهة
      var favList = document.getElementById('fav-list');
      var favItem = document.createElement('li');
      favItem.setAttribute('data-card-id', details.id);  // استخدام ID المنتج
      favItem.innerHTML = `
        <img src="${details.image}" alt="${details.name}" width="50px">
        <div class="product-name">${details.name}</div>
        <div class="price">${details.price}</div>
        <div id="remove"><i class="fa-solid fa-minus"></i></div>`;

      favList.appendChild(favItem);

      // إزالة رسالة "لا توجد عناصر" إذا كانت موجودة
      const noItemsMessage = document.getElementById('no-items-message');
      if (noItemsMessage) {
        noItemsMessage.remove();
      }

      // إضافة مستمع الحدث لزر الإزالة
      favItem.querySelector("#remove").addEventListener('click', function () {
        favItem.remove(); // إزالة العنصر من القائمة
        favCount = --favCount; // تحديث عدد المفضلة
        document.getElementById('fav-count').textContent = favCount.toString();

        // إزالة المنتج من localStorage
        fav = fav.filter(item => item.id !== details.id);
        localStorage.setItem('favprudect', JSON.stringify(fav));

        // تغيير الأيقونة في البطاقة الأصلية
        const originalIcon = originalCard.querySelector('.fa-heart-circle-minus');
        if (originalIcon) {
          originalIcon.classList.remove('fa-heart-circle-minus');
          originalIcon.classList.add('fa-heart-circle-plus');
        }

        // إزالة "clicked" من الزر في البطاقة الأصلية
        originalCard.querySelector('.favorite-btn').classList.remove('clicked');

        // عرض رسالة "لا توجد عناصر" إذا كانت القائمة فارغة
        const favList = document.getElementById('fav-list');
        if (favList.children.length === 0) {
          const message = document.createElement('li');
          message.id = 'no-items-message';
          message.textContent = 'No items';
          favList.appendChild(message);
        }
      });
    } else {
      // تغيير الأيقونة مرة أخرى
      this.querySelector('i').classList.add('fa-heart-circle-plus');
      this.querySelector('i').classList.remove('fa-heart-circle-minus');

      // تغيير عدد المفضلة
      favCount = --favCount;
      document.getElementById('fav-count').textContent = favCount.toString();

      // إزالة المنتج من المفضلة في localStorage
      fav = fav.filter(item => item.id !== details.id);
      localStorage.setItem('favprudect', JSON.stringify(fav));

      // إزالة المنتج من القائمة في الواجهة
      const favList = document.getElementById('fav-list');
      const favItemToRemove = favList.querySelector(`[data-card-id="${details.id}"]`);
      if (favItemToRemove) {
        favItemToRemove.remove();
      }

      // عرض رسالة "لا توجد عناصر" إذا كانت القائمة فارغة
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
        <img src="${CP.image.src}" alt="${CP.name.textContent}" width="50px">
        <div class="product-name">${CP.name.textContent}</div>
        <div class="price">${CP.price.textContent}</div>
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





































// modal variables
const modal = document.querySelector('[data-modal]');
const modalCloseBtn = document.querySelector('[data-modal-close]');
const modalCloseOverlay = document.querySelector('[data-modal-overlay]');

// modal function
const modalCloseFunc = function () { modal.classList.add('closed') }

// modal eventListener
modalCloseOverlay.addEventListener('click', modalCloseFunc);
modalCloseBtn.addEventListener('click', modalCloseFunc);





// notification toast variables
const notificationToast = document.querySelector('[data-toast]');
const toastCloseBtn = document.querySelector('[data-toast-close]');

// notification toast eventListener
toastCloseBtn.addEventListener('click', function () {
  notificationToast.classList.add('closed');
});





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

  mobileMenuCloseBtn[i].addEventListener('click', mobileMenuCloseFunc);
  overlay.addEventListener('click', mobileMenuCloseFunc);

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

