import 'mocha'
import { expect } from 'chai'

import { Solver } from '../src/Solve';
import { BubbleSort } from '../src/BubbleSort';
import { MergeSort } from '../src/mergeSort';

describe ('SORT TEST', () => { 
    let Bubble: BubbleSort = new BubbleSort()
    let Bsolver: Solver = new Solver([2, 3, 5, 1], Bubble)

    it ("Bubble Sort", () => {
        expect(Bsolver.logic()).to.eql([1, 2, 3, 5])
    });

    let Merge: MergeSort = new MergeSort()
    let Msolver: Solver = new Solver([2, 3, 5, 1], Merge)

    it ("Merge Sort", () => {
        expect(Msolver.logic()).to.eql([1, 2, 3, 5])
    });
});

