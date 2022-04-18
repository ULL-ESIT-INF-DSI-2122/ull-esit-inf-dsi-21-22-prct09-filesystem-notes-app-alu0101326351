import 'mocha'
import { expect } from 'chai'

import { AddReduce } from '../src/addReduce'
import { SubReduce } from '../src/subReduce'
import { MultReduce } from '../src/multReduce'
import { DivReduce } from '../src/divReduce'

describe ("TESTS", () => {
    let addReduceTest: AddReduce = new AddReduce([1, 2, 3, 4]);
    let subReduceTest: SubReduce = new SubReduce([1, 2, 3, 4]);
    let multReduceTest: MultReduce = new MultReduce([1, 2, 3, 4]);
    let divReduceTest: DivReduce = new DivReduce([2, 5]);


    it("addReduce.run()", () => {
        expect(addReduceTest.run()).to.be.equal(10)
    });

    it("subReduce.run()", () => {
        expect(subReduceTest.run()).to.be.equal(-10)
    });
    it("multReduce.run()", () => {
        expect(multReduceTest.run()).to.be.equal(24)
    });

    it("divReduce.run()", () => {
        expect(divReduceTest.run()).to.be.equal(0.1)
    });
});