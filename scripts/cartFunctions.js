let cart = [];

function addToCart(name, price, fromCart = false) {
  let item = cart.find((item) => item.name === name);
  let dishElement = document.getElementById(name.replace(/\s+/g, "_"));

  if (item) {
    item.amount++;
    updateCartTemplate();
  } else {
    cart.push({ name, price, amount: 1 });
    updateCartTemplate(name);
  }

  if (dishElement && !fromCart) {
    animateDishElement(dishElement);
  }
}

function animateDishElement(dishElement) {
  dishElement.classList.add("fade-out");

  setTimeout(() => {
    dishElement.classList.remove("fade-out");
    dishElement.classList.add("fade-in");

    setTimeout(() => {
      dishElement.classList.remove("fade-in");
    }, 500);
  }, 500);
}

function removeFromCart(name) {
  let item = cart.find((item) => item.name === name);
  if (item && item.amount > 0) {
    item.amount--;
    if (item.amount === 0) {
      deleteFromCart(name);
    } else {
      updateCartTemplate();
    }
  }
}

function deleteFromCart(name) {
  cart = cart.filter((item) => item.name !== name);
  updateCartTemplate();
}

function calculateSubtotal() {
  return cart
    .reduce((total, item) => total + item.price * item.amount, 0)
    .toFixed(2)
    .replace(".", ",");
}

function updateCartTemplate(updatedItemName) {
  let cartElement = document.getElementById("shopping_cart");
  cartElement.innerHTML = getCartTemplate();

  if (updatedItemName) {
    let updatedElement = Array.from(
      cartElement.getElementsByClassName("ware")
    ).find((item) => item.querySelector("h4").textContent === updatedItemName);

    if (updatedElement) {
      updatedElement.classList.add("fade-in");
    }
  }
}

window.addEventListener("scroll", function () {
  let cartButton = document.querySelector(".cart_button");
  let footer = document.querySelector("footer");

  let footerRect = footer.getBoundingClientRect();
  let windowHeight = window.innerHeight;

  if (footerRect.top < windowHeight) {
    cartButton.classList.add("hide");
  } else {
    cartButton.classList.remove("hide");
  }
});
