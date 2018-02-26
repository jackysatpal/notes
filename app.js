const fs = require('fs');
const yargs = require('yargs');

const notes = require('./notes.js');

const titleOptions = {
	describe: 'Title of note',
	demand: true,
	alias: 't'
};

const bodyOptions = {
	descrbibe: 'Body of note',
	demand: true,
	alias: 'b'
}; 

const argv = yargs
		.command('add', 'Add a new note', {
			title: titleOptions,
			body: bodyOptions
		})
		.command('list', 'List all notes')
		.command('read', 'Read a note', {
			title: titleOptions
		})
		.command('remove', 'Remove a note', {
			title: titleOptions
		})
		.help()
		.argv;

const command = argv._[0];

if (command === 'read') {
	const note = notes.readNote(argv.title);

	if (!note) {
		console.log('Note not found');
	} else {
		notes.logNote(note);
	}

} else if (command === 'add') {
	const note = notes.addNote(argv.title, argv.body);

	if (note) {
		console.log('Note title is already taken');
	} else {
		notes.logNote(note);
	}

} else if (command === 'remove') {
	const result = notes.removeNote(argv.title);
	const output = result ? 'Note removed' : 'Note not found';

	console.log(output);

} else if (command === 'list') {
	const listNotes = notes.listNotes();
	listNotes.forEach( (note) => notes.logNote(note) );

} else {
	console.log('Command not recognized');
}