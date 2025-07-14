
class Conta {
    int numero;
    String cliente;
    double saldo;
    double limite;

    Conta(int numero, String cliente) {
        if (numero < 0) {
            this.numero = 999;
        } else {
            this.numero = numero;
        }
        setCliente(cliente);
        this.saldo = 0;
        this.limite = 100;
    }

    Conta(int numero, String cliente, double saldo, double limite) {
        this(numero, cliente);
        this.saldo = saldo;
        this.limite = limite;
    }

    void setCliente(String cliente) {
        if (cliente != null && !cliente.isEmpty() && !cliente.isBlank()) {
            this.cliente = cliente;
        }else{
            this.cliente = "GERENTE";
        }
    }

    boolean saca(double quantidade) {// método
        if (this.saldo < quantidade) {
            return false;
        } else {
            this.saldo -= quantidade;
            return true;
        }
    }

    void deposita(double quantidade) {// método
        this.saldo += quantidade;
    }

    boolean transferir(Conta destino, double valor) {
        if (this.saca(valor)) {
            destino.deposita(valor);
            return true;
        }
        return false;
    }

    double getSaldo() {
        return saldo;
    }

    int getNumero() {
        return numero;
    }

    @Override
    public String toString() {
        return "Conta [numero=" + numero + ", cliente=" + cliente + ", saldo=" + saldo + "]";
    }

}
