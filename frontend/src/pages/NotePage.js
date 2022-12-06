import { useState, useEffect } from "react";

const NotePage = ({ match }) => {
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

  return (
    <>
      <h1>{note?.body}</h1>
    </>
  );
};

export default NotePage;
