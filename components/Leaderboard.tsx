"use client";

import { useEffect, useState } from "react";

export default function Leaderboard() {

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

 useEffect(() => {
  setLoading(true);
  fetch("/api/leaderboard")
    .then(res => res.json())
    .then(data => {
      setUsers(data);
      setLoading(false);
    });
}, []);

  return (
    <div>
        <div style={{ border: "1px solid black" }}></div>
      <h2>Leaderboard</h2>
      
      {loading && <p>Loading...</p>}
      

      {users.map((user: any, index) => (
        <p key={index}>
          {user.name} - {user.points}
        </p>
      ))}
    </div>
  );
}