/**
 * Interfaz que declara el método execute donde se implementará el algoritmo de ordenación
 */
export interface Strategy {
    execute(data: number[]): number[];
}


/**
 * Clase que donde se declara el array que se quiere ordenar y el algoritmo
 */
export class Solver {
    /**
     * Recibe el array y la estrategia de resolución
     * @param data 
     * @param strategy 
     */
    constructor(private data: number[], private strategy: Strategy) {}

    /**
     * Devuelve el array ordenado mediante la ordenación indicada
     * @returns 
     */
    public logic(): number[] {
        return this.strategy.execute(this.data);
    }
}
