function getCartTemplate() {
  if (cart.length === 0) {
    return `<div class="empty_cart">Ihr Warenkorb ist leer.</div>`;
  }

  return `
  <div class="shopping_cart">
      <div class="total_price">
        ${cart
          .filter((item) => item.amount > 0)
          .map(
            (item) => `
            <div class="ware">
              <h4>${item.name}</h4>
              <div class="quantity">
                <img class="remove_cart" src="./assets/icons/remove.svg" alt="Remove" onclick="removeFromCart('${
                  item.name
                }')" />
                <span class="quantity_numbers">${item.amount}x</span>
                <img class="add_cart" src="./assets/icons/add.svg" alt="Add" onclick="addToCart('${
                  item.name
                }', ${item.price}, true)" />
                <span class="price_cart">${(item.amount * item.price)
                  .toFixed(2)
                  .replace(".", ",")}€</span>
                <img class="delete_cart" src="./assets/icons/delete.svg" alt="Delete" onclick="deleteFromCart('${
                  item.name
                }')" />
              </div>
            </div>`
          )
          .join("")}
      </div>
        <div class="subtotal">
          <span>Zwischensumme</span>
          <span>${calculateSubtotal()}€</span>
        </div>
    
        <div class="delivery_costs">
          <span>Lieferkosten</span>
          <span>${parseFloat(restaurant[0].delivery_cost)
            .toFixed(2)
            .replace(".", ",")}€</span>
        </div>
    
        <div class="total">
          <span>Gesamt</span>
          <span>${(
            parseFloat(calculateSubtotal()) +
            parseFloat(restaurant[0].delivery_cost)
          )
            .toFixed(2)
            .replace(".", ",")}€</span>
        </div>
        <button class="order_button" onclick="placeOrder()">Bestellen</button>
      </div> 
    `;
}
