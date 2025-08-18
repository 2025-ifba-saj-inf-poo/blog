import greenfoot.*;

public class Nave extends Actor
{
    private int cooldownTiro = 0;

    public void act() 
    {
        mover();
        atirar();
        
        if (cooldownTiro > 0) {
            cooldownTiro--;
        }
    }
    
    private void mover()
    {
        if (Greenfoot.isKeyDown("left"))
        {
            turn(-5);
        }
        if (Greenfoot.isKeyDown("right"))
        {
            turn(5);
        }
        if (Greenfoot.isKeyDown("up"))
        {
            move(5);
        }
    }
    
    private void atirar()
    {
        if (Greenfoot.isKeyDown("space") && cooldownTiro == 0)
        {
            // Para o laser sair da ponta da nave, ajustamos a rotação.
            Laser laser = new Laser();
            laser.setRotation(getRotation());
            getWorld().addObject(laser, getX(), getY());
            Greenfoot.playSound("laser_shoot.wav"); // Adicione um som na pasta /sounds
            cooldownTiro = 20; // Espera 20 ciclos para poder atirar de novo
        }
    }
}
