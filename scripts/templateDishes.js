function getDishesTemplate() {
  return restaurant.map(
    (restaurant) => `
    <div class="hero">
      <img class="hero_image" src="${restaurant.hero}" alt="Pizza" />
      <img class="restaurant_logo" src="${
        restaurant.logo
      }" alt="Happy Pizza Logo" />
    </div>

    <div class="content">
      <h2>${restaurant.restaurant_name}</h2>
      <a href="#" class="rating">Bewertung (${
        restaurant.rating
      } von 5 ⭐⭐⭐⭐⭐)</a>
      <div class="bar">
        <img class="arrow_right" src="./assets/icons/arrow_right.svg" alt="Arrow Right" />
        ${Object.keys(restaurant.types)
          .map(
            (dish) =>
              `<a class="types_of_dishes" href="#${dish}">${
                dish.charAt(0).toUpperCase() + dish.slice(1)
              }</a>`
          )
          .join(" ")}
      </div>
      <div class="dish_container">
        ${Object.keys(restaurant.types)
          .map(
            (types) => `
            <img id="${types}" class="main_dish" src="${
              restaurant.dish_images[types]
            }" alt="${types}" />
            <div class="dish_container">
              <h3>${types.charAt(0).toUpperCase() + types.slice(1)}</h3>
              ${restaurant.types[types]
                .map(
                  (type) => `
                  <div class="dish" id="${type.name.replace(
                    /\s+/g,
                    "_"
                  )}" onClick="addToCart('${type.name}', ${type.price})">
                    <h3>${type.name}</h3>
                    <span class="dish_description">${
                      type.description
                    }</span><br />
                    <span class="price">${parseFloat(type.price)
                      .toFixed(2)
                      .replace(".", ",")}€</span>
                    <img class="add" src="./assets/icons/add.svg" alt="Add" />
                  </div>`
                )
                .join("")}
            </div>`
          )
          .join("")}
      </div>
    </div>
    `
  );
}
