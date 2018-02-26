const fs = require('fs');

const fetchNote = () => {
	try { 
		let notesString = fs.readFileSync('notes-data.json');
		return JSON.parse(notesString);
	} catch(e) {
		return [];
	}
};

const saveNote = (notes) => {
	fs.writeFileSync('notes-data.json', JSON.stringify(notes));	
}

const logNote = (note) => {
console.log(`----
Title: ${note.title}
Body: ${note.body} `);
}

const addNote = (title, body) => {
	let notes = fetchNote();
	const note = {
		title,
		body
	};

	const duplicatedNote = notes.filter( (note) => note.title === title );

	if (duplicatedNote.length === 0) {
		notes.push(note);
		saveNote(notes);
	}
};

const readNote = (title) => {
	const notes = fetchNote();
	const note = notes.filter( (note) => note.title === title );
	
	return note[0];
};

const removeNote = (title) => {
	const notes = fetchNote();
	const updatedNotes = notes.filter( (note) => note.title !== title );
	saveNote(updatedNotes);

	return notes.length !== updatedNotes.length;
};

const listNotes = () => {
	return fetchNote();
};

module.exports = {
	addNote,
	logNote,
	readNote,
	removeNote,
	listNotes
};