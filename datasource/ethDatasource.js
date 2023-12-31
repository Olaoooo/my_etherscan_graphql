// Import RESTDataSource from apollo-datasource-rest
const { RESTDataSource } = require("apollo-datasource-rest");

// Define Ethereum address constant
//Vitalik's Ethereum Address
const eth_address = "0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045";

// Define EtherDataSource class extending RESTDataSource
//Etherscan Data Source Class
class EtherDataSource extends RESTDataSource {
  // Constructor to set baseURL
  constructor() {
    super();
    this.baseURL = "https://api.etherscan.io/api";
  }

  // Method to get ether balance by address
  async etherBalanceByAddress() {
    return this.get(
      `?module=account&action=balance&address=${eth_address}&tag=latest&apikey=${process.env.ETHERSCAN_API}`
    );
  }

  // Method to get total ether supply
  async totalSupplyOfEther() {
    return this.get(
      `?module=stats&action=ethsupply&apikey=${process.env.ETHERSCAN_API}`
    );
  }

  // Method to get latest Ethereum price
  async getLatestEthereumPrice() {
    return this.get(
      `?module=stats&action=ethprice&apikey=${process.env.ETHERSCAN_API}`
    );
  }

  // Method to get block confirmation time
  async getBlockConfirmationTime() {
    return this.get(
      `?module=gastracker&action=gasestimate&gasprice=2000000000&apikey=${process.env.ETHERSCAN_API}`
    );
  }
}

// Export EtherDataSource class
module.exports = EtherDataSource;
