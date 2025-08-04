package modelagemDVD.estante;
/*
O filme possui as seguintes caraterísticas: nome, categoria e duração.
 */
class Filme {
     String nome;
     String categoria;
     double duracao;
    
    Filme(String nome, String categoria, double duracao) {
        this.nome = nome;
        this.categoria = categoria;
        this.duracao = duracao;
    }

    String getNome() {
        return nome;
    }
    double getDuracao() {
        return duracao;
    }
    String getCategoria() {
        return categoria;
    }

    @Override
    String toString() {
        return "Filme [nome=" + nome + ", categoria=" + categoria + ", duracao=" + duracao + "]";
    }
    
}
