class TesteErro {
    public static void main(String[] args) {
        IO.println("inicio do main");
        try {
            metodo1();
        } catch (ArrayIndexOutOfBoundsException e) {
            IO.println("deu erro: ");
        }

        IO.println("fim do main");
    }

    static void metodo1() {
        IO.println("inicio do metodo1");
        metodo2();
        IO.println("fim do metodo1");
    }

    static void metodo2() {
        IO.println("inicio do metodo2");
        int[] array = new int[10];
        for (int i = 0; i <= 15; i++) {
            array[i] = i;
            IO.println(i);
        }
        IO.println("fim do metodo2");
    }
}
