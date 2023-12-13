function addToCart(itemName, price, size) {
    const cartItemsElement = document.getElementById('cart-items');
  
    const listItem = document.createElement('li');
    listItem.textContent = `${itemName} - Size: ${size} - $${price}`;
  
    cartItemsElement.appendChild(listItem);
  }
  