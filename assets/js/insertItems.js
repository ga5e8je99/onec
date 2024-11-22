document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("productForm");
  const tablesContainer = document.getElementById("tablesContainer");

  // Load products from localStorage
  const products = JSON.parse(localStorage.getItem("products")) || {};

  // Extract and log product types to the console
  const productTypes = Object.keys(products);
  const px = Object.keys(productTypes);
//   console.log(products.Formal[0].name)
for (let i = 0; i < products.Formal.length; i++) {
    document.querySelector('#men-formal .items-content').innerHTML=`
    <div class="card" style="width: 18rem;" data-categories="formal,medium,cotton" data-id="product-1">
        <img class="card-img-top" src="${products.Formal[i].image}" alt="Men's Formal Suit">
        <div class="card-body">
            <h5 class="card-title">${products.Formal[i].name}</h5>
            <p class="card-text">${products.Formal[i].details}.</p>
            <span class="price">
                <div class="afterDiscount">$${products.Formal[i].customerPrice}</div>
                <div class="beforeDiscount">$249.99</div>
            </span>
            <div class="options">
                <div class="btn cart-btn"><i class="fa-thin fa-cart-plus"></i></div>
                <div class="btn favorite-btn"><i class="fa-thin fa-heart-circle-plus"></i></div>
            </div>
        </div>
    </div>
    `
    
};
for (let i = 0; i < products.Formal.length; i++) {
    document.querySelector('#men-formal .items-content').innerHTML=`
    <div class="card" style="width: 18rem;" data-categories="formal,medium,cotton" data-id="product-1">
        <img class="card-img-top" src="${products.Formal[i].image}" alt="Men's Formal Suit">
        <div class="card-body">
            <h5 class="card-title">${products.Formal[i].name}</h5>
            <p class="card-text">${products.Formal[i].details}.</p>
            <span class="price">
                <div class="afterDiscount">$${products.Formal[i].customerPrice}</div>
                <div class="beforeDiscount">$249.99</div>
            </span>
            <div class="options">
                <div class="btn cart-btn"><i class="fa-thin fa-cart-plus"></i></div>
                <div class="btn favorite-btn"><i class="fa-thin fa-heart-circle-plus"></i></div>
            </div>
        </div>
    </div>
    `
    
};
for (let i = 0; i < products.Formal.length; i++) {
    document.querySelector('#men-formal .items-content').innerHTML=`
    <div class="card" style="width: 18rem;" data-categories="formal,medium,cotton" data-id="product-1">
        <img class="card-img-top" src="${products.Formal[i].image}" alt="Men's Formal Suit">
        <div class="card-body">
            <h5 class="card-title">${products.Formal[i].name}</h5>
            <p class="card-text">${products.Formal[i].details}.</p>
            <span class="price">
                <div class="afterDiscount">$${products.Formal[i].customerPrice}</div>
                <div class="beforeDiscount">$249.99</div>
            </span>
            <div class="options">
                <div class="btn cart-btn"><i class="fa-thin fa-cart-plus"></i></div>
                <div class="btn favorite-btn"><i class="fa-thin fa-heart-circle-plus"></i></div>
            </div>
        </div>
    </div>
    `
    
};


for (let i = 0; i < products.Shirt.length; i++) {
    document.querySelector('#men-shirt .items-content').innerHTML=`
    <div class="card" style="width: 18rem;" data-categories="formal,medium,cotton" data-id="product-1">
        <img class="card-img-top" src="${products.Shirt[i].image}" alt="Men's Formal Suit">
        <div class="card-body">
            <h5 class="card-title">${products.Shirt[i].name}</h5>
            <p class="card-text">${products.Shirt[i].details}.</p>
            <span class="price">
                <div class="afterDiscount">$${products.Shirt[i].customerPrice}</div>
                <div class="beforeDiscount">$249.99</div>
            </span>
            <div class="options">
                <div class="btn cart-btn"><i class="fa-thin fa-cart-plus"></i></div>
                <div class="btn favorite-btn"><i class="fa-thin fa-heart-circle-plus"></i></div>
            </div>
        </div>
    </div>
    `
    
};


for (let i = 0; i < products.Shorts.length; i++) {
    document.querySelector('#men-short .items-content').innerHTML=`
    <div class="card" style="width: 18rem;" data-categories="formal,medium,cotton" data-id="product-1">
        <img class="card-img-top" src="${products.Shorts[i].image}" alt="Men's Formal Suit">
        <div class="card-body">
            <h5 class="card-title">${products.Shorts[i].name}</h5>
            <p class="card-text">${products.Shorts[i].details}.</p>
            <span class="price">
                <div class="afterDiscount">$${products.Shorts[i].customerPrice}</div>
                <div class="beforeDiscount">$${products.Shorts[i].discountPrice}</div>
            </span>
            <div class="options">
                <div class="btn cart-btn"><i class="fa-thin fa-cart-plus"></i></div>
                <div class="btn favorite-btn"><i class="fa-thin fa-heart-circle-plus"></i></div>
            </div>
        </div>
    </div>
    `
    
};

for (let i = 0; i < products.SafetyShoes.length; i++) {
    document.querySelector('#men-safety .items-content').innerHTML=`
    <div class="card" style="width: 18rem;" data-categories="formal,medium,cotton" data-id="product-1">
        <img class="card-img-top" src="${products.SafetyShoes[i].image}" alt="Men's Formal Suit">
        <div class="card-body">
            <h5 class="card-title">${products.SafetyShoes[i].name}</h5>
            <p class="card-text">${products.SafetyShoes[i].details}.</p>
            <span class="price">
                <div class="afterDiscount">$${products.SafetyShoes[i].customerPrice}</div>
                <div class="beforeDiscount">$${products.SafetyShoes[i].discountPrice}</div>
            </span>
            <div class="options">
                <div class="btn cart-btn"><i class="fa-thin fa-cart-plus"></i></div>
                <div class="btn favorite-btn"><i class="fa-thin fa-heart-circle-plus"></i></div>
            </div>
        </div>
    </div>
    `
    
};
for (let i = 0; i < products.Casual.length; i++) {
    document.querySelector('#women-casual .items-content').innerHTML=`
    <div class="card" style="width: 18rem;" data-categories="formal,medium,cotton" data-id="product-1">
        <img class="card-img-top" src="${products.Casual[i].image}" alt="Men's Formal Suit">
        <div class="card-body">
            <h5 class="card-title">${products.Casual[i].name}</h5>
            <p class="card-text">${products.Casual[i].details}.</p>
            <span class="price">
                <div class="afterDiscount">$${products.Casual[i].customerPrice}</div>
                <div class="beforeDiscount">$${products.Casual[i].discountPrice}</div>
            </span>
            <div class="options">
                <div class="btn cart-btn"><i class="fa-thin fa-cart-plus"></i></div>
                <div class="btn favorite-btn"><i class="fa-thin fa-heart-circle-plus"></i></div>
            </div>
        </div>
    </div>
    `
    
};
for (let i = 0; i < products.Dress.length; i++) {
    document.querySelector('#women-dress .items-content').innerHTML=`
    <div class="card" style="width: 18rem;" data-categories="formal,medium,cotton" data-id="product-1">
        <img class="card-img-top" src="${products.Dress[i].image}" alt="Men's Formal Suit">
        <div class="card-body">
            <h5 class="card-title">${products.Dress[i].name}</h5>
            <p class="card-text">${products.Dress[i].details}.</p>
            <span class="price">
                <div class="afterDiscount">$${products.Dress[i].customerPrice}</div>
                <div class="beforeDiscount">$${products.Dress[i].discountPrice}</div>
            </span>
            <div class="options">
                <div class="btn cart-btn"><i class="fa-thin fa-cart-plus"></i></div>
                <div class="btn favorite-btn"><i class="fa-thin fa-heart-circle-plus"></i></div>
            </div>
        </div>
    </div>
    `
    
};

for (let i = 0; i < products.ClothesPerfume.length; i++) {
    document.querySelector('#clothes-perfume .items-content').innerHTML=`
    <div class="card" style="width: 18rem;" data-categories="formal,medium,cotton" data-id="product-1">
        <img class="card-img-top" src="${products.ClothesPerfume[i].image}" alt="Men's Formal Suit">
        <div class="card-body">
            <h5 class="card-title">${products.ClothesPerfume[i].name}</h5>
            <p class="card-text">${products.ClothesPerfume[i].details}.</p>
            <span class="price">
                <div class="afterDiscount">$${products.ClothesPerfume[i].customerPrice}</div>
                <div class="beforeDiscount">$${products.ClothesPerfume[i].discountPrice}</div>
            </span>
            <div class="options">
                <div class="btn cart-btn"><i class="fa-thin fa-cart-plus"></i></div>
                <div class="btn favorite-btn"><i class="fa-thin fa-heart-circle-plus"></i></div>
            </div>
        </div>
    </div>
    `
    
};

for (let i = 0; i < products.Deodorant.length; i++) {
    document.querySelector('#deodorant .items-content').innerHTML=`
    <div class="card" style="width: 18rem;" data-categories="formal,medium,cotton" data-id="product-1">
        <img class="card-img-top" src="${products.Deodorant[i].image}" alt="Men's Formal Suit">
        <div class="card-body">
            <h5 class="card-title">${products.Deodorant[i].name}</h5>
            <p class="card-text">${products.Deodorant[i].details}.</p>
            <span class="price">
                <div class="afterDiscount">$${products.Deodorant[i].customerPrice}</div>
                <div class="beforeDiscount">$${products.Deodorant[i].discountPrice}</div>
            </span>
            <div class="options">
                <div class="btn cart-btn"><i class="fa-thin fa-cart-plus"></i></div>
                <div class="btn favorite-btn"><i class="fa-thin fa-heart-circle-plus"></i></div>
            </div>
        </div>
    </div>
    `
    
};

for (let i = 0; i < products.FlowerFragrance.length; i++) {
    document.querySelector('#flower-fragrance .items-content').innerHTML=`
    <div class="card" style="width: 18rem;" data-categories="formal,medium,cotton" data-id="product-1">
        <img class="card-img-top" src="${products.FlowerFragrance[i].image}" alt="Men's Formal Suit">
        <div class="card-body">
            <h5 class="card-title">${products.FlowerFragrance[i].name}</h5>
            <p class="card-text">${products.FlowerFragrance[i].details}.</p>
            <span class="price">
                <div class="afterDiscount">$${products.FlowerFragrance[i].customerPrice}</div>
                <div class="beforeDiscount">$${products.FlowerFragrance[i].discountPrice}</div>
            </span>
            <div class="options">
                <div class="btn cart-btn"><i class="fa-thin fa-cart-plus"></i></div>
                <div class="btn favorite-btn"><i class="fa-thin fa-heart-circle-plus"></i></div>
            </div>
        </div>
    </div>
    `
    
};

for (let i = 0; i < products.AirFreshener.length; i++) {
    document.querySelector('#air-freshener .items-content').innerHTML=`
    <div class="card" style="width: 18rem;" data-categories="formal,medium,cotton" data-id="product-1">
        <img class="card-img-top" src="${products.AirFreshener[i].image}" alt="Men's Formal Suit">
        <div class="card-body">
            <h5 class="card-title">${products.AirFreshener[i].name}</h5>
            <p class="card-text">${products.AirFreshener[i].details}.</p>
            <span class="price">
                <div class="afterDiscount">$${products.AirFreshener[i].customerPrice}</div>
                <div class="beforeDiscount">$${products.AirFreshener[i].discountPrice}</div>
            </span>
            <div class="options">
                <div class="btn cart-btn"><i class="fa-thin fa-cart-plus"></i></div>
                <div class="btn favorite-btn"><i class="fa-thin fa-heart-circle-plus"></i></div>
            </div>
        </div>
    </div>
    `
    
};

{/*
          <option value="Shirt">Shirt</option>
          <option value="Shorts">Shorts</option>
          <option value="Safety Shoes">SafetyShoes</option>
          <option value="Formal">Formal</option>
          <option value="Casual">Casual</option>
          <option value="Dress & Frock">Dress</option>
          <option value="Clothes Perfume">ClothesPerfume</option>
          <option value="Deodorant">Deodorant</option>
          <option value="Flower Fragrance">FlowerFragrance</option>
          <option value="Air Freshener">AirFreshener</option> */}



  // باقي الكود الخاص بالمعالجة
});
