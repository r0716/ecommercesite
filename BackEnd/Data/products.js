const products = [
    {
        "img": "../FrontEnd/images/blackdress2.jpeg",
        "department": "Womens",
        "product_title": "Elegant Silk Dress",
        "description": "A luxurious silk dress that exudes elegance and sophistication.",
        "price": 299.99,
        "material": "100% Silk",
        "care_instructions": "Dry clean only",
        "id": 758943
    },
    {
        "img": "../FrontEnd/images/blacklinenpants1.jpeg",
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
        "department": "Mens",
        "product_title": "Double Strap Slides",
        "description": "These cream slides are a packing essential for vacations, with moulded footbeds, and soles made from innovative Algae Foam",
        "price": 119.99,
        "material": "Algae Foam",
        "care_instructions": "Protect with suede cleaner, avoid water exposure",
        "id": 683925
    },
    {
        "img": "../FrontEnd/images/trousers.jpeg",
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
        "department": "Mens",
        "product_title": "Wool Sweater",
        "description": "A warm and stylish wool sweater for a cozy yet sophisticated look.",
        "price": 179.99,
        "material": "100% Merino Wool",
        "care_instructions": "Hand wash cold, lay flat to dry",
        "id": 596431
    }
];


module.exports ={
    //Return all items in products array.
    getProducts: function() {
    
            return products
    },
    //Return a single product in the product array per the id.
    getProduct: function(id) {
        const product = products.find(product => product.id === parseInt(id));

        console.log('inside getProduct', id, product)
        // if (!product) {
        //   throw new Error('Product not found');
        // }

  
        return product;      
      },
    //Return all products in the specified department  
    getDepartment: function(department)  {
        
        const departments = products.filter(product => product.department === department);
        console.log('inside getDepartment', products, departments ) 
        return departments
    },
    products 
      
    };

    

   