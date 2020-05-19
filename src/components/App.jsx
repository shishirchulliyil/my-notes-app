import React, { useState, useContext } from "react";
import Note from "./Note";
import CreateArea from "./CreateArea";
import Header from "./Header";
import Footer from "./Footer";
import { AuthContext } from "../Context/AuthContext";
import { Redirect } from "react-router-dom";

function App(props) {
  const [notes, setNotes] = useState([]);
  const { history } = props;
  console.log(history);

  const { isAuthenticated, toggleAuth } = useContext(AuthContext);
  console.log("App.jsx isAuthenticated: " + isAuthenticated);

  function addNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      {!isAuthenticated && <Redirect to="/login" />}
      <Header enableLogout={true} />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
