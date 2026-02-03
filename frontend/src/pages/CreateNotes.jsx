import { Container } from "react-bootstrap";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { UserContext } from "../context/UserContext";
import NoteForm from "../components/notes/NoteForm";

const CreateNotes = () => {
  const navigate = useNavigate();
  const { createNote } = useContext(UserContext);

  const handleCreate = async (formData) => {
    if (!formData.title || !formData.description) {
      toast.error("Title and description are required");
      return;
    }

    const success = await createNote(formData);
    if (success) navigate("/notes");
  };

  return (
    <div className="notes-inner">
      <Container>
        <div className="notes-wrap mb-4">
          <h2 className="main-head">Create Note</h2>
        </div>

        <div className="form-wrap rounded">
          <NoteForm
            initialData={{
              title: "",
              description: "",
              category: "",
              tags: "",
            }}
            onSubmit={handleCreate}
            submitText="Save Note"
          />
        </div>
      </Container>
    </div>
  );
};

export default CreateNotes;
