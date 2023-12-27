const cartItems = [];

function addToCart(productName, price) {
    cartItems.push({ name: productName, price: price });
    updateCart();
}

function removeCartItem(index) {
    cartItems.splice(index, 1);
    updateCart();
}

function updateCart() {
    const cartList = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");

    // Clear existing cart items
    cartList.innerHTML = "";

    let total = 0;

    // Add items to the cart
    cartItems.forEach((item, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${item.name} - RM ${item.price.toFixed(2)}`;

        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.className = "remove-button"; // Add a CSS class for styling
        removeButton.onclick = function () {
            removeCartItem(index);
        };

        listItem.appendChild(removeButton);
        cartList.appendChild(listItem);
        total += parseFloat(item.price);
    });

    // Update the total
    cartTotal.textContent = ` ${total.toFixed(2)}`;
}

