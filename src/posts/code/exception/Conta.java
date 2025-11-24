public class Conta {
    private double saldo;

    public Conta(double saldoInicial) {
        this.saldo = saldoInicial;
    }

    public void debitar(double quatidade) throws SaldoException {
        if(quatidade <= 0 ){
            throw new IllegalArgumentException("Quantidade negativa");
        }
        if (!(saldo >= quatidade)) {
            throw new SaldoException();
        }
        saldo -= quatidade;
    }

    public void creditar(double quatidade) {
        saldo += quatidade;
    }

    public double getSaldo() {
        return saldo;
    }
}