window.addEventListener("scroll", function () {
  var nav = document.getElementById("nav");
  if (window.scrollY >= 700) {
    nav.classList.add("nav-scrolled");
  } else {
    nav.classList.remove("nav-scrolled");
  }
});

async function fetchProducts() {
  const response = await fetch("./products.json");
  const data = await response.json();
  const cupcakeGrid = document.getElementById("cupcakeGrid");
  const weddingGrid = document.getElementById("weddingGrid");

  data.forEach((item) => {
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

const contactForm = document.getElementById("contactForm");
const successMsg = document.getElementById("successMsg");
const formBtn = document.getElementById("formBtn");
const footerForm = document.getElementById("footerForm");
const joinBtn = document.getElementById("joinBtn");

formBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");

  let isValid = true;

  name.classList.remove("warning");
  email.classList.remove("warning");
  message.classList.remove("warning");

  if (name.value.trim() === "") {
    name.classList.add("warning");
    isValid = false;
  } 
  
  if (email.value.trim() === "") {
    email.classList.add("warning");
    isValid = false;
  } else if (!isValidEmail(email.value.trim())) {
    email.classList.add("warning");
    isValid = false;
  }
  
  if (message.value.trim() === "") {
    message.classList.add("warning");
    isValid = false;
  }

  if (isValid) {
    contactForm.classList.add("hidden");
    successMsg.classList.remove("hidden");
    successMsg.classList.add("visible");
  }

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
});

joinBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const joinInput = document.getElementById("joinInput");
  const joinConfirm = document.getElementById("joinConfirm");

  let isValid = true;

  joinInput.classList.remove("warning");

  if (joinInput.value.trim() === "") {
    joinInput.classList.add("warning");
    isValid = false;
  } else if (!isValidEmail(joinInput.value.trim())) {
    joinInput.classList.add("warning");
    isValid = false;
  }

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  if (isValid) {
    joinBtn.disabled = true;
    joinInput.disabled = true;
    joinConfirm.classList.add("visible");
    joinConfirm.classList.remove("hidden");
  }
});

let navIsOpen = false;

document.getElementById('hamburger-menu').addEventListener('click', function() {
  const mobileNav = document.getElementById("mobileNav");

  if (navIsOpen) {
    mobileNav.style.top = "-400px";
  } else {
    mobileNav.style.top = "0";
  }  

  navIsOpen = !navIsOpen;
});
