import { Reduce } from "./reduce";

/**
 * Implementa el reduce con la multiplicación
 */
export class MultReduce extends Reduce {
    /**
     * Implementa el método reduce con la multiplicación
     * @returns 
     */
    public reduce(): number {
        let result: number = 1;
        this.array.map((n) => {
            result *= n;
        });

        return result;
    }
}