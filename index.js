import {
    Cliente
} from "./Cliente.js";

import {
    ContaCorrente
} from "./conta/ContaCorrente.js";
import {
    ContaPoupanca
} from "./conta/ContaPoupanca.js";

import {
    Conta
} from "./conta/Conta.js"

import { Gerente } from "./funcionarios/Gerente";
import { Diretor } from "./funcionarios/Diretor"
import { SistemaAutenticacao } from "./SistemaDeAutenticacao.js";

const cliente1 = new Cliente("Ricardo", "11122233309");
const cliente2 = new Cliente("Alice", "88822233309");

const contaCorrenteRicardo = new ContaCorrente(0, cliente1, 1001);
const contaCorrenteAlice = new ContaPoupanca(0, cliente2, 1001);

contaCorrenteRicardo.depositar(300)

const ContaPoupancaRicardo = new Conta(50, cliente1, 1001);

const diretor = new Diretor("Rodrigo", 10000, 112233445);
const gerente = new Gerente("Rodrigo", 10000, 112233445);

diretor.cadastrarSenha("123456")
gerente.cadastrarSenha("123")

const diretorEstaLogado = SistemaAutenticacao.login(diretor, '123456789');

const gerenteEstaLogado = SistemaAutenticacao.login(gerente, '123');

