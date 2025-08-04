package heranca;

import java.time.LocalDate;

public class Servico {
    private Cliente contratante;
    private Funcionario responsavel;
    private LocalDate dataDeContratacao;

    public Servico(Cliente contratante, Funcionario responsavel, 
    LocalDate dataDeContratacao) {
        this.contratante = contratante;
        this.responsavel = responsavel;
        this.dataDeContratacao = dataDeContratacao;
    }

    public Cliente getContratante() {
        return contratante;
    }

    public Funcionario getResponsavel() {
        return responsavel;
    }

    public LocalDate getDataDeContratacao() {
        return dataDeContratacao;
    }

}
