import { Product } from './products';
interface inventoryItem {
    product: Product;
    quantity: number;
};

const inventory: inventoryItem[] = [
    {
        product: {
            name: "motor",
            price: 10.00,
        },
        quantity: 10,
    },
    {
        product: {
            name: "sensor",
            price: 12.50,
        },
        quantity: 4,
    },
    {
        product: {
            name: "LED",
            price: 1.00,
        },
        quantity: 20,
    },
];

const calcInventoryValue = (inventoryArray: inventoryItem[]): number => {
    if (inventoryArray.length === 0) {
        return 0;
    }

    const totalValue = inventoryArray.reduce((sum, item) => {
        const { price } = item.product;
        const { quantity } = item;
        
        return sum + price * quantity;
    }, 0);
    return totalValue;
};

const totalProductValue = calcInventoryValue(inventory);
console.log(totalProductValue);

export { calcInventoryValue };