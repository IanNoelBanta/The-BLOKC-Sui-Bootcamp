// import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {
  ConnectButton,
  useCurrentAccount,
  useSuiClientQuery,
  // useSuiClientQueries,
} from "@mysten/dapp-kit";

function ConnectedAccount() {
  const account = useCurrentAccount();

  if (!account) {
    return null;
  }

  return (
    <div>
      <div>Connected to {account.address}</div>
      <div><SuiBalance address={account.address} /></div>
      <div><OwnedObjects address={account.address} /></div>
    </div>
  );
}

function SuiBalance({ address }: { address: string }) {
  const { data } = useSuiClientQuery("getAllBalances", {
    owner: address,
  });

  const walletBalanceString = data?.[0]?.totalBalance?.toString();
  const walletBalance = walletBalanceString ? parseFloat(walletBalanceString) / 1000000000 : 0;
  
  return (
    <div>Your Sui Balance is: {walletBalance}</div>
  );
}

function OwnedObjects({ address }: { address: string }) {
  const { data } = useSuiClientQuery('getOwnedObjects', {
      owner: address,
  });
  if (!data) {
      return null;
  }

  return (
      <ul>
          {data.data.map((object) => (
              <li key={object.data?.objectId}>
                  <a href={`https://suiexplorer.com/object/${object.data?.objectId}`}>
                      {object.data?.objectId}
                  </a>
              </li>
          ))}
      </ul>
  );
}

function App() {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="App">
        <header className="App-header">
          <ConnectButton />
        </header>
      </div>
      <ConnectedAccount />
      <p className="read-the-docs">Click on the Connect Wallet Button</p>
    </>
  );
}

export default App;
