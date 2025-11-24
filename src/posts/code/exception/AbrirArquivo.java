import java.io.FileNotFoundException;

public class AbrirArquivo {
    public static void metodo1() throws FileNotFoundException {
        new java.io.FileInputStream("arquivo.txt");
    }

    public static void main(String[] args) {
        try {
            metodo1();
        } catch (FileNotFoundException e) {
            IO.print("Erro ao abrir o arquivo no main");
        }
    }
}