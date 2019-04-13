const noteService = require('../services/noteService')

exports.createNoteController = (req, res) => {

    noteService.createNoteService(req.body, (err, result) => {
        if (err) {            
            res.status(400).send({
                status: "unseccessfull",
                result: err
            });
        }
        else {
            res.status(200).send({
                status: "successfull",
                result: result
            })
        }
    })
}

exports.getAllNotesController = (req, res) => {

    noteService.getAllNotesService(req.body, (err, result) => {
        if (err) {            
            res.status(400).send({
                status: "unseccessfull",
                result: err
            });
        }
        else {
            res.status(200).send({
                status: "successfull",
                result: result
            })
        }
    })
}