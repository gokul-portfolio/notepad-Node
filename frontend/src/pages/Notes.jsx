import React from 'react';
import NotesTopbar from '../components/notes/NotesTopbar';
import NotesCard from '../components/notes/NotesCard';
import { notes } from "../data/notesData";

const Notes = () => {
  return (
    <div className="container-fluid">
      <div className="notes-wrap">

        <NotesTopbar />

        {/* Notes grid */}
        <div className="notes-card-wrap">
          {notes.map((note) => (
            <NotesCard
              key={note.id}
              note={note} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Notes;
