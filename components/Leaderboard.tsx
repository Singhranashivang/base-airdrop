"use client";

const users = [
  { name: "Rana", points: 120 },
  { name: "User2", points: 95 },
  { name: "User3", points: 80 }
];

export default function Leaderboard() {
  return (
    <div>
      <h2>Leaderboard</h2>

      {users.map((user, index) => (
        <p key={index}>
          {user.name} - {user.points} pts
        </p>
      ))}
    </div>
  );
}