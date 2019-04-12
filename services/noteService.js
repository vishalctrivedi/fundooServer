const noteModel = require('../app/models/notemodel')

exports.createNoteService = (req, callback) => {

    noteModel.createNote(req, (err, result) => {
        try {
            if (err) {
                return callback(err);
            }
            else {
                return callback(null, result);
            }
        }
        catch (err) {
            console.log("exception!!!!!!!!!!!", err)
        }
    })
}