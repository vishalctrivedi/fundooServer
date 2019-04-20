const mongoose = require('mongoose');

const NoteSchema = mongoose.Schema({
    title: String,
    note: String,
    userEmail:String,
    archive:Boolean
}, {
        timeStamps: false
    });

const Note = mongoose.model("Note", NoteSchema)

function noteModel() { }

noteModel.prototype.createNote = (req, callback) => {

    const newNote = new Note({
        'title': req.title,
        'note': req.note,
        'userEmail':req.userEmail,
        'archive':req.archive
    })

    newNote.save((err, result) => {
        if (err) {
            return callback(err)
        }
        else {
            return callback(null, result);
        }
    })
}


noteModel.prototype.getAllNotes = (usersDetails, callback) => {
    Note.find({'userEmail':usersDetails.userEmail}, (err, result) => {
        if (err) {
            return callback(err)
        }
        else {
            return callback(null, result)
        }
    })
}

noteModel.prototype.archiveNotes = (usersDetails, callback) => {
    Note.find({'archive':usersDetails.archive}, (err, result) => {     
        if (err) {
            return callback(err)
        }
        else {
            return callback(null, result)
        }
    })
}




module.exports = new noteModel();