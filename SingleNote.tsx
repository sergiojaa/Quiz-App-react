import { Note } from "../App";

const SingleNote: React.FC<{
  note: Note;
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
}> = ({ note, setNotes }) => {
  return (
    <div>
      <h1>{note.title}</h1>
      <p>{note.content}</p>
      <button
        onClick={() => {
          setNotes((notes) => notes.filter((n) => n.id !== note.id));
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default SingleNote;