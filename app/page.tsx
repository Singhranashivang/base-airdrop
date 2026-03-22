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
      <h1>Base Airdrop Dashboard</h1>
      <h2>Airdrop Section</h2>
      <WalletConnect />
      <AirdropChecker />
      <ClaimButton />
      <Referral />
      <Footer />
      <Leaderboard />
    </main>
  );
}