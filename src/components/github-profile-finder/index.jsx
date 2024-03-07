import { useEffect, useState } from "react";
import "./styles.css";
import User from "./user";

export default function GithubProfileFinder() {
  const [username, setUsername] = useState("hsarfaraz");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);

  function handleSubmit() {
    // console.log(username);
    fetchGithubUserData();
  }

  async function fetchGithubUserData() {
    setLoading(true);
    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json();
    if (data) {
      setLoading(false);
      setUserData(data);
    }
    console.log(data);
  }

  useEffect(() => {
    fetchGithubUserData();
  }, []);

  if (loading) {
    return <div>Loading data! please wait</div>;
  }
  return (
    <div className="github-profile-container">
      <div className="input-wrapper">
        <input
          name="search-by-username"
          type="text"
          placeholder="search github username"
          onChange={(event) => setUsername(event.target.value)}
        />
        <button onClick={handleSubmit}>Search</button>
        {/* {username} */}
        {userData !== null ? <User user={userData} /> : null}
      </div>
    </div>
  );
}
