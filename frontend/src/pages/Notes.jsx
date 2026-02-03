import { useContext, useEffect, useMemo, useState } from "react";
import { UserContext } from "../context/UserContext";

import NotesTopbar from "../components/notes/NotesTopbar";
import NotesCard from "../components/notes/NotesCard";

const Notes = () => {

  //  DATA FROM CONTEXT
  const { notes, loadingNotes, getNotes } = useContext(UserContext);

  //  UI STATES
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sortBy, setSortBy] = useState("");

  //  FETCH NOTES ON PAGE LOAD
  useEffect(() => {
    getNotes();
  }, []);

  //  OPTIMIZED SEARCH + FILTER + SORT
  const filteredNotes = useMemo(() => {
    return [...notes]
      .filter(note =>
        note.title?.toLowerCase().includes(search.toLowerCase())
      )
      .filter(note =>
        category === "All" ? true : note.category === category
      )
      .sort((a, b) => {
        if (sortBy === "Date") {
          return new Date(b.createdAt) - new Date(a.createdAt);
        }
        return 0;
      });
  }, [notes, search, category, sortBy]);

  return (
    <div className="container-fluid">
      <div className="notes-wrap">

        <NotesTopbar
          search={search}
          setSearch={setSearch}
          category={category}
          setCategory={setCategory}
          sortBy={sortBy}
          setSortBy={setSortBy}
        />

        <div className="row g-3">

          {loadingNotes && <p>Loading notes...</p>}

          {!loadingNotes && filteredNotes.length === 0 && (
            <p>No notes found</p>
          )}

          {!loadingNotes &&
            filteredNotes.map(note => (
              <div
                key={note._id}
                className="col-xl-4 col-lg-6 col-md-12 col-sm-12"
              >
                
                <NotesCard note={note} />


              </div>
              
            ))

          }

        </div>
      </div>
    </div>
  );
};

export default Notes;
