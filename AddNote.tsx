import { useState } from "react";
import { Note } from "../App";

const AddNote: React.FC<{
  notes: Note[];
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
}> = ({ notes, setNotes }) => {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const handleAddNote = (event: React.FormEvent) => {
    event.preventDefault();
    if (title.trim() === '' || content.trim() === '') {
      return;
    }
    setNotes(prevNotes => [
      ...prevNotes,
      { title, content, id: Math.random().toString() } // Added id
    ]);
    setTitle(""); // Clear the input fields
    setContent(""); // Clear the textarea
  };

  return (
    <div>
      <form className="flex flex-col items-start gap-4" onSubmit={handleAddNote}>
        <input
          type="text"
          placeholder="note title"
          className="border-2 border-sky-400 p-2 rounded-md"
          onChange={(event) => setTitle(event.target.value)}
          value={title} 
        />
        <textarea
          placeholder="Note content"
          className="border-2 border-sky-400 p-2 rounded-md"
          onChange={(event) => setContent(event.target.value)}
          value={content} 
        ></textarea>
        <button type="submit" className="bg-sky-700 p-2 rounded-sm text-white">
          Add Note
        </button>
      </form>
    </div>
  );
};

export default AddNote;