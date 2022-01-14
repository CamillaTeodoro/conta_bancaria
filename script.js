class ContaBancaria {
  constructor(agencia, numero, tipo) {
    this.agencia = agencia;
    this.numero = numero;
    this.tipo = tipo;
    this._saldo = 0; //quanto for usar getter e setterusa-se _ na frente
  }

  get saldo() {
    return this._saldo;
  }
  set saldo(valor) {
    this._saldo = valor;
  }

  sacar(valor) {
    if (valor > this.saldo) {
      return "Operação negada";
    }
    this._saldo = this._saldo - valor;

    return this._saldo;
  }

  depositar(valor) {
    this._saldo = this._saldo + valor;

    return this._saldo;
  }
}

// Classe filha

class ContaCorrente extends ContaBancaria {
  constructor(agencia, numero, cartaoCredito) {
    super(agencia, numero); // manda o que recebe para a classe pai
    this.tipo = "corrente";
    this._cartaoCredito = cartaoCredito;
  }

  get cartaoCredito() {
    return this._cartaoCredito;
  }
  set cartaoCredito(valor) {
    this._cartaoCredito = valor;
  }
}

class ContaPoupanca extends ContaBancaria {
  constructor(agencia, numero) {
    super(agencia, numero); // manda o que recebe para a classe pai
    this.tipo = "poupanca";
  }
}

class ContaUniversitaria extends ContaBancaria {
  constructor(agencia, numero) {
    super(agencia, numero); // manda o que recebe para a classe pai
    this.tipo = "universitaria";
  }

  sacar(valor) {
    if (valor > 500) {
      return "Operação negada";
    }
    this._saldo = this._saldo - valor;
    return this._saldo;
  }
}
