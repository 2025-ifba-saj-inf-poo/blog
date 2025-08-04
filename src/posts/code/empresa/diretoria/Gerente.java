package empresa.diretoria;

import empresa.rh.Funcionario;

public class Gerente extends Funcionario {   

    public boolean validaCPF(){
        if("00000000000".equals(this.cpf)){
            return false;
        }
        return true;
    }
    
}
