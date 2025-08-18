import greenfoot.*;

public class Espaco extends World
{
    private int score = 0;
    private int inimigosGerados = 0;

    public Espaco()
    {    
        super(800, 600, 1);
        prepare();
    }

    public void act()
    {
        // Gera um inimigo a cada 100 ciclos do act, em média
        if (Greenfoot.getRandomNumber(100) < 1)
        {
            addObject(new Inimigo(), Greenfoot.getRandomNumber(getWidth()), 0);
            inimigosGerados++;
        }
    }
    
    public void addScore(int points)
    {
        score = score + points;
        showText("Score: " + score, 100, 25);
    }

    private void prepare()
    {
        Nave nave = new Nave();
        addObject(nave, getWidth() / 2, 550);
        showText("Score: 0", 100, 25);
        showText("Use <- -> para virar e 'up' para mover. 'space' para atirar", 400, 580);
    }
}
