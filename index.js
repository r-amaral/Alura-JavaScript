import {
    Cliente
} from "./Cliente.js";

import {
    ContaCorrente
} from "./ContaCorrente.js";
import {
    ContaPoupanca
} from "./ContaPoupanca.js";

import {
    Conta
} from "./Conta.js"

const cliente1 = new Cliente("Ricardo", "11122233309");
const cliente2 = new Cliente("Alice", "88822233309");

const contaCorrenteRicardo = new ContaCorrente(0, cliente1, 1001);
const contaCorrenteAlice = new ContaPoupanca(0, cliente2, 1001);

contaCorrenteRicardo.depositar(300)

const ContaPoupancaRicardo = new Conta(50, cliente1, 1001);

console.log(contaCorrenteAlice)