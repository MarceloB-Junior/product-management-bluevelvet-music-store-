const products = [
    {
        id: "1",
        name: "Bee Thousand",
        category: "Music - CD",
        brand: "Guided By Voices Inc.",
        mainImage: "images/gbv-bee-thousand-cover.jpeg",
        shortDescription: "The iconic 1994 album by Guided By Voices.",
        fullDescription: "Bee Thousand is the seventh studio album by Guided By Voices. A cult classic, it influenced lo-fi and indie rock artists.",
        listPrice: "$14.99",
        discount: "10%",
        enabled: "Yes",
        inStock: "Yes",
        creationTime: "2024-11-19",
        updateTime: "2024-11-19",
        dimensions: "5.5 x 5.0 x 0.3 inches",
        weight: "0.15 pounds",
        cost: "$8.00",
        productDetails: [
            { name: "Release Year", value: "1994" },
            { name: "Genre", value: "Indie Rock, Lo-Fi" }
        ]
    },
    {
        id: "2",
        name: "Pavement - Slanted and Enchanted",
        category: "Music - MP3",
        brand: "Domino Recording Co",
        mainImage: "images/pavment-slanted-and-enchanted-cover.jpeg", 
        shortDescription: "Slanted and Enchanted (1992) is the debut album by Pavement, considered a landmark in alternative rock.",
        fullDescription: "With a mix of distorted guitars, cryptic lyrics, and a lo-fi sound, the album captured the essence of '90s indie rock.",
        listPrice: "$14.99",
        discount: "10%",
        enabled: "Yes",
        inStock: "Yes",
        creationTime: "2024-11-19",
        updateTime: "2024-11-19",
        dimensions: "5.5 x 5.0 x 0.3 inches",
        weight: "0.15 pounds",
        cost: "$8.00",
        productDetails: [
            { name: "", value: "" },
            { name: "Genre", value: "Rock" }
        ]
    },
    {
        id: "3",
        name: "Neutral Milk Hotel T-Shirt",
        category: "T-Shirt",
        brand: "Merge Records",
        mainImage: "images/neutral-milk-hotel-in-the-aeroplane-over-the-sea-tshirt.jpeg", 
        shortDescription: "A Neutral Milk Hotel T-shirt features a design inspired by the band's distinctive style, often showcasing artwork or lyrics from their iconic album In the Aeroplane Over the Sea.",
        fullDescription: "This shirt is perfect for fans of the indie-folk band, offering both comfort and a way to display their love for the band's unique sound and memorable imagery.",
        listPrice: "$19,99",
        discount: "10%",
        enabled: "Yes",
        inStock: "Yes",
        creationTime: "2024-11-19",
        updateTime: "2024-11-19",
        dimensions: "5.5 x 5.0 x 0.3 inches",
        weight: "0.15 pounds",
        cost: "$10.00",
        productDetails: [
            { name: "", value: "" },
            { name: "Genre", value: "Rock" }
        ]
    },
    {
        id: "4",
        name: "Miles Davis",
        category: "Music - Disco",
        brand: "Abril Cultural",
        mainImage: "images/disco-jazz.jpg", 
        shortDescription: "The iconic Miles Davis.",
        fullDescription: "Miles Davis was a jazz icon, known for reinventing the genre throughout his career. His albums, like *Kind of Blue* and *Bitches Brew*, brought innovation and emotional depth, leaving a lasting legacy that transcends jazz and influences artists worldwide.",
        listPrice: "$59,99",
        discount: "10%",
        enabled: "Yes",
        inStock: "Yes",
        creationTime: "2024-11-20",
        updateTime: "2024-11-20",
        dimensions: "5.5 x 5.0 x 0.3 inches",
        weight: "0.15 pounds",
        cost: "$20.00",
        productDetails: [
            { name:"Miles Davis", value:"" },
            { name:"Genre", value:"Jazz" }
         ]
    },
    {
      id:"5", 
      name:"Legião Urbana", 
      category:"Music - Disco", 
      brand:"Abril Cultural", 
      mainImage:"images/disco-legiao.jpg", 
      shortDescription:"Camping Song.", 
      fullDescription:"Legião Urbana was one of the most iconic Brazilian rock bands, known for their poetic and socially conscious lyrics. Led by Renato Russo, their music blends introspection, critique, and memorable melodies, inspiring generations.", 
      listPrice:"$59,99", 
      discount:"10%", 
      enabled:"Yes", 
      inStock:"Yes", 
      creationTime:"2024-11-20", 
      updateTime:"2024-11-20", 
      dimensions:"5.5 x 5.0 x 0.3 inches", 
      weight:"0.15 pounds", 
      cost:"$20.00", 
      productDetails:[{name:"Legião Urbana", value:""}, {name:"Genre", value:"Rock"}]
    },
    {
       id:"6", 
       name:"Guitar keychain", 
       category:"Keychain", 
       brand:"---", 
       mainImage:"images/guitarra-chaveiro.jpg", 
       shortDescription:"Guitar keychain for rock lovers.", 
       fullDescription:"A guitar-shaped keychain, perfect for music lovers. Designed with sparkling details that catch the light, adding a touch of style and personality.", 
       listPrice:"$14,99", 
       discount:"10%", 
       enabled:"Yes", 
       inStock:"Yes", 
       creationTime:"2024-11-20", 
       updateTime:"2024-11-20", 
       dimensions:"1 x 0,5 x 0.5 inches", 
       weight:"0.15 pounds", 
       cost:"$2.00", 
       productDetails:[{name:"", value:""}, {name:"Genre", value:"Rock"}]
    },
    {
       id:"7", 
       name:"Metallica mug", 
       category:"Mug", 
       brand:"---", 
       mainImage:"images/metalica-caneca.jpg", 
       shortDescription:"Metallica mug for Metallica fans.", 
       fullDescription:"Metal mug with a unique design.", 
       listPrice:"$27,99", 
       discount:"10%", 
       enabled:"Yes", 
       inStock:"Yes", 
       creationTime:"2024-11-20", 
       updateTime:"2024-11-20",  
       dimensions:'1 x 0,5 x 0.5 inches',  
       weight:'0.15 pounds',  
       cost:'$7.00',  
       productDetails:[{name:'', value:''}, {name:'Genre', value:'Rock'}]
    },
    {
      id:'8',  
      name:'Music keyboard',  
      category:'Musical Instrument',  
      brand:'Yamaha',  
      mainImage:'images/teclado.jpg',  
      shortDescription:'Professional musical keyboard.',  
      fullDescription:'A professional musical keyboard designed for musicians, offering a range of high-quality sounds, advanced features, and a responsive touch for both live performances and studio recordings.',  
      listPrice:'$450,00',  
      discount:'10%',  
      enabled:'Yes',  
      inStock:'Yes',  
      creationTime:'2024-11-20',  
      updateTime:'2024-11-20',  
      dimensions:'1 x 0,5 x 0.5 inches',  
      weight:'0.15 pounds',  
      cost:'$150.00',  
      productDetails:[{name:'', value:''}, {name:'', value:''}]
    },
    {
     id:'9',   
     name:'Turntable',   
     category:'Eletro - Disco',   
     brand:'---',   
     mainImage:'images/toca-discos.jpg',   
     shortDescription:'Professional musical keyboard.',   
     fullDescription:'A stylish and modern turntable designed to play vinyl records with high-quality sound. With a classic design and advanced technology, it offers an authentic listening experience for music enthusiasts.',   
     listPrice:'$500,00',   
     discount:'10%',   
     enabled:'Yes',   
     inStock:'Yes',   
     creationTime:'2024-11-20',   
     updateTime:'2024-11-20',   
     dimensions:'1 x 0,5 x 0.5 inches',   
     weight:'0.15 pounds',   
     cost:'$200.00',   
     productDetails:[{name:'', value:''}, {name:'', value:''}]
   },
   {
    "id": "10",
    "name": "New Divide",
    "category": "Music - Single",
    "brand": "Linkin Park",
    "mainImage": "images/new-divide.jpg",
    "shortDescription": "Single from the soundtrack of Transformers.",
    "fullDescription": "New Divide is a song by American rock band Linkin Park, released as a single for the film Transformers. It features a blend of electronic and rock elements, showcasing the band's signature sound.",
    "listPrice": "$1.29",
    "discount": "0%",
    "enabled": "Yes",
    "inStock": "Yes",
    "creationTime": "2024-11-22",
    "updateTime": "2024-11-22",
    "dimensions": "5 x 5 x 0.1 inches",
    "weight": "0.1 pounds",
    "cost": "$0.50",
    "productDetails": [
        { "name": "Release Year", "value": "2009" },
        { "name": "Genre", "value": "Alternative Rock" }
    ]
  }
];

function loadProductDetails(products) {
    const productsContainer = document.getElementById('products');
    products.forEach((product) => {
        const productHTML = `
            <div class="product">
                <img src="${product.mainImage}" alt="${product.name}" class="product-image">
                <p>ID: <span id="product-id-${product.id}">${product.id}</span></p>
                <p>Name: <span id="product-name-${product.id}">${product.name}</span></p>
                <p>Category: <span id="category-${product.id}">${product.category}</span></p>
                <p>Brand: <span id="brand-${product.id}">${product.brand}</span></p>
                <p>Short Description: <span id="short-description-${product.id}">${product.shortDescription}</span></p>
                <p>Full Description: <span id="full-description-${product.id}">${product.fullDescription}</span></p>
                <p>List Price: <span id="list-price-${product.id}">${product.listPrice}</span></p>
                <p>Discount: <span id="discount-${product.id}">${product.discount}</span></p>
                <p>Enabled: <span id="enabled-${product.id}">${product.enabled}</span></p>
                <p>In Stock: <span id="in-stock-${product.id}">${product.inStock}</span></p>
                <p>Creation Time: <span id="creation-time-${product.id}">${product.creationTime}</span></p>
                <p>Update Time: <span id="update-time-${product.id}">${product.updateTime}</span></p>
                <p>Dimensions: <span id="dimensions-${product.id}">${product.dimensions}</span></p>
                <p>Weight: <span id="weight-${product.id}">${product.weight}</span></p>
                <p>Cost: <span id="cost-${product.id}">${product.cost}</span></p>
                <ul id="product-details-list-${product.id}"></ul>
                <button class="view-details-btn" data-product-id="${product.id}">View Details</button>
            </div>`;
        
        productsContainer.innerHTML += productHTML;

        product.productDetails.forEach(detail => {
            const detailItem = document.createElement("li");
            detailItem.textContent = `${detail.name}: ${detail.value}`;
            document.getElementById(`product-details-list-${product.id}`).appendChild(detailItem);
        });
    });

    const viewDetailsButtons = document.querySelectorAll(".view-details-btn");
    viewDetailsButtons.forEach(button => {
         button.onclick = function () {
             const productId = button.getAttribute("data-product-id");
             showProductDetails(productId);
         };
    });
}

function showProductDetails(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
         alert(`Detalhes do Produto:\n\n` +
             `Nome: ${product.name}\n` +
             `Categoria: ${product.category}\n` +
             `Marca: ${product.brand}\n` +
             `Descrição Completa: ${product.fullDescription}\n` +
             `Preço: ${product.listPrice}\n` +
             `Desconto: ${product.discount}\n` +
             `Em Estoque: ${product.inStock}\n`);
    } else {
         alert("Produto não encontrado!");
    }
}

loadProductDetails(products);