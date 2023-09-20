export interface Product {
    name: string
    price: number
};

const products: Product[] = [
    {
        name: "Heelys",
        price: 59.99
    },
    {
        name: "MP3 Player",
        price: 19.99
    },
    {
        name: "Tamagotchi",
        price: 19.99
    },
];

const calcAverageProductPrice = (productObjectsArray: Product[]): number => {
    if (productObjectsArray.length === 0) {
        return 0;
    }

    const totalPriceOfProducts = productObjectsArray.reduce((total, product) => total + product.price, 0);
        return totalPriceOfProducts / productObjectsArray.length
};

const AverageProductPrice = calcAverageProductPrice(products);
console.log("Average Price:", AverageProductPrice);

export { calcAverageProductPrice };