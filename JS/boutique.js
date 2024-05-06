class Product {//initialiser les propriétés de la classe Boutique
    constructor(img, name, shortDescr, price, cart) {
    this.img = img;
    this.name = name;
    this.shortDescr = shortDescr;
    this.price = price;
    this.cart = cart;

    console.log(this);
    }//paramètres pour permettre l'instanciation de nouveaux produits

    //toHtml : retourner un htmlElement contenant les informations de notre boutique
toHtml() {
    const containerHtml = document.createElement('div');
    const imgHtml = document.createElement('img');
    const nameHtml = document.createElement('p');
    const shortDescrHtml = document.createElement('p');
    const priceHtml = document.createElement('p');
    const cartHtml = document.createElement('img');

    containerHtml.classList.add('product-container');
    imgHtml.classList.add('product-img');
    nameHtml.classList.add('product-name');
    shortDescrHtml.classList.add('product-description');
    priceHtml.classList.add('product-price');
    cartHtml.classList.add('product-cart');

    imgHtml.src = this.img;
    nameHtml.textContent = this.name;
    shortDescrHtml.textContent = this.shortDescr;
    priceHtml.textContent = this.price;
    cartHtml.src = this.cart;

    const formattedPrice = this.price.toFixed(2).replace('.', ',');
    priceHtml.textContent = formattedPrice + ' $';

    containerHtml.appendChild(imgHtml);
    containerHtml.appendChild(nameHtml);
    containerHtml.appendChild(shortDescrHtml);
    containerHtml.appendChild(priceHtml);
    containerHtml.appendChild(cartHtml);
    return containerHtml;
}
};

const products = [
    new Product(
        '../assets/IMG/expresso.svg',
        'Expresso',
        'L\'expresso est un type de café célèbre d\'Italie. Le produit final est un café épais avec une mousse crémeuse sur le dessus. En raison de son épaisseur et de son taux élevé de caféine par unité, il sert de base pour d\'autres boissons.',
        6,
        '../assets/IMG/cart.svg'
    ),
    new Product(
        '../assets/IMG/americano.svg',
        'Americano',
        'Expresso dans lequel de l\'eau chaude, créant un café de même intensité, mais de goût différent du café filtre ordinaire.',
        6,
        '../assets/IMG/cart.svg'
    ), 
    new Product(
        '../assets/IMG/cappuccino.svg',
        'Cappuccino',
        'Expresso fait avec du lait chaud et de la mousse de lait chauffée à la vapeur.',
        6.5,
        '../assets/IMG/cart.svg'
    ),
    new Product(
        '../assets/IMG/caramel-macchiato.svg',
        'Macchiato au caramel',
        'Expresso fait avec une petite quantité de lait moussé et du caramel, semblable à un cappuccino, seulement plus fort.',
        7,
        '../assets/IMG/cart.svg'
    ),
    new Product(
        '../assets/IMG/latte.svg',
        'Latte',
        'Expresso fait avec du lait chauffé à la vapeur dans un rapport 1: 3 à 1: 5 avec un peu de mousse.',
        7,
        '../assets/IMG/cart.svg'
    ),
    new Product(
        '../assets/IMG/latte macchiato.svg',
        'Latte macchiato',
        'Latte fait avec une petite quantité de lait moussé, semblable à un cappuccino seulement plus fort.',
        6.5,
        '../assets/IMG/cart.svg'
    ),
    new Product(
        '../assets/IMG/ice_coffee.svg',
        'Café glacé',
        'Café auquel on ajoute de la glace pilée, de la crème et du sucre.',
        7,
        '../assets/IMG/cart.svg'
    )
]

//Boucler pour voir toutes les possibilités de chaque produit en HTML
const boutiqueContainer = document.querySelector('.boutique-container');

products.forEach(product => {
    boutiqueContainer.appendChild(product.toHtml());
});