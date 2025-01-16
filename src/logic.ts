// Implement a function which takes an array of Product and returns unique products sorted by price

type Product = {
    name: string;
    price: number;
};

function filterAndSortProducts(products: Product[]): Product[] {

    const uniqueMap = new Map<string, Product>();
    
    for (const product of products) {

        if (!uniqueMap.has(product.name)) {
            uniqueMap.set(product.name, product);
        }
        
    }

    const uniqueProducts = Array.from(uniqueMap.values());

    uniqueProducts.sort((a, b) => a.price - b.price);

    return uniqueProducts;
}

module.exports = { filterAndSortProducts };
