import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import fetchUserData from "../services/githubService";

function AdvancedSearch() {
  const [location, setLocation] = useState("");
  const [repoNumber, setRepoNumber] = useState("");
    const [userData, setUserData] = useState({});

  async function handleSubmit (event) {
    event.preventDefault();
    setUserData(await fetchUserData({location: location}, {repo: `>${repoNumber}`}));
    setLocation(''); setRepoNumber('');

  } 

  useEffect(() => console.log('wait'),[userData])

  return (
    <div>
      <img
        src="/public/images/backdrop.png"
        alt="GitHub Octocat"
        className="octocat w-[600px]"
      />
      {Object.keys(userData).length == 0 ? (
        <form onSubmit={(e) => handleSubmit(e)}>
          <h3 className="text-4xl font-extrabold">Search Criteria</h3>
          <div>
            <div className="flex flex-col pt-8">
              <label
                htmlFor="location"
                className="font-extrabold text-3xl text-left"
              >
                Location:
              </label>
              <input
                className="p-2 border-2"
                type="text"
                id="location"
                onChange={(e) => setLocation(e.target.value)}
                value={location}
                placeholder="Enter a country or city (e.g., Nigeria, New York)"
              />
            </div>

            <div className="flex flex-col pt-4 pb-8">
              <label htmlFor="repoNumber" className="font-extrabold text-3xl">
                Number of Repositories:
              </label>
              <input
                className="p-2 border-2"
                type="text"
                id="repoNumber"
                onChange={(e) => setRepoNumber(`${e.target.value}`)}
                value={repoNumber}
                placeholder="Minimum number of repositories (e.g., 10)"
              />
            </div>
          </div>
          <div className="flex justify-center gap-4 ">
            <Link className="button" to="/">
              Back
            </Link>
            <button className="advanced-btn" type="submit">
              Submit
            </button>
          </div>
        </form>
      ) : userData.status === 200 ? (
        <div className="flex flex-col ">
          <table>
            <thead>
              <tr>
                <th>S/N</th>
                <th>USERNAME</th>
                <th>IMAGE</th>
                <th>GITHUB URL</th>
              </tr>
            </thead>
            {console.log(userData.data.items)}
            <tbody>
              {userData.data.items.map((user, index) => (
                <tr key={user.login}>
                  <td>{index + 1}</td>
                  <td>
                    <p>{user.login}</p>
                  </td>
                  <td>
                    <img className="table-img" src={user.avatar_url} alt="" />
                  </td>
                  <td>
                    <a href={user.html_url} target="blank">
                      {user.html_url}
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <Link className="button" to="/">
            Advanced Search
          </Link>
        </div>
      ) : userData.status === 404 ? (
        <div>
          <p className="pb-4"> Looks like we cant find the user</p>
          <Link to="/advanced" className="button">
            Advanced Search
          </Link>
        </div>
      ) : (
        <div>
          <p className="pb-4">Loading ...</p>
          <Link to="/" className="button">
            Advanced Search
          </Link>
        </div>
      )}
    </div>
  );
}

export default AdvancedSearch;
