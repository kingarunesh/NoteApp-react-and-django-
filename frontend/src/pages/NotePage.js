import { useState, useEffect } from "react";
import { ReactComponent as ArrowLeft } from "../assets/arrow-left.svg";
import { Link } from "react-router-dom";

const NotePage = ({ match, history }) => {
  const noteID = match.params.id;
  const [note, setNote] = useState(null);

  useEffect(() => {
    getNote();
  }, []);

  const getNote = async () => {
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
    updateNote();
    history.push("/");
  };

  return (
    <>
      <div className="note">
        <div className="note-header">
          <h3>
            {/* <Link to="/">
              <ArrowLeft />
            </Link> */}

            <ArrowLeft onClick={handler} />
          </h3>
        </div>
        <textarea
          onChange={(e) => {
            setNote({ ...note, body: e.target.value });
          }}
          defaultValue={note?.body}
        ></textarea>
      </div>
    </>
  );
};

export default NotePage;
