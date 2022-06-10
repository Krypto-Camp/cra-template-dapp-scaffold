export const contractAddress = process.env.REACT_APP_CONTRACT_ADDRESS;
export const contractABI = [
  {
    inputs: [],
    name: "counter",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "setIncrement",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
