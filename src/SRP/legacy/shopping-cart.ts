// Daqui para frente será Codando em inglês
// Primeiro foi criado o codígo (Legacy) sem seguir qualquer princípio
// Qualquer coisa olhar as versões no gitHub

type CartItem = { name: string; price: number };
type OrderStatus = 'open' | 'closed';

export class ShoppingCartLegacy {
  private readonly _items: CartItem[] = [];
  // Esse orderStatus pode ser open ou closed mais vai iniciar open
  private _orderStatus: OrderStatus = 'open';
  addItem(item: CartItem): void {
    this._items.push(item);
  }
  removeItem(index: number): void {
    this._items.splice(index, 1);
  }

  // _items é privado da classe
  // Por isso é criado com _, Para uso de também de Get e Setters e para fazer referência dentro da classe e sendo um método público.

  //obtendo items
  get items(): Readonly<CartItem[]> {
    return this._items;
  }

  // Obtendo status da order

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  // Obtendo o total

  total(): number {
    // o + indica que vai ser convertido para number.
    return +this._items
      .reduce((total, next) => total + next.price, 0)
      .toFixed(2);
  }

  // Finalização de compra
  checkout(): void {
    if (this.isEmpty()) {
      console.log('Seu carrinho está vazio');
      return;
    }

    this._orderStatus = 'closed';
    this.sendMessage(
      `Seu pedido com o total de R$ ${this.total()} foi recebido`,
    );
    this.saveOrder();
    this.clear();
  }

  //Verificando se o carrinho tem itens ou não
  isEmpty(): boolean {
    return this._items.length === 0;
  }

  // Para enviar mensagem
  sendMessage(msg: string): void {
    console.log('Mensagem enviada:', msg);
  }

  // salvando ordem
  saveOrder(): void {
    console.log('Pedido salvo com sucesso...');
  }

  clear(): void {
    console.log('Carrinho de compras foi limpo..');
    this._items.length = 0;
  }
}

const shoppingCartLegacy = new ShoppingCartLegacy();
shoppingCartLegacy.addItem({ name: 'Camiseta', price: 49.91 });
shoppingCartLegacy.addItem({ name: 'Caderno', price: 9.9123 });
shoppingCartLegacy.addItem({ name: 'Lápis', price: 1.59 });

console.log(shoppingCartLegacy.items);
console.log(shoppingCartLegacy.total());
console.log(shoppingCartLegacy.orderStatus);
shoppingCartLegacy.checkout();
console.log(shoppingCartLegacy.orderStatus);
