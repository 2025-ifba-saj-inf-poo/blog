package heranca.construtor;

import java.io.IO;

public class Emprestimo extends Servico {
    public Emprestimo() {
        //IO.println("Construtor 1 Emprestimo");
    }

    @Override
    public int getDesconto() {
        return super.getDesconto()+5;
    }
    

}
