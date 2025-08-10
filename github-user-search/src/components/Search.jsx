import { useEffect, useState } from "react";
import fetchUserData from "../services/githubService";
import { Link } from "react-router-dom";

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
    // map && location
  }, [userData]);

  return (
    <div className="form">
      <img
        src="/public/images/backdrop.png"
        alt="GitHub Octocat"
        className="octocat w-[600px]"
      />

      <div>
        {!providedUsername ? (
          <div>
            <form onSubmit={(e) => handleSubmit(e)} className="form">
              <label htmlFor="username" className="font-extrabold text-3xl">
                Github Username
              </label>
              <input
                id="username"
                type="text"
                placeholder="Enter a valid github Username"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
                className="p-2 border-2"
              />
              <div className="flex gap-2 justify-center">
                <Link className="button" to='/'>Back</Link>
                <button type="submit" className="advanced-btn">
                  Submit
                </button>
              </div>
            </form>
          </div>
        ) : userData.status === 200 ? (
          <div>
            <p className="text-4xl font-extrabold">{userData.data.login.slice(0,1).toUpperCase() + userData.data.login.slice(1,)}</p>
            <img src={userData.data.avatar_url} alt="" />
            <a href={userData.data.html_url} target="blank">
              Link to github profile
            </a><br />
            <button className="mt-4" onClick={() => setProvidedUsername(false)}>
              More Search
            </button>
          </div>
        ) : userData.status === 404 ? (
          <div>
            <p> Looks like we cant find the user</p>
            <button onClick={() => setProvidedUsername(false)}>
              Another Search
            </button>
          </div>
        ) : (
          <div>
            <p>Loading ...</p>
            <button onClick={() => setProvidedUsername(false)}>
              Another Search
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Search;
