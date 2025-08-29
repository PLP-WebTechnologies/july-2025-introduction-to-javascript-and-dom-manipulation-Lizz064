// Variables
let taxRate = 0.1; 
let freeShippingThreshold = 50;

// Conditionals 
let userIsMember = true;
if (userIsMember) {
  console.log("Welcome back, valued member!");
} else {
  console.log("Welcome guest! Sign up for rewards.");
}


//Functions for price
function formatPrice(price) {
  return "$" + price.toFixed(2);
}

// Function to calculate total 
function calculateTotal(cartItems) {
  let subtotal = 0;
  cartItems.forEach(item => subtotal += item.price);
  let total = subtotal + subtotal * taxRate;
  return total;
}


// Loops

const products = [
  { name: "T-shirt", price: 15 },
  { name: "Shoes", price: 30 },
  { name: "Hat", price: 10 }
];

let cart = [];


for (let i = 0; i < products.length; i++) {
  console.log(products[i].name + " - " + formatPrice(products[i].price));
}


let count = 3;
while (count > 0) {
  console.log("Checkout in " + count + "...");
  count--;
}

//  DOM Manipulation
function renderProducts() {
  const productDiv = document.getElementById("products");
  products.forEach((product, index) => {
    let div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <h3>${product.name}</h3>
      <p>${formatPrice(product.price)}</p>
      <button onclick="addToCart(${index})">Add to Cart</button>
    `;
    productDiv.appendChild(div);
  });
}

// Add item to cart
function addToCart(index) {
  cart.push(products[index]);
  renderCart();
}



function renderCart() {
  const cartList = document.getElementById("cart");
  cartList.innerHTML = "";
  cart.forEach((item, i) => {
    let li = document.createElement("li");
    li.textContent = `${item.name} - ${formatPrice(item.price)}`;
    cartList.appendChild(li);
  });

  // Update total
  const totalP = document.getElementById("total");
  totalP.textContent = "Total: " + formatPrice(calculateTotal(cart));
}

// Event: Toggle dark mode
document.getElementById("themeBtn").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Event: Checkout alert
document.getElementById("checkoutBtn").addEventListener("click", () => {
  if (cart.length === 0) {
    alert("Your cart is empty!");
  } else {
    alert("Thank you for shopping!");
  }
});

renderProducts();

