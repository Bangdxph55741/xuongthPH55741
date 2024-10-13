/*!
 * Start Bootstrap - Shop Homepage v5.0.6 (https://startbootstrap.com/template/shop-homepage)
 * Copyright 2013-2023 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-homepage/blob/master/LICENSE)
 */
// This file is intentionally blank
// Use this file to add JavaScript to your project
const getProducts = async (content) => {
  try {
    const res = await fetch("http://localhost:3000/products");
    const products = await res.json();
    console.log(products);
    // content.innerHTML = "Bằng";

    products.forEach((products) => {
      const div = document.createElement("div");
      div.classList.add("col");
      div.classList.add("mb-5");
      div.innerHTML = `
        <div class="card h-100">

            <img class="card-img-top" src="${products.image}" alt="..." />
            <!-- Product details-->
            <div class="card-body p-4">
                <div class="text-center">
                    <!-- Product name-->
                    <h5 class="fw-bolder">${products.name}</h5>
                    <!-- Product price-->
                    ${products.price}
                </div>
            </div>
            <!-- Product actions-->
            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="detail.html?id=${products.id}">Show Chi tiet</a></div>
            </div>
        </div>    
        `;
      content.append(div);
    });
  } catch (error) {}
};

const getProductsByID = async (image, info, id) => {
  try {
    const res = await fetch(`http://localhost:3000/products/${id}`);
    const product = await res.json();
    image.innerHTML = `
    <img  width = "500px" height="500px" src ="${product.image}" />
    `;
    info.innerHTML = `
    <h1>${product.name}</h1>
    <span> Giá: ${product.price} </span>
    <p> ${product.description}</p>
    <button class="btn btn-danger" >Thêm vào giỏ hàng</button>
    `;
  } catch (error) {}
};
