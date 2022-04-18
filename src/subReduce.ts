import { Reduce } from "./reduce";

/**
 * Implementa el reduce con la resta
 */
export class SubReduce extends Reduce {
    /**
     * Implementa el método reduce con la resta
     * @returns 
     */
    public reduce(): number {
        let result: number = 0;
        this.array.map((n) => {
            result -= n;
        });

        return result;
    }
}