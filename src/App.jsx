import { useState } from "react";
import "./App.css";
import "./users";
import { Users } from "./users";

function App() {
  const [query, setquery] = useState(0);
  return (
    <>
      <div className="main">
        <div className="search-bar">
          <label htmlFor="search">Search</label>
          <input
            type="search"
            name=""
            id="search"
            placeholder="Search..."
            onChange={(e) => {
              setquery(e.target.value);
            }}
          />
        </div>
        <div className="serach-result">
          <ul className="list">
            {Users.filter((search) =>
              search.first_name.toLowerCase().includes(query)
            ).map((data) => (
              <li className="listitem" key={data.id}>
                {data.first_name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
