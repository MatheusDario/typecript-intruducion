import { Product } from './Product';

export class ShoppingCart {
  private readonly products: Product[] = [];

  insertProduct(...products: Product[]): void {
    for (const product of products) {
      this.products.push(product);
    }
  }

  quantityProducts(): number {
    return this.products.length;
  }

  amountProducts(): number {
    return this.products.reduce((sum, product) => sum + product._price, 0);
  }
}

const product1 = new Product('PlayStation 5', 2199.99);
const product2 = new Product('X-Box series s', 1199.99);
const product3 = new Product('PSP', 199.99);
const shoppingCart1 = new ShoppingCart();
shoppingCart1.insertProduct(product1, product2, product3);
console.log(shoppingCart1.amountProducts());
console.log(shoppingCart1.quantityProducts());
console.log(shoppingCart1);
