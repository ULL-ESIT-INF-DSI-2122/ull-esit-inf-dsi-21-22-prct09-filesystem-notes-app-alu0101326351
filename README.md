# Practica 9: Aplicación de procesamiento de notas de texto

## Interacción con la app

Para interaccionar con la app por línea de comandos se ha hecho uso del paquete 'yargs'. En el fichero index.ts se han definido los comandos disponibles para interaccionar con la app. Primer tenemos el comando add con el cual se añade una nota. Tenemos que pasar por la línea de comandos las siguientes opciones que hemos declarado como obligatorias en la configuración: usuario, titulo de la nota, cuerpo de la nota y color de la nota.

Una vez leida esta información se crea la clase correspondiente a la acción y se ejecuta su método logic(). Esto lo veremos en profundidas en el siguiente punto

    yargs.command({
        command: 'add',
        describe: 'Add a new note',
        builder: {
            user: {
            describe: 'Owner of the note',
            demandOption: true,
            type: 'string',
            },

            title: {
                describe: 'Title of the note',
                demandOption: true,
                type: 'string',
            },

            body: {
                describe: 'Body of the note',
                demandOption: true,
                type: 'string',
            },

            color: {
                describe: 'Color of the note',
                demandOption: true,
                type: 'string',
            },
        },
        handler(argv) {
            if (typeof argv.user === 'string' &&
                typeof argv.title === 'string' &&
                typeof argv.body === 'string' &&
                typeof argv.color === 'string') {
                let addNote: AddNote = new AddNote(argv.user, argv.title, argv.body, argv.color);
                addNote.logic();
            }
        },
    });

Ademas de la opcion de añadir nota, se han configurado siguiendo el esquema anterior las acciones para modificar una nota, borrarla, leerla o listar todas las de un usuario.


## Lógica de la app

Para cada una de las acciones definidas anteriormente, se ha creado una clase que define la lógica a seguir para cumplir cada una. Esta decisión de diseño ha sido tomada para cumplir con el principio SOLID single responsability, para que cada acción sea controlada por una clase independiente y no estén todas en una misma clase que se podría hacer demasiado grande.

En el fichero note.ts se ha definido el tipo de dato Note que almacena el titulo, cuerpo y color de la nota

    export type Note = {
        title: string,
        body: string,
        color: string
    }

### AddNote

La clase AddNote, recibe el usuario, titulo, cuerpo y color de la nota los cuales almacena en atributos privados. Su método logic() comprueba si existe en el directorio notes un subdirectorio con el nombre del usuario ya que el programa para cada usuario crea uno para almacenar sus notas, si no existe lo crea. Luego construye un objeto Note con la información de sus atributos privados y lo convierte a string con la función JSON.stringlify() el cual almacena en un archivo nuevo haciendo uso de las funciones que ofrece el paquete fs, en este caso writeFileSync()

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


### RemoveNote

Esta clase recibe el usuario y el titulo de la nota para eliminar. Su método logic comprueba si existe el directorio del usuario, en caso afirmativo comprueba si existe la nota que se quiere borrar. Si esta existe se elimina el archivo que almacena la nota con la funcion fs.rmSync(). Si el directorio del usuario se quedara vacío, es decir si no hubieran mas notas suyas, se elimina el directorio del usuario con la función fs.rmdirSync()

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


### ListNotes
La clase ListNotes, recibe el nombre del usuario que queremos listar sus notas. Su método logic() comprueba si el directorio del usuario existe, en caso afirmativo, se lee el contenido del directorio con la función fs.readdirSync() y se imprime por pantalla los títulos de las notas , en función del color de la misma con un switch.

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


### ReadNote

La clase ReadNote recibe el usuario y el titulo de la nota que se quiere leer. Su método logic() comprueba si el directorio del usuario existe, en caso afirmativo, se comprueba si existe la nota. Se lee el contenido del fichero mediante la función fs.readFileSync y se imprime por pantalla con su color.

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