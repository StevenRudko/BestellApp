function render() {
  let restaurantSite = document.getElementById("restaurant_site");
  restaurantSite.innerHTML = getDishesTemplate();
  updateCartTemplate();
}
