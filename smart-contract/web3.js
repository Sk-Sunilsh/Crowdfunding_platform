import Web3 from "web3";

let web3;



if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
  // We are in the browser and MetaMask is installed
  web3 = new Web3(window.ethereum);

  // Prompt MetaMask to enable accounts access
  window.ethereum.request({ method: "eth_requestAccounts" }).catch((err) => {
    console.error("User denied account access", err);
  });
} else {
  // We are on the server OR MetaMask is not running
  // Use your own Infura provider or another provider
  const provider = new Web3.providers.HttpProvider(
    "https://sepolia.infura.io/v3/2e2c861981fc4783b03dae827b0bf145"
  );

  web3 = new Web3(provider);
}


export default web3;
