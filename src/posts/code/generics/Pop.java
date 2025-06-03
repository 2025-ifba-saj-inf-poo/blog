public class Pop extends Veiculo<Integer> {
    public Pop(String modelo, Integer motor) {
        super(modelo, motor);
    }

    @Override
    public void ligar() {
        System.out.println("Pop " + getModelo() + " com " + getMotor() + " está ligado.");
    }
}

