import { useState } from "react";
import AddNote from "./components/AddNote";
import NodeList from './components/NodeList';
import { Note } from "./App";

function App() {
  const [notes, setNotes] = useState<Note[]>([]);

  return (
    <div>
      <AddNote notes={notes} setNotes={setNotes} />
      <NodeList notes={notes} setNotes={setNotes} />
    </div>
  );
}

export default App;