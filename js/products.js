function show1() {
    document.getElementById("focus1").style.display = "block";

    document.getElementById("focus2").style.display = "none";
    document.getElementById("focus3").style.display = "none";
    document.getElementById("focus4").style.display = "none";

}

function show2() {
    document.getElementById("focus2").style.display = "block";

    document.getElementById("focus1").style.display = "none";
    document.getElementById("focus3").style.display = "none";
    document.getElementById("focus4").style.display = "none";

}

function show3() {
    document.getElementById("focus3").style.display = "block";

    document.getElementById("focus1").style.display = "none";
    document.getElementById("focus2").style.display = "none";
    document.getElementById("focus4").style.display = "none";

}

function show4() {
    document.getElementById("focus4").style.display = "block";

    document.getElementById("focus1").style.display = "none";
    document.getElementById("focus2").style.display = "none";
    document.getElementById("focus3").style.display = "none";

}


// shopping cart

let cart = [];

function toggleCart() {
    const cartPopup = document.getElementById('shopping-cart');
    if (cartPopup.style.display === 'block') {
        cartPopup.style.display = 'none';
    } else {
        cartPopup.style.display = 'block';
        renderCart();
    }
}

function closeCart() {
    document.getElementById('shopping-cart').style.display = 'none';
}

function updateCartCount() {
    const cartCountElement = document.getElementById('cart-count');
    let totalItems = 0;
    cart.forEach(item => {
        totalItems += item.quantity;
    });
    cartCountElement.textContent = totalItems;
}

function renderCart() {
    const cartItemsContainer = document.getElementById('cart-items-container');
    const cartTotalElement = document.getElementById('cart-total');
    const emptyCartMessage = document.getElementById('empty-cart-message');
    cartItemsContainer.innerHTML = '';
    let total = 0;

    if (cart.length === 0) {
        emptyCartMessage.style.display = 'block';
    } else {
        cart.forEach((item, index) => {
            const cartItemDiv = document.createElement('div');
            cartItemDiv.classList.add('cart-item');
            cartItemDiv.innerHTML = `
                <div class="cart-item-info">
                    <h5>${item.name}</h5>
                    <p>${item.quantity} x Php ${item.price.toFixed(2)}</p>
                </div>
                <button class="remove-item-btn" onclick="removeFromCart(${index})">Remove</button>
            `;
            cartItemsContainer.appendChild(cartItemDiv);
            total += item.price * item.quantity;
        });
    }

    cartTotalElement.textContent = `Php ${total.toFixed(2)}`;
    updateCartCount();
}

function addToCart(productName, price, quantityInputId = null) {
    let quantity = 1;
    if (quantityInputId) {
        const quantityInput = document.getElementById(quantityInputId);
        if (quantityInput) {
            quantity = parseInt(quantityInput.value);
            if (isNaN(quantity) || quantity < 1) {
                alert('Please enter a valid quantity.');
                return;
            }
        }
    }

    const existingItemIndex = cart.findIndex(item => item.name === productName);

    if (existingItemIndex > -1) {
        cart[existingItemIndex].quantity += quantity;
    } else {
        cart.push({ name: productName, price: price, quantity: quantity });
    }
    renderCart();
    alert(`${quantity} of ${productName} added to cart!`); // Simple confirmation
}

function removeFromCart(index) {
    cart.splice(index, 1);
    renderCart();
}

function checkout() {
    const cartTotalElement = document.getElementById('cart-total');
    if (cart.length === 0) {
        alert('Your cart is empty. Add some items before checking out!');
        return;
    }
    alert('Proceeding to checkout! Your total is: ' + document.getElementById('cart-total').textContent);
    cart = [];
    total = 0;
    cartTotalElement.textContent = `Php ${total.toFixed(2)}`;
    renderCart();
    closeCart();
}