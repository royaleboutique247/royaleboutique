const featuredItems = () => {

    const data = [
        {
            picture: 'images/home/product1.jpg',
            price: '₦56',
            name: 'Easy Polo Black Edition'
        },
        {
            picture: 'images/home/product2.jpg',
            price: '₦56',
            name: 'Easy Polo Black Edition'
        },
        {
            picture: 'images/home/product3.jpg',
            price: '₦56',
            name: 'Easy Polo Black Edition'
        },
        {
            picture: 'images/home/product4.jpg',
            price: '₦56',
            name: 'Easy Polo Black Edition'
        },
        {
            picture: 'images/home/product5.jpg',
            price: '₦56',
            name: 'Easy Polo Black Edition'
        },
        {
            picture: 'images/home/product6.jpg',
            price: '₦56',
            name: 'Easy Polo Black Edition'
        }
    ];

      // Select the container where products will be added
      const container = document.getElementById('products-container');

      // Generate HTML for each product and append to the container
      const productsHTML = data.map(el => `
          <div class="col-sm-3">
              <div class="product-image-wrapper">
                  <div class="single-products">
                      <div class="productinfo text-center">
                          <img src="${el.picture}" alt="${el.name}" />
                          <h2>${el.price}</h2>
                          <p>${el.name}</p>
                          <a href="#call-2" class="btn btn-default add-to-cart">Get it now</a>
                      </div>	
                  </div>
              </div>
          </div>
      `).join('');

      container.innerHTML = productsHTML;

}

featuredItems();