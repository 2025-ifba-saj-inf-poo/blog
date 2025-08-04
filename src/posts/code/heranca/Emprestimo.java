package heranca;

import java.io.IO;
import java.time.LocalDate;

public class Emprestimo extends Servico {
    private double valor;
    private double taxa;

    public Emprestimo(Cliente contratante, Funcionario responsavel, 
            LocalDate dataDeContratacao,double valor,double taxa) {
        super(contratante, responsavel, dataDeContratacao);
        this.valor = valor;
        this.taxa = taxa;        
    }
    
    @Override
    public String toString() {
        return "Emprestimo [valor=" + valor + ", taxa=" + taxa + ", getContratante()=" + getContratante()
                + ", getResponsavel()=" + getResponsavel() + ", getDataDeContratacao()=" + getDataDeContratacao() + "]";
    }

    public static void main(String[] args) {
        Cliente c1  = new Cliente();
        Funcionario f1 = new Funcionario();
        LocalDate data = LocalDate.of(2022,2,25);
        Emprestimo e = new Emprestimo(c1, f1, data, 10000, 1);
        IO.println(e);
    }
}
