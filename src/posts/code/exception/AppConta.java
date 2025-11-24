public  class AppConta{
    void main(){
        Conta c1 = new Conta(100);
        //c1.saldo = 200;//erro pq é privado
        try {
            c1.debitar(-100);
            IO.println("Tem saldo");
        } catch (java.lang.IllegalArgumentException e) {
            IO.println("valor de saque negativo");
        } catch (SaldoException e) {
            IO.println("Não tem saldo");
        }
        c1.creditar(100);
        Conta c2 = new Conta(50);
        try {
            c2.debitar(100);
            IO.println("Tem saldo");
        } catch (SaldoException e) {
            IO.println("Não tem saldo");
        }
    }
}