interface Card {
  number: number;
  cvc: number;
  expDate: string;
  charge: number;
}

interface Bizum {
  name: string;
  tel: number;
  charge: number;
}

interface PayBy {
  pay(methodPay: PayByCreditCard | PayByBizum): Card | Bizum;
}

class Pay {
  constructor(private payBy: PayBy) {
    this.payBy = payBy;
  }

  pay(payBy: PayBy) {
    return payBy;
  }
}

class PayByBizum implements PayBy {
  constructor(private bizum: Bizum) {}

  pay() {
    return this.bizum;
  }
  charge(amount: number): number {
    return (this.bizum.charge = this.bizum.charge * amount);
  }
}

class PayByCreditCard implements PayBy {
  constructor(private card: Card) {}

  pay() {
    return this.card;
  }

  charge(amount: number): number {
    return (this.card.charge = this.card.charge * amount);
  }
}

const cardVISA: Card = {
  number: 123456789,
  cvc: 123,
  expDate: "12/22",
  charge: 1.05,
};

const cardMASTERCARD: Card = {
  number: 123456789,
  cvc: 123,
  expDate: "12/22",
  charge: 1.08,
};

const bizum: Bizum = {
  name: "Bizum de Paco",
  tel: 123456789,
  charge: 1,
};

const payByBizum = new PayByBizum(bizum);
payByBizum.charge(100);
const shoppingCart = new Pay(payByBizum);
console.log(shoppingCart.pay(payByBizum));

const payByCreditCard = new PayByCreditCard(cardMASTERCARD);
payByCreditCard.charge(80);
const shoppingCart1 = new Pay(payByCreditCard);
console.log(shoppingCart1.pay(payByCreditCard));

const payByCreditCard1 = new PayByCreditCard(cardVISA);
payByCreditCard1.charge(90);
const shoppingCart2 = new Pay(payByCreditCard1);
console.log(shoppingCart2.pay(payByCreditCard1));