import { useState } from "react";
import { useEffect } from "react";

const Autofill = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParam, setSearchParam] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);

  const fetchUserData = async () => {
    try {
      setLoading(true);
      const res = await fetch("https://dummyjson.com/users");
      const data = await res.json();
      console.log(data.users);
      if (data) {
        setUsers(data.users.map((item) => item.firstName));
      }
      setLoading(false);
    } catch (e) {
      setError(e.message);
      setLoading(false);
      console.log(error);
    }
  };

  const handleOnChange = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchParam(query);
    if (users && query) {
      setFilteredUsers(
        users.filter((item) => item.toLowerCase().indexOf(query) > -1)
      );
    } else {
      setFilteredUsers(null);
    }
  };

  const handleSelection = (event) => {
    setSearchParam(event.target.innerText);
    setFilteredUsers(null);
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <div>
      {error ? <h2>{error}</h2> : null}
      {loading ? (
        <h2>Loading data! Please wait!</h2>
      ) : (
        !error && (
          <input
            onChange={handleOnChange}
            type="text"
            placeholder="Search by first name"
            value={searchParam}
          ></input>
        )
      )}
      {filteredUsers &&
        filteredUsers.map((item, index) => (
          <li key={index} onClick={handleSelection}>
            {item}
          </li>
        ))}
    </div>
  );
};

export default Autofill;
