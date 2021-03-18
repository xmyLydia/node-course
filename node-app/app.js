const chalk = require('chalk');
const yargs = require('yargs');
const getNotes = require('./notes');

// customize yargs version
yargs.version('1.0.0');
//add, remove read, list
//create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder:{
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        description: {
            describe: 'Note description',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        console.log('Adding a new note', argv.title, ',description:', argv.description);
    }
})
 //Remove command
 yargs.command({
     command:'remove',
     describe: 'Remove a note',
     handler: function(){
        console.log('Remove a new note')
     }
 })
  //List command
  yargs.command({
    command:'list',
    describe: 'List a note',
    handler: function(){
       console.log('List a new note')
    }
})
 //Read command
 yargs.command({
    command:'read',
    describe: 'Read a note',
    handler: function(){
       console.log('Read a new note')
    }
})
yargs.parse();