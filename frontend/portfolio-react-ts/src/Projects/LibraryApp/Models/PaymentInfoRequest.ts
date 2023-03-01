class PaymentInfoRequest {
  amount: number;
  currency: string;
  receiptEmail: string | undefined;

  constructor(
    amount: number,
    curency: string,
    receiptEmail: string | undefined
  ) {
    this.amount = amount;
    this.currency = curency;
    this.receiptEmail = receiptEmail;
  }
}

export default PaymentInfoRequest;
