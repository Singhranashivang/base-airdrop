"use client";

import { useEffect, useState } from "react";

export default function Leaderboard() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("/api/leaderboard")
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <div>
      <h2>Leaderboard</h2>

      {users.map((user: any, index) => (
        <p key={index}>
          {user.name} - {user.points}
        </p>
      ))}
    </div>
  );
}