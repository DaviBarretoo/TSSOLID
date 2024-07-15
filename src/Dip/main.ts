/*

DEPENDECY INVERSION PRINCIPLE

Módulos de alto nível não devem depender de módulos de baixo nível. Ambos devem
depender de abstrações.
Dependa de abstrações, não de implementações.
Abstrações não devem depender de detalhes. Detalhes devem depender
de abstrações.

Classes de baixo nível são classes que executam tarefas (os detalhes)
Classes de alto nível são classes que gerenciam as classes de baixo nível.

*/

//Inject Dependencies, starts the program

// Code for tests
//import { Messaging } from './services/messaging';

import { Order } from './classes/order';

import { Persistency } from './services/persistency';

import { ShoppingCart } from './classes/shopping-cart';
import { Product } from './classes/product';

import { TenPercentDiscount } from './classes/discount';
import { EnterpriseCustomer } from './classes/customer';
import { MessagingProtocol } from './classes/interfaces/messaging-protocol';

//const fifthPercentDiscount = new FifthPercentDiscount();

const tenPercentDiscount = new TenPercentDiscount();
const shoppingCart = new ShoppingCart(tenPercentDiscount);
const persistency = new Persistency();
//const messaging = new Messaging();
// const individualCustomer = new IndividualCustomer(
//   'DAVI',
//   'BARRETO',
//   '111.111.111-11',
// );
const enterpriseCustomer = new EnterpriseCustomer(
  'DAVI CODE',
  '111.111.111-11',
);

//Em TypeScript (TS), uma "classe mock" (ou "classe de mock") é usada principalmente em testes para simular o comportamento de classes reais. Isso é útil para isolar o código que está sendo testado e evitar dependências externas ou comportamentos complexos que não são o foco do teste.
//
class MessagingMock implements MessagingProtocol {
  sendMessage(): void {
    console.log('Deus é Fiel');
  }
}
const messagingMock = new MessagingMock();
//
//Now, it is not just shoppingCart to perform all the functions, it is necessary to export the order
const order = new Order(
  shoppingCart,
  messagingMock,
  persistency,
  enterpriseCustomer,
); //shoppingCart is constructor

shoppingCart.addItem(new Product('Camiseta', 49.91));
shoppingCart.addItem(new Product('Caderno', 9.9123));
shoppingCart.addItem(new Product('Lápis', 1.59));

console.log(shoppingCart.items);
console.log(shoppingCart.total());
console.log(shoppingCart.totalWithDicout());
console.log(order.orderStatus);
order.checkout();
console.log(order.orderStatus);
