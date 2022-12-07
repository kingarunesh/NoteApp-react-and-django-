import { useState, useEffect } from "react";
import { ReactComponent as ArrowLeft } from "../assets/arrow-left.svg";

const NotePage = ({ match, history }) => {
  const noteID = match.params.id;
  const [note, setNote] = useState(null);

  useEffect(() => {
    getNote();
  }, []);

  const getNote = async () => {
    if (noteID === "new") return;

    let response = await fetch(`/api/note/${noteID}/`);
    let data = await response.json();
    setNote(data);
  };

  const updateNote = async () => {
    fetch(`/api/note/${noteID}/update/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(note),
    });
  };

  const handler = () => {
    console.log(note);
    console.log(note.body);
    if (noteID !== "new" && note.body === "") {
      deleteHanlder();
    } else if (noteID !== "new") {
      updateNote();
    } else if (noteID === "new" && note.body !== null) {
      createNote();
    }

    history.push("/");
  };

  const createNote = async () => {
    fetch("/api/note/create/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(note),
    });
  };

  const deleteHanlder = async () => {
    fetch(`/api/note/${noteID}/delete/`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    history.push("/");
  };

  return (
    <>
      <div className="note">
        <div className="note-header">
          <h3>
            <ArrowLeft onClick={handler} />
          </h3>

          {noteID !== "new" ? (
            <button onClick={deleteHanlder}>Delete</button>
          ) : (
            <button onClick={handler}>Done</button>
          )}
        </div>
        <textarea
          onChange={(e) => {
            setNote({ ...note, body: e.target.value });
          }}
          value={note?.body}
        ></textarea>
      </div>
    </>
  );
};

export default NotePage;
