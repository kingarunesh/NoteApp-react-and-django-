import { useState, useEffect } from "react";
import ListItem from "../components/ListItem";

function NotesListPage() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    getNotes();
  }, []);

  const getNotes = async () => {
    let response = await fetch("/api/notes/");

    let data = await response.json();

    console.log(data);

    setNotes(data);
  };

  return (
    <>
      <div>
        {notes.map((note, index) => (
          <ListItem key={index} note={note} />
        ))}
      </div>
    </>
  );
}

export default NotesListPage;
