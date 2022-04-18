import { Strategy } from "./Solve";

/**
 * Clase que implementa el algoritmo MergeSort
 */
    export class MergeSort implements Strategy {
        /**
         * Ordena el array usando el algoritmo mergeSort
         * @param data 
         * @returns 
         */
        public execute(data: number[]) {
            if (data.length <= 1) {
                return data;
            }
            const middle = Math.floor(data.length / 2);
            
            const left = data.slice(0, middle);
            const right = data.slice(middle);
            
            return this.merge(
                this.execute(left), this.execute(right)
            );
        }

        public merge (left, right) {
            let resultArray = [], leftIndex = 0, rightIndex = 0;
          
            while (leftIndex < left.length && rightIndex < right.length) {
              if (left[leftIndex] < right[rightIndex]) {
                resultArray.push(left[leftIndex]);
                leftIndex++; 
              } else {
                resultArray.push(right[rightIndex]);
                rightIndex++; 
              }
            }

            return resultArray
                    .concat(left.slice(leftIndex))
                    .concat(right.slice(rightIndex));
          }
    }


