import { Note } from "../App";
import SingleNote from "./SingleNote";

const NodeList: React.FC<{
  notes: Note[];
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
}> = ({ notes, setNotes }) => {
  return (
    <div>
      {notes.map((note) => (
        <SingleNote
          setNotes={setNotes}
          key={note.id}
          note={note} // Change here
        />
      ))}
    </div>
  );
};

export default NodeList;