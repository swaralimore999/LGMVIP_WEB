import { React, useState } from "react";
import User from "./User";
import "../App.css";
import Loader from "./Loader";
export default function Users() {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(false);

  const loadUsers = async () => {
    setLoading(true);
    const response = await fetch("https://reqres.in/api/users?page=1");
    const data = await response.json();
    setUsers(data);
    setTimeout(30000)
    setLoading(false);
  };

  return (
    <>
    <div className="btn">
      <button className="users__btn" onClick={() => loadUsers()}>GET USERS</button>
    </div>
      {loading ? (
        <Loader/>
      ) : (
        <div className="users__container">
          {users ? users.data.map((user) => {
            return <User user={user}></User>;
          }):(null)}
        </div>
      )}
    </>
  );
}