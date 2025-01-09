const polos = () => {

    const data = [
        {
            picture: 'images/pollo/pollo-1.jpg',
            price: '₦56',
            name: 'Suit'
        },
        {
            picture: 'images/pollo/pollo-2.jpg',
            price: '₦56',
            name: 'Suit'
        },
        {
            picture: 'images/pollo/pollo-3.jpg',
            price: '₦56',
            name: 'Suit'
        },
        {
            picture: 'images/pollo/pollo-4.jpg',
            price: '₦56',
            name: 'Suit'
        },
    ];

      // Select the container where products will be added
      const container = document.getElementById('polos-container');

      // Generate HTML for each product and append to the container
      const productsHTML = data.map(el => `
        <div class="col-sm-3">
            <div class="product-image-wrapper">
                <div class="single-products">
                    <div class="productinfo text-center">
                        <img src="${el.picture}" alt="${el.name}" />
                        <h2></h2>
                        <a href="#call-2" class="btn btn-default add-to-cart">Get it now</a>
                    </div>
                </div>
            </div>
        </div>
      `).join('');

      container.innerHTML = productsHTML;

}

polos();