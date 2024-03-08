import { useEffect, useState } from "react";
import "./styles.css";
import Suggestions from "./suggestions";

export default function SearchAutoComplete() {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [searchParam, setSearchParam] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState("");

  async function fetchListOfUsers() {
    try {
      setLoading(true);
      const response = await fetch("https://dummyjson.com/users");
      const data = await response.json();
      console.log(data);
      if (data && data.users && data.users.length > 0) {
        setUsers(data.users.map((userItem) => userItem.firstName));
        setLoading(false);
        setError(null);
      }
    } catch (error) {
      setLoading(false);
      console.log(error.message);
      setError(error.message);
    }
  }

  useEffect(() => {
    fetchListOfUsers();
  }, []);

  function handleChange(event) {
    const query = event.target.value.toLowerCase();
    setSearchParam(query);

    if (query.length > 1) {
      const filteredData =
        users && users.length
          ? users.filter((item) => item.toLowerCase().indexOf(query) > -1)
          : [];
      setFilteredUsers(filteredData);
      setShowDropdown(true);
    } else {
      setShowDropdown(false);
    }
  }
  console.log(users, filteredUsers);

  function handleClick(event) {
    console.log("handleClick: ", event.target.innerText);
    setShowDropdown(false);
    setSearchParam(event.target.innerText);
    setFilteredUsers([]);
  }

  return (
    <div className="search-autocomplete-container">
      {loading ? (
        <h1>Loading data! Please wait</h1>
      ) : (
        <input
          value={searchParam}
          name="search-users"
          placeholder="Search Users here..."
          onChange={handleChange}
        />
      )}
      {/* if dropdown value is true then render the suggestions */}
      {showDropdown && (
        <Suggestions data={filteredUsers} handleClick={handleClick} />
      )}
    </div>
  );
}
