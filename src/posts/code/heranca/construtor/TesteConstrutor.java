package heranca.construtor;

import java.io.IO;
import java.time.LocalDate;

public class TesteConstrutor {

    public static void main(String[] args) {
        IO.println(new Servico().getDesconto());
        IO.println(new Emprestimo().getDesconto());
    }
}