package empresa.ti;

import empresa.diretoria.Gerente;
import empresa.rh.Funcionario;

public class Sistema {
    public static void main(String[] args) {
        Funcionario f1 = new Funcionario();
        f1.setNome("Leandro");
        System.out.println(f1.getNome());
        Gerente g1 = new Gerente();        
        g1.setNome("Leo");
        System.out.println(g1.getNome());
        
    }
}
