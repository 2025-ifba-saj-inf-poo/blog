import greenfoot.*;

public class Laser extends Actor
{
    public void act() 
    {
        move(10);
        verificarColisao();
    }
    
    private void verificarColisao()
    {
        // Se o laser sair do mundo, remova-o
        if (isAtEdge())
        {
            getWorld().removeObject(this);
            return; // Para a execução para evitar erro
        }
        
        // Verifica se tocou em um inimigo
        Actor inimigo = getOneIntersectingObject(Inimigo.class);
        if (inimigo != null)
        {
            // Pede ao mundo para adicionar pontos
            Espaco espaco = (Espaco) getWorld();
            espaco.addScore(10);
            
            // Remove o inimigo e o laser
            getWorld().removeObject(inimigo);
            getWorld().removeObject(this);
            Greenfoot.playSound("explosion.wav"); // Adicione um som de explosão
        }
    }
}
