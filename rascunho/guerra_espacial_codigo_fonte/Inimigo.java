import greenfoot.*;

public class Inimigo extends Actor
{
    public void act() 
    {
        setLocation(getX(), getY() + 3); // Move para baixo
        
        // Se o inimigo sair do mundo por baixo, remova-o
        if (isAtEdge())
        {
            getWorld().removeObject(this);
        }
    }
}
