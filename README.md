# Conta Bancária
Simula uma conta bancária usando JS utilizando os conhecimentos adquiridos em Orientação a objeto.

Descrição da atividade:
- Crie a classe ContaBancaria, que possui os parâmetros agencia, numero, tipo e saldo;
- Dentro de ContaBancaria, construa o getter e o setter de saldo;
- Dentro de ContaBancaria, crie os métodos sacar e depositar;
- Crie uma classe-filha chamada ContaCorrente que herda todos esses parâmetros e ainda possua o parâmetro cartaoCredito;
- Ainda em ContaCorrente, construa o getter e o setter de cartaoCredito;
- Ainda em ContaCorrente, faça com que o tipo seja 'conta corrente' por padrão;
- Crie uma classe-filha chamada ContaPoupanca que herda todos os parâmetros de ContaBancaria;
- Crie uma classe-filha chamada ContaUniversitaria que herda todos os parâmetros de ContaBancaria;
- Faça com que o método saque de ContaUniversitaria apenas seja capaz de sacar valores menores que 500 reais.
