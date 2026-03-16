"use client";

export default function ClaimButton() {

  function claimAirdrop() {
    alert("Airdrop claim transaction sent!");
  }

  return (
    <div>
      <button onClick={claimAirdrop}>
        Claim Airdrop
      </button>
    </div>
  );
}