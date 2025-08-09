import { useEffect, useState } from "react";
import fetchUserData from "../services/githubService";

function Search() {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState({});
  const [providedUsername, setProvidedUsername] = useState(false);

  async function handleSubmit(event) {
      event.preventDefault();
      setUserData(await fetchUserData(username));
      setProvidedUsername(true);
    setUsername("");
  }
  useEffect(() => {
    console.log("wait first");
  }, [userData]);

  return (
    <div>
      {!providedUsername ? (
        <form onSubmit={(e) => handleSubmit(e)}>
          <label htmlFor="username">Github Username</label>
          <input
            id="username"
            type="text"
            placeholder="Enter a valid github Username"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
        </form>
      ) : userData.status === 200 ? (
        <div>
            
          <p>{userData.data.login}</p>
          <img src={userData.data.avatar_url} alt="" />
          <a href={userData.data.html_url} target="blank">
            Link to github profile
          </a>
          <button onClick={() => setProvidedUsername(false)}>
            More Search
          </button>
        </div>
      ) : userData.status === 404 ? (
        <div>
          <p> Looks like we cant find the user</p>
          <button onClick={() => setProvidedUsername(false)}>
            More Search
          </button>
        </div>
      ) : (
        <p>Loading ...</p>
      )}
    </div>
  );
}

export default Search;
