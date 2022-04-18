import { Reduce } from "./reduce";

/**
 * Implementa el reduce con la división
 */
export class DivReduce extends Reduce {
    /**
     * Implementa el método reduce con la división
     * @returns 
     */
    public reduce(): number {
        let result: number = 1;
        this.array.map((n) => {
            result /= n;
        });

        return result;
    }
}