import {
    Cliente
} from './Cliente.js'

export class Conta {
    _saldo;
    _cliente;
    _agencia;

    set saldo(valor) {
        this._saldo = valor;
    }

    get saldo() {
        return this.saldo;
    }

    set cliente(cliente) {
        if (cliente instanceof Cliente) {
            this._cliente = cliente;
        }
    }

    get cliente() {
        return this.cliente;
    }

    set agencia(agencia) {
        this.agencia = agencia;
    }

    get agencia() {
        return this.agencia;
    }

    constructor(saldoInicial, cliente, agencia) {
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
    }

    sacar(valor) {
        let taxa = 1;
        return this._sacar(valor, taxa);

    }

    _sacar(valor, taxa) {
        if (this._saldo >= valor) {
            this._saldo -= taxa * valor;
            console.log(`transferencia de ${valor} realiada com sucesso`);
            return valor;
        } else {
            console.log("Saldo insuficiente");
        }
        return 0;
    }

    depositar(valor) {
        if (valor <= 0) return;
        this._saldo += valor;
    }

    transferir(valor, conta) {
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }

}