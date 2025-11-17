  public class Banco {
    private List<Correntista> correntistas;

    public Banco() {
        this.correntistas = new ArrayList();
    }

    public void addCorrentista(String nome){
        //...
    }

    public Correntista getCorrentista(String nome) {
        //...
    }

    public void debitar(String nomeCorrentista, double valor) {
        Debito d = new Debito(valor);
        getCorrentista(nomeCorrentista).getConta().executarOperacao(d);
    }

    public void creditar(String nomeCorrentista, double valor) {
        Credito c = new Credito(valor);
        getCorrentista(nomeCorrentista).getConta().executarOperacao(c);
    }

    public double getSaldo(String nomeCorrentista) {
        return getCorrentista(nomeCorrentista).getConta().getSaldo();
    }

    public void transferir(String nomeCorrentistaOrigem, String nomeCorrentistaDestino, double valor) {
        debitar(nomeCorrentistaOrigem, valor);
        creditar(nomeCorrentistaDestino, valor);
    }
}
