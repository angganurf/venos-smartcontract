const HDWalletProvider = require("@truffle/hdwallet-provider");
// create a file at the root of your project and name it .env -- there you can set process variables
// like the mnemomic etc. Note: .env is ignored by git to keep your private information safe

require("dotenv").config();

const mnemonic = process.env["MNEMONIC"].toString().trim();

module.exports = {
  plugins: ["truffle-plugin-verify"],
  networks: {
    development: {
      host: "127.0.0.1", // Localhost (default: none)
      port: 8545, // Standard Ethereum port (default: none)
      network_id: "*", // Any network (default: none)
    },
    opBNBTestnet: {
      verify: {
        apiUrl:
          "https://open-platform.nodereal.io/0a87ef3dd9964c519f1f9d1185710542/op-bnb-testnet/contract/",
        apiKey: "0a87ef3dd9964c519f1f9d1185710542",
        explorerUrl: "https://testnet.opbnbscan.com/",
      },
      provider: () =>
        new HDWalletProvider(
          mnemonic,
          `https://opbnb-testnet-rpc.bnbchain.org`
        ),
      network_id: 5611,
      confirmations: 3,
      timeoutBlocks: 200,
      skipDryRun: true,
    },

    dashboard: {
      verify: {
        apiUrl:
          "https://open-platform.nodereal.io/0a87ef3dd9964c519f1f9d1185710542/op-bnb-testnet/contract/",
        apiKey: "0a87ef3dd9964c519f1f9d1185710542",
        explorerUrl: "https://testnet.opbnbscan.com/",
      },
      host: "127.0.0.1",
      port: 24012,
      network_id: "*",
    },
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.8.5",
      settings: {
        optimizer: {
          enabled: true,
          runs: 99999,
        },
      },
    },
  },
};
