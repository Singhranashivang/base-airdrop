import WalletConnect from "../components/WalletConnect";
import AirdropChecker from "../components/AirdropChecker";

export default function Home() {
  return (
    <main>
      <h1>Base Airdrop Dashboard</h1>
      <WalletConnect />
      <AirdropChecker />
    </main>
  );
}