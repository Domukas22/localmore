import { useState, useEffect } from "react";
import LM_Logo from "/LM_logo_long.svg";
import "./App.css";

function App() {
  const [sportsfields, setSportsfields] = useState([]);

  useEffect(() => {
    fetch("https://localmore-production.up.railway.app/api/sportsfields")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok " + response.statusText);
        }
        return response.json();
      })
      .then((data) => setSportsfields(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <>
      <div>
        <img src={LM_Logo} className="logo react" alt="React logo" />
        <p style={{ fontSize: "20px" }}>This is Localmore</p>
      </div>
      <div>
        {sportsfields.map((item) => (
          <p key={item._id}>{item.name}</p>
        ))}
      </div>
    </>
  );
}

export default App;
