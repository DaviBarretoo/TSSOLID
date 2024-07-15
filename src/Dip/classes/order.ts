// Nessa aula basícamente vamos fazer a classe de auto nivel quanto a de baixo nivel depender exclusivamente da interface não um da outra
// Ou seja vamos inverter a dependência assim como esta explicado lá no main

// entidades são a parte do programa que nós da dinheiro
//
//
// Nenhuma dependência aqui é concreta ! :) tudo vem de interfaces
import { OrderStatus } from './interfaces/order-status';
import { CustomerOrder } from './interfaces/customer-protocol';
import { ShoppingCartProtocol } from './interfaces/shopping-cart-protocol';
import { MessagingProtocol } from './interfaces/messaging-protocol';
import { PersistencyProtocol } from './interfaces/persistency-protocol';

//Ordem é de alto nivel
export class Order {
  private _orderStatus: OrderStatus = 'open';

  // Injetando dependência
  constructor(
    // e shoppingcart é de baixo nivel, pois a ordem não sabe fazer as atividades do shopping cart
    private readonly cart: ShoppingCartProtocol,
    private readonly messaging: MessagingProtocol,
    private readonly persistency: PersistencyProtocol,
    private readonly customer: CustomerOrder,
  ) {}

  // NÃO tem necessidade de eu mandar um customer, como ele é uma interface , (interface e types tbm são abstraações)
  //Em TypeScript (TS), uma "classe mock" (ou "classe de mock") é usada principalmente em testes para simular o comportamento de classes reais. Isso é útil para isolar o código que está sendo testado e evitar dependências externas ou comportamentos complexos que não são o foco do teste.

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  // Finalização de compra
  checkout(): void {
    if (this.cart.isEmpty()) {
      console.log('Seu carrinho está vazio');
      return;
    }

    this._orderStatus = 'closed';
    this.messaging.sendMessage(
      `Seu pedido com o total de R$ ${this.cart.totalWithDicout()} foi recebido`,
    );
    this.persistency.saveOrder();

    this.cart.clear();
    console.log('O cliente é', this.customer.getName(), this.customer.getIDN());
  }
}
