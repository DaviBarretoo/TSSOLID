//Inject Dependencies, starts the program

// Code for tests
import { Messaging } from './services/messaging';
import { Order } from './entities/order';
import { Persistency } from './services/persistency';
import { Product } from './entities/product';
import { ShoppingCart } from './entities/shopping-cart';

const shoppingCart = new ShoppingCart();
const persistency = new Persistency();
const messaging = new Messaging();

//Now, it is not just shoppingCart to perform all the functions, it is necessary to export the order
const order = new Order(shoppingCart, messaging, persistency); //shoppingCart is constructor

shoppingCart.addItem(new Product('Camiseta', 49.91));
shoppingCart.addItem(new Product('Caderno', 9.9123));
shoppingCart.addItem(new Product('Lápis', 1.59));

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(shoppingCart.totalWithDicout());
console.log(order.orderStatus);
order.checkout();
console.log(order.orderStatus);
