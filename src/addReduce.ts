import { Reduce } from "./reduce";

/**
 * Implementa el reduce con la suma
 */
export class AddReduce extends Reduce {
    /**
     * Implementa el método reduce con la suma
     * @returns 
     */
    public reduce(): number {
        let result: number = 0;
        this.array.map((n) => {
            result += n;
        });

        return result;
    }

    /**
     * Notifica que se empieza el algoritmo
     */
    protected before() {
        console.log("Empezamos a reducir el array :)");
    }

    /**
     * Notifica que se termino de reducir el array
     */
    protected after() {
        console.log("Terminado de reducir")
    }
}