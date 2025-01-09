const featuredItems = () => {

    const data = [
        {
            picture: 'images/suits/suit-1.jpg',
            price: '₦56',
            name: 'Suit'
        },
        {
            picture: 'images/pollo/pollo-1.jpg',
            price: '₦56',
            name: 'Polo'
        },
        {
            picture: 'images/shoes/shoe-1.jpg',
            price: '₦56',
            name: 'Shoe'
        },
        {
            picture: 'images/jean/jean-1.jpg',
            price: '₦56',
            name: 'Jean'
        },
        {
            picture: 'images/shades/shade-1.jpg',
            price: '₦56',
            name: 'Shade'
        },
        {
            picture: 'images/perfumes/perfume-1.jpg',
            price: '₦56',
            name: 'Perfume'
        },
        {
            picture: 'images/watch/watch-1.jpg',
            price: '₦56',
            name: 'Shoe'
        },
        {
            picture: 'images/boxers/boxer-1.jpg',
            price: '₦56',
            name: 'Boxer'
        },
        
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
                          <h2></h2>
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