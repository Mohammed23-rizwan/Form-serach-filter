import { useState } from "react";
import "./App.css";
import "./users";
import { Users } from "./users";
import Table from "./component/table";

function App() {
  const [query, setquery] = useState(0);
  const search = (data) => {
    return data.filter(
      (item) =>
        item.first_name.toLowerCase().includes(query) ||
        item.last_name.toLowerCase().includes(query) ||
        item.email.toLowerCase().includes(query)
    );
  };
  return (
    <>
      <div className="app">
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
        <Table data={search(Users)} />
      </div>
    </>
  );
}

export default App;
