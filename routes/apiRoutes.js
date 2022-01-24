// global requirements
const router = require("express").Router();
const { notes } = require("../db/db.json");
const { createNewNote, deleteNote } = require("../lib/notes");

// GET req for notes.html
router.get("/notes", (req, res) => {
    if (notes) {
        res.send(notes);
    } else {
        res.json("close");
    }
}); 
// GET * returning index.html
router.post("/notes", (req, res) => {
    req.body.id = notes.length.toString();

    const note = createNewNote(req.body, notes);

    res.json(note);
});

router.delete("/notes/:id", (req, res) => {
    res.send(deleteNote(req.params.id, notes));
});


module.exports = router;