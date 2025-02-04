const boxers = () => {

    const data = [
        {
            picture: 'images/boxers/boxer-1.jpg',
            price: '₦56',
            name: 'Suit'
        },
        {
            picture: 'images/boxers/boxer-2.avif',
            price: '₦56',
            name: 'Suit'
        },
        {
            picture: 'images/boxers/boxer-3.jpg',
            price: '₦56',
            name: 'Suit'
        },
        {
            picture: 'images/boxers/boxer-4.webp',
            price: '₦56',
            name: 'Suit'
        },
    ];

      // Select the container where products will be added
      const container = document.getElementById('boxers-container');

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

boxers();