import * as chalk from 'chalk';
import * as fs from 'fs';
import {Note} from './note';

export class AddNote {
    constructor(
        private user: string, 
        private title: string,
        private body: string,
        private color:string
    ) {}

    public logic() {
        if (!fs.existsSync(`notes/${this.user}`)) {
            fs.mkdirSync(`notes/${this.user}`);
        }

        if (!fs.existsSync(`notes/${this.user}/${this.title}.json`)) {
            const note: Note = {title: this.title,
                                body: this.body, 
                                color: this.color
                            };
            
            const noteStringlify: string = JSON.stringify(note);

            fs.writeFileSync(`notes/${this.user}/${this.title}.json`, noteStringlify);
            console.log(chalk.green('Se añadió la nota correctamente'));
        } else {
            console.log(chalk.red('Ya existe una nota con ese nombre'));
        }
    }
}


export class RemoveNote {
    constructor(
        private user: string, 
        private title: string,
    ) {}

    public logic() {
        if (fs.existsSync(`notes/${this.user}`)) {
            if (fs.existsSync(`notes/${this.user}/${this.title}.json`)) {
                fs.rmSync(`notes/${this.user}/${this.title}.json`);
                console.log(chalk.green('Se eliminó la nota correctamente'));
            } else {
                console.log('No existe una nota con ese nombre');
            }
        } else { 
            console.log(chalk.red('No existe registro del usuario'));
        }

        if (fs.readdirSync(`notes/${this.user}`).length === 0) {
            fs.rmdirSync(`notes/${this.user}`);
        }
    }
}

export class ListNotes {
    constructor(
        private user: string, 
    ) {}

    public logic() {
        if (fs.existsSync(`notes/${this.user}`)) {
            console.log(chalk.green(`Notas de ${this.user}`));

            fs.readdirSync(`notes/${this.user}`).forEach((file) => {
                const noteJson: Buffer = fs.readFileSync(`notes/${this.user}/${file}`);
                const note: Note = JSON.parse(noteJson.toString());
                switch (note.color) {
                    case 'red':
                        console.log(chalk.red(`${note.title}`));
                        break;
                    
                    case 'blue':
                        console.log(chalk.blue(`${note.title}`));
                        break;

                    case 'yellow':
                        console.log(chalk.yellow(`${note.title}`));
                        break;
                
                    case 'green':
                        console.log(chalk.green(`${note.title}`));
                        break;
              }
            });
          } else console.log(chalk.red('No existen notas del usuario'));
    }
}

export class ReadNote {
    constructor(
        private user: string, 
        private title: string,
    ) {}

    public logic() {
        if (fs.existsSync(`notes/${this.user}`)) {
            if (fs.existsSync(`notes/${this.user}/${this.title}.json`)) {
                const json: Buffer = fs.readFileSync(`notes/${this.user}/${this.title}.json`);
                const note: Note = JSON.parse(json.toString());

                switch (note.color) {
                    case 'red':
                        console.log(chalk.red(`TITLE: ${note.title}\n`));
                        console.log(chalk.red(`${note.body}`));
                        break;

                    case 'blue':
                        console.log(chalk.blue(`TITLE: ${note.title}\n`));
                        console.log(chalk.blue(`${note.body}`));
                        break;

                    case 'yellow':
                        console.log(chalk.yellow(`TITLE: ${note.title}\n`));
                        console.log(chalk.yellow(`${note.body}`));
                        break;

                    case 'green':
                        console.log(chalk.green(`TITLE: ${note.title}\n`));
                        console.log(chalk.green(`${note.body}`));
                        break;
              }
            } else console.log('No existe una nota con ese nombre');
          } else console.log(chalk.red('No existe registro del usuario'));
    }
}


export class ModifyNote {
    constructor(
        private user: string, 
        private title: string,
        private body: string,
        private color:string
    ) {}

    public logic() {
        if (fs.existsSync(`notes/${this.user}`)) {
            if (fs.existsSync(`notes/${this.user}/${this.title}.json`)) 
            {
                const note: Note = {
                    title: this.title,
                    body: this.body, 
                    color: this.color
                };

                const noteStringlify: string = JSON.stringify(note);
                fs.writeFileSync(`notes/${this.user}/${this.title}.json`, noteStringlify);
                console.log(chalk.green('Se modificó la nota correctamente'));

            } else {
                console.log('No existe una nota con ese nombre');
            }
        } else { 
            console.log(chalk.red('No existe registro del usuario'));
        }
    }
}