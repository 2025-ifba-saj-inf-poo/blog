package dao;

import java.util.List;

public class UsuarioDAO {
    List<Usuario> usuariosCadastrados = List.of(new Usuario("Leandro", "senha1"));

    public void autenticar(Usuario usuario) throws AutenticacaoInvalidaException {
        Usuario usuarioLogado = null;
        for (int i = 0; i < usuariosCadastrados.size(); i++) {
            Usuario usuarioCadastrado = usuariosCadastrados.get(i);
            if(usuarioCadastrado.getLogin().equals(usuario.getLogin())){
                //mesmo login
                if(usuarioCadastrado.getSenha().equals(usuario.getSenha())){
                    //mesma senha
                    //usuario encontrado, login OK
                    usuarioLogado = usuarioCadastrado;
                }
            }            
        }
        if(usuarioLogado == null){
            throw new AutenticacaoInvalidaException();
        }
    }
    
}
