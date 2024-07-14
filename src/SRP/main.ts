//In clean architecture, main indicates a dirty place, that is, where you will do what I did here (Use everything)

//Inject Dependencies, starts the program

// Code for tests
import { Messaging } from './messaging';
import { Order } from './order';
import { Persistency } from './persistency';
import { Product } from './product';
import { ShoppingCart } from './shopping-cart';

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
console.log(order.orderStatus);
order.checkout();
console.log(order.orderStatus);
