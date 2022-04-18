/**
 * Clase abstracta Reduce
 */
export abstract class Reduce {

    /**
     * Constructor recibe un array de números
     * @param array 
     */
    constructor(
        protected array: number[],
    ){}

    /**
     * Ejecuta el algoritmo
     * @returns 
     */
    public run(): number {
        this.before();
        let n: number = this.reduce();
        this.after();
        return n;

    }

    /**
     * Llama a la implementación del método reduce en las clases hijas
     */
    abstract reduce(): number;
    protected before() {};
    protected after() {};
};