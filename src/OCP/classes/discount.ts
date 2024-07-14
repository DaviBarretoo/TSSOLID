// as everything is of a family, this classes are together

export abstract class Discount {
  abstract calculate(value: number): number;
}

export class FifthPercentDiscount extends Discount {
  private readonly discount = 0.5;

  calculate(price: number): number {
    return price - price * this.discount; // for discount in real number
  }
}

export class TenPercentDiscount extends Discount {
  private readonly discount = 0.1;

  calculate(price: number): number {
    return price - price * this.discount;
  }
}

export class NoDiscount extends Discount {
  calculate(value: number): number {
    return value;
  }
}
