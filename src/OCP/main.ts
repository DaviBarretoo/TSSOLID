//Inject Dependencies, starts the program

// Code for tests
import { Messaging } from './services/messaging';

import { Order } from './classes/order';

import { Persistency } from './services/persistency';

import { ShoppingCart } from './classes/shopping-cart';
import { Product } from './classes/product';

import { TenPercentDiscount } from './classes/discount';

//const fifthPercentDiscount = new FifthPercentDiscount();

const tenPercentDiscount = new TenPercentDiscount();
const shoppingCart = new ShoppingCart(tenPercentDiscount);
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
