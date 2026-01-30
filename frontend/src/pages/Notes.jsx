import React, { useEffect, useState } from "react";
import NotesTopbar from "../components/notes/NotesTopbar";
import NotesCard from "../components/notes/NotesCard";
import api from "../api/axios";
import { toast } from "react-toastify";

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  // 🔍 Search / Filter / Sort states
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sortBy, setSortBy] = useState("");

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    try {
      const res = await api.get("/notes");
      setNotes(res.data.data || res.data);
    } catch (error) {
      toast.error("Failed to load notes");
    } finally {
      setLoading(false);
    }
  };

  // 🔥 Search + Filter + Sort Logic
  const filteredNotes = notes
    // Search
    .filter(note =>
      note.title?.toLowerCase().includes(search.toLowerCase())
    )
    // Category filter ✅
    .filter(note =>
      category === "All" ? true : note.category === category
    )
    // Sort
    .sort((a, b) => {
      if (sortBy === "Date") {
        return new Date(b.createdAt) - new Date(a.createdAt);
      }
      return 0;
    });

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
  {loading && <p>Loading notes...</p>}

  {!loading && filteredNotes.length === 0 && (
    <p>No notes found</p>
  )}

  {!loading && filteredNotes.length > 0 &&
    filteredNotes.map((note) => (
      <div
        key={note._id}
        className="col-xl-3 col-lg-4 col-md-6 col-sm-12"
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
