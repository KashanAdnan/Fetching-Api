const main = document.getElementById("main")

fetch('https://dummyjson.com/products')
.then(res => res.json())
.then((data) => {
    data.products.map((item) =>{
        console.log(item);
        main.innerHTML += `
        <div class="card" style="width: 18rem;">
        <img src=${item.thumbnail} class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${item.title}</h5>
          <p class="card-text">${item.description}</p>
          <p class="card-text">Rs. ${item.price}</p>
          <a href="#" class="btn btn-primary">Buy Now!</a>
        </div>
      </div>
        `
    })
}
);