import WalletConnect from "../components/WalletConnect";
import AirdropChecker from "../components/AirdropChecker";
import ClaimButton from "../components/ClaimButton";
import Referral from "../components/Referral";
import Footer from "../components/Footer";
import Leaderboard from "../components/Leaderboard";

export default function Home() {
  return (
    <main>
      <div style={{ padding: "20px" }}></div>

<div style={{ marginBottom: "20px" }}>
  </div>      <h2>Wallet</h2>
<h2>Airdrop</h2>
<h2>Leaderboard</h2>
      <WalletConnect />
      <hr />
      <AirdropChecker />
      <hr />
      <ClaimButton />
      <hr />
      <Referral />
      <hr />
      <Footer />
      <hr />
      <Leaderboard />
      <hr />
    </main>
  );
}