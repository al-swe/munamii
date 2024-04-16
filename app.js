window.addEventListener('scroll', function() {
    var nav = document.getElementById('nav');
    if (window.scrollY >= 700) {
      nav.classList.add('nav-scrolled');
    } else {
      nav.classList.remove('nav-scrolled');
    }
  });

  async function fetchProducts() {
    const response = await fetch("./products.json");
    const data = await response.json();
    const cupcakeGrid = document.getElementById("cupcakeGrid");
    const weddingGrid = document.getElementById("weddingGrid");

    console.log(data);

    data.forEach(item => {
        const card = document.createElement("div");
        card.classList.add("card");

        const cardImg = document.createElement("img");
        cardImg.src = item.img;
        cardImg.classList.add("card-img");

        const cardContent = document.createElement("div");
        cardContent.classList.add("card-content");

        const title = document.createElement("h3");
        title.innerText = item.title;

        const price = document.createElement("h4");
        price.innerText = `$${item.price}`;

        const btn = document.createElement("button");
        btn.innerText = "Add to cart";

        card.appendChild(cardImg);
        card.appendChild(cardContent);
        cardContent.appendChild(title);
        cardContent.appendChild(price);
        cardContent.appendChild(btn);

        if (item.type == "cupcake") {
          cupcakeGrid.appendChild(card);
        } else {
          weddingGrid.appendChild(card);
        }
        
    });
  }
  
  fetchProducts();
  