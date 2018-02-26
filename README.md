### Notes

A simple command line application to create, read, update and delete note in Node.js

For parsing command line, a npm package is used [yargs](https://www.npmjs.com/package/yargs)

**[FS]**(https://nodejs.org/api/fs.html) one of the core Node.js module is used. 
A `notes-data.json` file is used to store all the notes.

When a user enter a text to save then it is converted into JSON using `JSON.stringify()` and for reading a text, it is retrived using `JSON.parse()`.

Two FS methods are used here:
1. readFileSync
Code:

```
let notesString = fs.readFileSync('notes-data.json');
return JSON.parse(notesString);
```

2. writeFileSync
Code:

```
fs.writeFileSync('notes-data.json', JSON.stringify(notes));
```

To run this application on your local machine, follow the below steps:

```
git clone [this repository]()
npm install
node app.js command --passArguments
```

Below are the 5 commands that you can use:
1. Add
2. Read
3. Remove
4. List 
