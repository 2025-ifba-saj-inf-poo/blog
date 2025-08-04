package heranca;

import java.io.IO;

public class Gerente extends Funcionario {
    private int senha;
    private int numeroDeFuncionariosGerenciados;

    public Gerente(String nome, String cpf, double salario, int senha, int numeroDeFuncionariosGerenciados) {
        super(nome, cpf, salario);
        this.senha = senha;
        this.numeroDeFuncionariosGerenciados = numeroDeFuncionariosGerenciados;
    }

    @Override
    public double getBonificacao() {
        return salario * 0.15;
    }

    public static void main(String[] args) {
        Gerente g = new Gerente("Leandro G", "0000000000", 100, 0, 0);
        Funcionario f = new Funcionario("Leandro F", "0000000000", 100);
        IO.println("Bonus F:" + f.getBonificacao());
        IO.println("Bonus G:" + g.getBonificacao());
    }

}
