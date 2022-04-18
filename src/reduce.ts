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
        return this.reduce()
    }

    /**
     * Llama a la implementación del método reduce en las clases hijas
     */
    abstract reduce(): number;
};