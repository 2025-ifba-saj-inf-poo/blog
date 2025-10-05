import java.util.ArrayList;
import java.util.List;
import static java.lang.IO.*;

void main(String[] args) {
    List<Turma> turmas = new ArrayList<>();
    Turma t1 = new Turma("POO");
    turmas.add(t1);
    for (int i = 0; i < 10; i++) {
        t1.addAluno(new Aluno("Aluno "+(i+1)));
    }

    

    Aluno a1 = t1.getAlunos().get(0);

    Professor p1 = new Professor("Leandro 1");
    t1.addProfessor(p1);

    Professor p2 = new Professor("Leandro 2");
    t1.addProfessor(p2);

    println("I=========== Print Turma t1 ===========");
    println(t1);
    println("F=========== Print Turma t1 ===========");

    Turma t2 = new Turma("PWEB");
    turmas.add(t2);
    t2.addProfessor(p1);
    
    for (int i = 0; i < t1.getAlunos().size(); i++) {
        if (i%2==0) {
            t2.addAluno(t1.getAlunos().get(i));
        }
    }
    //println(turmas);
    println("I=========== Print Turma t2 ===========");
    println(t2);
    println("F=========== Print Turma t2 ===========");

    //Os dados devem ser organizados para permitir 
    //consultas sobre quais turmas um professor leciona
    println("=====Verificando todas as turmas quem tem o professor "+p2.getNome());
    for (Turma turma : turmas) {
        if(turma.getProfessores().contains(p2)){
            println(turma.getNome());  
        }
    }
    println("=====Turmas do objeto professor "+p2.getNome());
    for (Turma turma : p2.getTurmas()) {
        println(turma.getNome());            
    }
    println();
    
    //quais alunos estão matriculados em uma turma específica        
    
    println("====Alunos da turma "+t2.getNome());
    for (Aluno aluno : t2.getAlunos()) {
        println(aluno.getNome());
    }
    
    //quais turmas um aluno está matriculado
    println("=== Verificando todas as turmas quem tem o aluno "+a1.getNome());
    for (Turma turma : turmas) {
        if(turma.getAlunos().contains(a1)){
            println(turma.getNome());
        }
    }

    println("=====Turmas do objeto aluno "+a1.getNome());

    for (Turma turma : a1.getTurmas()) {
        println(turma.getNome());            
    }
    
}
