"use client";

import { useState } from "react";

const [loading, setLoading] = useState(false);

export default function ClaimButton() {

  function claimAirdrop() {
    alert("Airdrop claim transaction sent!");
  }

  return (
    
    <div>
    <button onClick={claimAirdrop} disabled={loading}>
  {loading ? "Processing..." : "Claim Your Airdrop"}
</button>

    </div>
  );
}