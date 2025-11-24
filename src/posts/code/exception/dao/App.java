package dao;

public class App {
    public static void main(String[] args) {
        Usuario usuario = new Usuario("Leandro", "senha1");
        UsuarioDAO dao = new UsuarioDAO();
        try {
            dao.autenticar(usuario);
            IO.println("Logado com sucesso");
        } catch (AutenticacaoInvalidaException e) {
            IO.println("usuario ou senha incorreto");
        }
    }
}
