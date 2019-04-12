const mongoose = require('mongoose');

const NoteSchema = mongoose.Schema({
    title: String,
    note: String
}, {
        timeStamps: false
    });

const Note = mongoose.model("Note", NoteSchema)

function noteModel() { }

noteModel.prototype.createNote = (req,callback) =>{
    
    const newNote = new Note({
        'title':req.title,
        'note':req.note
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




module.exports = new noteModel();