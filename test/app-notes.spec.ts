import 'mocha'
import { expect } from 'chai'
import { AddNote, ListNotes, ModifyNote, ReadNote, RemoveNote } from '../src/app/manager'

describe("ADD NOTE", () => {
    const addNote: AddNote = new AddNote("foo", "foo", "foo", "foo");

    it("La clase addNote existe", () => {
        expect(addNote != undefined).to.be.true;
    });

    it("La clase addNote tiene un atributo título", () => {
        expect("user" in addNote).to.be.true;
    });

    it("La clase addNote tiene un atributo title", () => {
        expect("title" in addNote).to.be.true;
    });

    it("La clase addNote tiene un atributo color", () => {
        expect("color" in addNote).to.be.true;
    });

    it("La clase addNote tiene un atributo body", () => {
        expect("body" in addNote).to.be.true;
    });

    it("La clase addNote tiene un método logic", () => {
        expect("logic" in addNote).to.be.true;
    });
});


describe("REMOVE NOTE", () => {
    const removeNote: RemoveNote = new RemoveNote("foo", "foo");

    it("La clase RemoveNote existe", () => {
        expect(removeNote != undefined).to.be.true;
    });

    it("La clase RemoveNote tiene un atributo título", () => {
        expect("user" in removeNote).to.be.true;
    });

    it("La clase RemoveNote tiene un atributo title", () => {
        expect("title" in removeNote).to.be.true;
    });

    it("La clase RemoveNote tiene un método logic", () => {
        expect("logic" in removeNote).to.be.true;
    });
});

describe("REMOVE NOTE", () => {
    const removeNote: RemoveNote = new RemoveNote("foo", "foo");

    it("La clase RemoveNote existe", () => {
        expect(removeNote != undefined).to.be.true;
    });

    it("La clase RemoveNote tiene un atributo título", () => {
        expect("user" in removeNote).to.be.true;
    });

    it("La clase RemoveNote tiene un atributo title", () => {
        expect("title" in removeNote).to.be.true;
    });

    it("La clase RemoveNote tiene un método logic", () => {
        expect("logic" in removeNote).to.be.true;
    });
});

describe("LIST NOTE", () => {
    const listNotes: ListNotes = new ListNotes("foo");

    it("La clase ListNotes existe", () => {
        expect(listNotes != undefined).to.be.true;
    });

    it("La clase ListNotes tiene un atributo título", () => {
        expect("user" in listNotes).to.be.true;
    });

    it("La clase ListNotes tiene un método logic", () => {
        expect("logic" in listNotes).to.be.true;
    });
});

describe("READ NOTE", () => {
    const readNote: ReadNote = new ReadNote("foo", "foo");

    it("La clase ReadNote existe", () => {
        expect(readNote != undefined).to.be.true;
    });

    it("La clase ReadNote tiene un atributo título", () => {
        expect("user" in readNote).to.be.true;
    });

    it("La clase ReadNote tiene un atributo title", () => {
        expect("title" in readNote).to.be.true;
    });

    it("La clase ReadNote tiene un método logic", () => {
        expect("logic" in readNote).to.be.true;
    });
});

describe("MODIFY NOTE", () => {
    const modifyNote: ModifyNote = new ModifyNote("foo", "foo", "foo", "foo");

    it("La clase modifyNote existe", () => {
        expect(modifyNote != undefined).to.be.true;
    });

    it("La clase modifyNote tiene un atributo título", () => {
        expect("user" in modifyNote).to.be.true;
    });

    it("La clase modifyNote tiene un atributo title", () => {
        expect("title" in modifyNote).to.be.true;
    });

    it("La clase modifyNote tiene un atributo color", () => {
        expect("color" in modifyNote).to.be.true;
    });

    it("La clase modifyNote tiene un atributo body", () => {
        expect("body" in modifyNote).to.be.true;
    });

    it("La clase modifyNote tiene un método logic", () => {
        expect("logic" in modifyNote).to.be.true;
    });
});