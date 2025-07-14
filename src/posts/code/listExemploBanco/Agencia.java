

import java.util.ArrayList;


class Agencia {
    int numero;
    ArrayList<Conta> contas;
    
    Agencia(int numero) {
        this.numero = numero;
        contas = new ArrayList<>();
    }
    
    int getNumero() {
        return numero;
    }

    int criarConta(String cliente){
        //calcula o numero da nova conta
        int numeroConta = numero*100;
        numeroConta+= contas.size();
        //instancia nova conta com o numero calculado
        Conta novConta = new Conta(numeroConta, cliente);
        //guardo nova conta na minha lista de contas
        contas.add(novConta);
        //devolvo a conta para quem pediu
        return novConta.getNumero();
    }

    int totalContas() {
        return contas.size();
    }

    double totalDinheiro() {
        double total = 0;
        for (int i = 0; i < contas.size(); i++) {
            total+= contas.get(i).getSaldo();
            
        }
        return total;
    }  
    Conta getConta(int numeroConta) {
        // buscar a conta que tem o numero igual a numeroConta
        for (int i = 0; i < contas.size(); i++) {
            Conta c = contas.get(i);
            if(c.getNumero() == numeroConta){
                return c;
            }
        }
        return null;
        
  }
}
