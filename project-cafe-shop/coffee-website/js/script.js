

let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}

let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () =>{
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

// Get the button2
let totop = document.getElementById("go-to-top");
 
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        totop.style.display = "block";
    } else {
        totop.style.display = "none";
    }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};

//click outside close div
var mouse_is_inside = false;

$(document).ready(function()
{
    $('.form_content').hover(function(){ 
        mouse_is_inside=true; 
    }, function(){ 
        mouse_is_inside=false; 
    });

    $("body").mouseup(function(){ 
        if(! mouse_is_inside) $('.form_wrapper').hide();
    });
});

// var products = [
//     { name: "Product 1", price: 100 },
//     { name: "Product 2", price: 200 },
//     { name: "Product 3", price: 300 }
//   ];
  
//   var cart = [];
  
//   function displayProducts() {
//     var productList = "";
//     for (var i = 0; i < products.length; i++) {
//       productList += "<li>" + products[i].name + " - $" + products[i].price + " <button onclick='addToCart(" + i + ")'>Add to Cart</button></li>";
//     }
//     document.getElementById("products").innerHTML = productList;
//   }
  
//   function addToCart(index) {
//     cart.push(products[index]);
//     displayCart();
//   }
  
//   function displayCart() {
//     var cartItems = "";
//     var total = 0;
//     for (var i = 0; i < cart.length; i++) {
//       cartItems += "<li>" + cart[i].name + " - $" + cart[i].price + "</li>";
//       total += cart[i].price;
//     }
//     document.getElementById("cart").innerHTML = cartItems;
//     document.getElementById("total").innerHTML = "Total: $" + total;
//   }
  
//   displayProducts();

// Lấy phần tử muốn tắt
var element = document.getElementByClassName(".search-form active");

// Đăng ký sự kiện nhấp chuột bên ngoài phần tử
document.addEventListener("click", function(event) {
  // Kiểm tra xem phần tử đã được tắt chưa
  if (element.style.display === "block") {
    // Kiểm tra xem người dùng có nhấp chuột bên ngoài phần tử không
    if (!element.contains(event.target)) {
      // Nếu có, tắt phần tử
      element.style.display = "none";
    }
  }
});
