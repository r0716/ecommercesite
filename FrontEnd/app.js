const products = [
    {
        "img": "../FrontEnd/images/dress.jpeg",
        "img2": "../FrontEnd/images/dress2.jpeg",
        "img3": "../FrontEnd/images/dress3.jpeg",
        "img4": "../FrontEnd/images/dress4.jpeg",
        "img5": "../FrontEnd/images/dress5.jpeg",
        "department": "Womens",
        "product_title": "Elegant Silk Dress",
        "description": "A luxurious silk dress that exudes elegance and sophistication.",
        "price": 299.99,
        "material": "100% Silk",
        "care_instructions": "Dry clean only",
        "id": 758943
    },
    {
        "img": "../FrontEnd/images/sweater.jpeg",
        "img2": "../FrontEnd/images/sweater2.jpeg",
        "img3": "../FrontEnd/images/sweater3.jpeg",
        "img4": "../FrontEnd/images/sweater4.jpeg",
        "img5": "../FrontEnd/images/sweater5.jpeg",
        "department": "Womens",
        "product_title": "Cashmere Sweater",
        "description": "A soft and cozy cashmere sweater for ultimate comfort and style.",
        "price": 249.99,
        "material": "100% Cashmere",
        "care_instructions": "Hand wash cold, lay flat to dry",
        "id": 649327
    },
    {
        "img": "../FrontEnd/images/leatherjacket.jpeg",
        "img2": "../FrontEnd/images/leatherjacket2.jpeg",
        "img3": "../FrontEnd/images/leatherjacket3.jpeg",
        "img4": "../FrontEnd/images/leatherjacket4.jpeg",
        "img5": "../FrontEnd/images/leatherjacket5.jpeg",
        "department": "Womens",
        "product_title": "Leather Jacket",
        "description": "A timeless leather jacket that adds a touch of edginess to any outfit.",
        "price": 499.99,
        "material": "Genuine Leather",
        "care_instructions": "Professional leather clean only",
        "id": 312598
    },
    {
        "img": "../FrontEnd/images/whitedress2.jpeg",
        "img2": "../FrontEnd/images/whitedress2-2.jpeg",
        "img3": "../FrontEnd/images/whitedress2-3.jpeg",
        "img4": "../FrontEnd/images/whitedress2-4.jpeg",
        "img5": "../FrontEnd/images/whitedress2-5.jpeg",
        "department": "Womens",
        "product_title": "Linen Dress",
        "description": "Classic cream linen dress with a flattering fit, perfect for summer holiday.",
        "price": 179.99,
        "material": "62% Polyester / 33% Viscose / 5% Elastane",
        "care_instructions": "Machine wash cold, tumble dry low",
        "id": 874621
    },
    {
        "img": "../FrontEnd/images/silkblouse.jpeg",
        "img2": "../FrontEnd/images/silkblouse2.jpeg",
        "img3": "../FrontEnd/images/silkblouse3.jpeg",
        "img4": "../FrontEnd/images/silkblouse4.jpeg",
        "img5": "../FrontEnd/images/silkblouse5.jpeg",
        "department": "Womens",
        "product_title": "Silk Blouse",
        "description": "A luxurious silk blouse that adds a touch of elegance to any ensemble.",
        "price": 179.99,
        "material": "100% Silk",
        "care_instructions": "Dry clean only",
        "id": 539247
    },
    {
        "img": "../FrontEnd/images/bag2.jpeg",
        "img2": "../FrontEnd/images/bag2-2.jpeg",
        "img3": "../FrontEnd/images/bag2-3.jpeg",
        "img4": "../FrontEnd/images/bag2-4.jpeg",
        "img5": "../FrontEnd/images/bag2-5.jpeg",

        "department": "Womens",
        "product_title": "Bubble Handbag",
        "description": "A chic designer handbag crafted with exquisite attention to detail.",
        "price": 699.99,
        "material": "Genuine Leather",
        "care_instructions": "Keep away from moisture, clean with a soft cloth",
        "id": 186540
    },
    {
        "img": "../FrontEnd/images/woolsuit.jpeg",
        "img2": "../FrontEnd/images/woolsuit-2.jpeg",
        "img3": "../FrontEnd/images/woolsuit-3.jpeg",
        "img4": "../FrontEnd/images/woolsuit-4.jpeg",
        "img5": "../FrontEnd/images/woolsuit-5.jpeg",
        "department": "Mens",
        "product_title": "Wool Suit",
        "description": "A sophisticated wool suit for the modern gentleman.",
        "price": 799.99,
        "material": "100% Wool",
        "care_instructions": "Dry clean only",
        "id": 789012
    },
    {
        "img": "../FrontEnd/images/leatherbelt.jpeg",
        "img2": "../FrontEnd/images/leatherbelt-2.jpeg",
        "img3": "../FrontEnd/images/leatherbelt-3.jpeg",
        "img4": "../FrontEnd/images/leatherbelt-4.jpeg",
        "img5": "../FrontEnd/images/leatherbelt-5.jpeg",

        "department": "Mens",
        "product_title": "Leather Belt",
        "description": "A stylish leather belt that complements any outfit.",
        "price": 99.99,
        "material": "Genuine Leather",
        "care_instructions": "Wipe clean with a damp cloth",
        "id": 925703
    },
    {
        "img": "../FrontEnd/images/cottonshirt.jpeg",
        "img2": "../FrontEnd/images/cottonshirt-2.jpeg",
        "img3": "../FrontEnd/images/cottonshirt-3.jpeg",
        "img4": "../FrontEnd/images/cottonshirt-4.jpeg",
        "img5": "../FrontEnd/images/cottonshirt-5.jpeg",
        "department": "Mens",
        "product_title": "Cotton Shirt",
        "description": "A classic cotton shirt for a polished and refined look.",
        "price": 129.99,
        "material": "100% Cotton",
        "care_instructions": "Machine wash cold, tumble dry low",
        "id": 407162
    },
    {
        "img": "../FrontEnd/images/slides.jpeg",
        "img2": "../FrontEnd/images/slides-2.jpeg",
        "img3": "../FrontEnd/images/slides-3.jpeg",
        "img4": "../FrontEnd/images/slides-4.jpeg",
        "img5": "../FrontEnd/images/slides-5.jpeg",
        "department": "Mens",
        "product_title": "Double Strap Slides",
        "description": "Foam cream slides with pillowy moulded footbeds, a summer holiday essential.",
        "price": 119.99,
        "material": "Algae Foam",
        "care_instructions": "Wipe clean with warm water, avoid extended exposure",
        "id": 683925
    },
    {
        "img": "../FrontEnd/images/trousers.jpeg",
        "img2": "../FrontEnd/images/trousers-2.jpeg",
        "img3": "../FrontEnd/images/trousers-3.jpeg",
        "img4": "../FrontEnd/images/trousers-4.jpeg",
        "img5": "../FrontEnd/images/trousers-5.jpeg",
        "department": "Mens",
        "product_title": "Tailored Trousers",
        "description": "Classic tailored trousers with a modern fit, perfect for formal occasions.",
        "price": 199.99,
        "material": "72% Wool / 25% Polyester / 3% Elastane",
        "care_instructions": "Dry clean only",
        "id": 124086
    },
    {
        "img": "../FrontEnd/images/woolsweater.jpeg",
        "img2": "../FrontEnd/images/woolsweater-2.jpeg",
        "img3": "../FrontEnd/images/woolsweater-3.jpeg",
        "img4": "../FrontEnd/images/woolsweater-4.jpeg",
        "img5": "../FrontEnd/images/woolsweater-5.jpeg",

        "department": "Mens",
        "product_title": "Wool Sweater",
        "description": "A warm and stylish wool sweater for a cozy yet sophisticated look.",
        "price": 179.99,
        "material": "100% Merino Wool",
        "care_instructions": "Hand wash cold, lay flat to dry",
        "id": 596431
    }
];


//Selectors

const homebtn =  document.querySelector(".logo");
const mensDeptBtn =  document.querySelector("#mens");
const womensDeptBtn = document.querySelector("#womens") ;
const productsGrid = document.querySelector("#productsGrid");
const productButton = document.querySelector("#productCards")
const PORT = 3002


//---->>> Event Listeners

// ---->>>Return Mens Products when MEN is Clicked
mensDeptBtn.addEventListener('click', async () => {
    const response = await axios.get(`http://localhost:${PORT}/products/department/Mens`);
    const products = response.data.filter((product) => product.department === 'Mens');
    const cardsListString = products.map((product) =>
      `<div class="card border-light text-start btn btn-light productCard" data-product-id="${product.id}">
        <img src="${product.img}" class="card-img-top" alt="${product.product_title}">
        <p class="card-title">${product.product_title} <br>$${product.price}</p>
      </div>`
    ).join('');
  
    console.log(cardsListString);
    mainSection.innerHTML = cardsListString;
  
    // Add the click event listener to the product cards
    const productCards = document.querySelectorAll('.productCard');
    productCards.forEach((productCard) => {
      productCard.addEventListener('click', async (event) => {
        const productId = productCard.dataset.productId;
        const response = await axios.get(`http://localhost:${PORT}/products/id/${productId}`);
        const product = response.data;
  
 // HTML for the single product
 const singleProductString = `

 <div class="card mb-3" style="width: 80rem; height: 45rem;"  border-light text-start btn btn-light   productCard" data-product-id="${product.id}">
 <div class="row g-0">
     <div class="col-md-4">
         <img src="${product.img}" class="img-fluid rounded-start" alt="${product.product_title}">
     </div>
     <div class="col-md-8">
         <div class="card-body">
             <h3 class="card-title">${product.product_title}</h3>
             <p class="card-text">${product.description}</p>
             <p class="card-text"><small class="text-body-secondary">
                 Material: ${product.material}
             </small></p>
             <p class="card-text"><small class="text-body-secondary">
             Care: ${product.care_instructions}</small></p>
         <h5 class="card-title">$${product.price}</h5> 



         <div class="d-md-block" id="sizeButtons">
             <button type="button" class="btn btn-outline-dark">S</button>
             <button type="button" class="btn btn-outline-dark">M</button>
             <button type="button" class="btn btn-outline-dark">L</button>
             <button type="button" class="btn btn-outline-dark">XL</button>
         </div>


         <div class="action" id="cardButtons">
 
         <button type="button" class="btn btn-outline-secondary btn-lg">add to bag</button>
         <button type="button" class="btn btn-outline-danger btn-lg"> <img src="../FrontEnd//images/bookmark-heart.svg" alt="heartsave"></button>
         </div>
         <ul class="thumbnail nav nav-tabs">
         <li class="active"><a data-target="#pic-1" data-toggle="tab"><img src="${product.img2}" /></a></li>
         <li><a data-target="#pic-2" data-toggle="tab"><img src="${product.img3}" /></a></li>
         <li><a data-target="#pic-3" data-toggle="tab"><img src="${product.img4}" /></a></li>
         <li><a data-target="#pic-4" data-toggle="tab"><img src="${product.img5}" /></a></li>
       </ul>   
     </div>
   </div>
 </div>
</div>



`;

  
        mainSection.innerHTML = singleProductString;
      });
    });
  });
  
  // ---->>>Return Womens Products when WOMENS is Clicked
  womensDeptBtn.addEventListener('click', async () => {
    const response = await axios.get(`http://localhost:${PORT}/products/department/Womens`);
    const products = response.data.filter((product) => product.department === 'Womens');
    const cardsListString = products.map((product) =>
      `<div class="card border-light text-start btn btn-light productCard" data-product-id="${product.id}">
        <img src="${product.img}" class="card-img-top" alt="${product.product_title}">
        <p class="card-title">${product.product_title} <br>$${product.price}</p>
      </div>`
    ).join('');
  
    console.log(cardsListString);
    mainSection.innerHTML = cardsListString;
  
    // Add the click event listener to the product cards
    const productCards = document.querySelectorAll('.productCard');
    productCards.forEach((productCard) => {
      productCard.addEventListener('click', async (event) => {
        const productId = productCard.dataset.productId;
        const response = await axios.get(`http://localhost:${PORT}/products/id/${productId}`);
        const product = response.data;
  
        // HTML for the single product
        const singleProductString = `

        <div class="card mb-3" style="width: 80rem; height: 45rem;"  border-light text-start btn btn-light   productCard" data-product-id="${product.id}">
        <div class="row g-0">
            <div class="col-md-4">
                <img src="${product.img}" class="img-fluid rounded-start" alt="${product.product_title}">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h3 class="card-title">${product.product_title}</h3>
                    <p class="card-text">${product.description}</p>
                    <p class="card-text"><small class="text-body-secondary">
                        Material: ${product.material}
                    </small></p>
                    <p class="card-text"><small class="text-body-secondary">
                    Care: ${product.care_instructions}</small></p>
                <h5 class="card-title">$${product.price}</h5> 

   

                <div class="d-md-block" id="sizeButtons">
                <button type="button" class="btn btn-outline-dark">S</button>
                <button type="button" class="btn btn-outline-dark">M</button>
                <button type="button" class="btn btn-outline-dark">L</button>
                <button type="button" class="btn btn-outline-dark">XL</button>
            </div>
              


                <div class="action" id="cardButtons">
        
                <button type="button" class="btn btn-outline-secondary btn-lg">add to bag</button>
                <button type="button" class="btn btn-outline-danger btn-lg"> <img src="../FrontEnd//images/bookmark-heart.svg" alt="heartsave"></button>
                </div>
                <ul class="thumbnail nav nav-tabs">
                <li class="active"><a data-target="#pic-1" data-toggle="tab"><img src="${product.img2}" /></a></li>
                <li><a data-target="#pic-2" data-toggle="tab"><img src="${product.img3}" /></a></li>
                <li><a data-target="#pic-3" data-toggle="tab"><img src="${product.img4}" /></a></li>
                <li><a data-target="#pic-4" data-toggle="tab"><img src="${product.img5}" /></a></li>
              </ul>   
            </div>
          </div>
        </div>
      </div>



`;
  
        mainSection.innerHTML = singleProductString;
      });
    });

  });
  

// ---->>>Return To Landing Page when Logo is Clicked

       homebtn.addEventListener('click', function() {
        // Get the element to be updated
        let updatedContentString = 
    
            `  <div id="mainSection">
            <main>
              <!-- landing page images and navigation -->
              <div class="container text-center">
                <div class="row g-0 align-items-center">
                  <div class="col">
                    <div class="image-container">
                      <img src="images/landingmens.jpeg">
                    </div>
                  </div>
        
                <div class="col">
                  <div class="image-container">
                    <img src="images/whitedress2.jpeg">
                    <div class="button-container">
                      <button type="button" class="btn btn-dark" id="mens">MEN</button>
                      <button type="button" class="btn btn-light" id="womens">WOMEN</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        
        
              <div id="sectionCards">
                <section id="productsGrid"> </section>
              </div>  
          </main>  
        
          </div>
            
        `;
    
    let mainSection = document.getElementById('mainSection');
    mainSection.innerHTML = updatedContentString;


    
  });

  




  
  