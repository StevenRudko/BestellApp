function placeOrder() {
  let message = `
    <div class="empty_cart order-message">
      <div class="order-message-content">Testbestellung wurde vorgenommen!</div>
    </div>
  `;

  shopping_cart.innerHTML = "";
  shopping_cart.innerHTML = message;
}
