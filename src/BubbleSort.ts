import { Strategy }  from './Solve'

/**
 * Clase que implementa el algoritmo BubbleSort
 */
    export class BubbleSort implements Strategy {
    /**
     * Ordena un array númerico con el algoritmo BubbleSort
     * @param data 
     * @returns 
     */
    public execute(data: number[]): number[] {
        for(let i = 0; i < data.length; i++) {
            for(let j = 0; j < data.length - 1; j++) {
    
                if(data[j] > data[j + 1]) {
                    let swap = data[j];
                    data[j] = data[j + 1];
                    data[j + 1] = swap;
                }

            }
        }
        return data;        
    }
}


