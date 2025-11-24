public class Conta{
    private double saldo;
    public Conta(double saldoInicial){
        this.saldo = saldoInicial;
    }
    public boolean debitar(double quatidade){
        if(saldo>=quatidade){
            saldo-= quatidade;
            return true;
        }
        return false;
    }
    public void sacar(double quatidade){
        saldo+= quatidade;    
    }
    public double getSaldo(){
        return saldo;
    }
}