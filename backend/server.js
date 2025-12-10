const express = require('express');
const dotenv = require('dotenv');
const notes = require('./data/notes')

dotenv.config();

const app = express();

// default route
app.get("/", (req, res) => {
  res.send("Server started successfully 🚀");
});

// get all the notes
app.get("/api/notes", (req, res) => {
  res.json(notes);
})

// particular id
app.get("/api/notes/:id", (req, res) => {
  const note = notes.find((n) => n._id === req.params.id);

  res.json(note);
  
})
// server start
app.listen(process.env.PORT || 5000, () => {
  console.log(`Server running on port ${process.env.PORT || 5000}`);
});
