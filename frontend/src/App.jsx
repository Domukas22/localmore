import { useState, useEffect } from "react";
import LM_Logo from "/LM_logo_long.svg";
import "./App.css";

function App() {
  const [tags, SET_tags] = useState([]);

  useEffect(() => {
    // fetch("https://localmore-production.up.railway.app/db/tags")
    fetch("http://localhost:3001/db/tags")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok " + response.statusText);
        }
        return response.json();
      })
      .then((data) => SET_tags(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <>
      <div>
        <img src={LM_Logo} className="logo react" alt="React logo" />
        <h4 style={{ fontSize: "20px" }}>Tags</h4>
      </div>
      <div className="tagWrap">
        {tags.map((tag) => {
          return (
            <div key={tag._id} style={{ display: "flex" }} className="tag">
              <img src={tag.icon} className="tagIcon"></img>
              <p>{tag.name.en}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
