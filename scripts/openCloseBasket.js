function openCloseBasket() {
  let basketWrapper = document.getElementsByClassName("basket_wrapper")[0];
  let button = document.getElementById("toggle_cart_button");
  let body = document.body;

  basketWrapper.classList.toggle("basket_closed");

  if (basketWrapper.classList.contains("basket_closed")) {
    button.textContent = "Warenkorb anzeigen";
    body.classList.remove("no-scroll");
  } else {
    button.textContent = "Warenkorb schließen";
    body.classList.add("no-scroll");
  }
}
