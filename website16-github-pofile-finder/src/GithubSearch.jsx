import { useEffect, useState } from "react";
import Card from "./Card.jsx";
import classes from "./Card.module.css";

const GithubSearch = () => {
  const [userName, setUserName] = useState("getarun4t");
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchGithubProfileData = async () => {
    setLoading(true);
    const res = await fetch(`https://api.github.com/users/${userName}`);
    const data = await res.json();
    console.log(data);
    if (data) {
      setUserData(data);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchGithubProfileData();
  }, []);

  if (loading) {
    return <h1>Loading data! Please wait!</h1>;
  }

  return (
    <div>
      <div className={classes.searchBar}>
        <input
          name="search-by-username"
          type="text"
          placeholder="Search Github Username"
          value={userName}
          onChange={(event) => setUserName(event.target.value)}
        />
        <button onClick={fetchGithubProfileData}>Search</button>
      </div>
      <div>
        <Card user={userData} />
      </div>
    </div>
  );
};

export default GithubSearch;
