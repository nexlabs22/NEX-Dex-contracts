/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MockApiOracle, MockApiOracleInterface } from "../MockApiOracle";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_link",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "requestId",
        type: "bytes32",
      },
    ],
    name: "CancelOracleRequest",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "specId",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "requester",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "requestId",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "payment",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "callbackAddr",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes4",
        name: "callbackFunctionId",
        type: "bytes4",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "cancelExpiration",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "dataVersion",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "OracleRequest",
    type: "event",
  },
  {
    inputs: [],
    name: "EXPIRY_TIME",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_requestId",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "_payment",
        type: "uint256",
      },
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
      {
        internalType: "uint256",
        name: "_expiration",
        type: "uint256",
      },
    ],
    name: "cancelOracleRequest",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_requestId",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "_data1",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "_data2",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "_data3",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "_data4",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "_data5",
        type: "bytes",
      },
    ],
    name: "fulfillOracleFundingRateRequest",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_requestId",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "_data",
        type: "bytes32",
      },
    ],
    name: "fulfillOracleOjectRequest",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_requestId",
        type: "bytes32",
      },
      {
        internalType: "string",
        name: "_data",
        type: "string",
      },
    ],
    name: "fulfillOracleStatusRequest",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getChainlinkToken",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_sender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "onTokenTransfer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_sender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_payment",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "_specId",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "_callbackAddress",
        type: "address",
      },
      {
        internalType: "bytes4",
        name: "_callbackFunctionId",
        type: "bytes4",
      },
      {
        internalType: "uint256",
        name: "_nonce",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_dataVersion",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "oracleRequest",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5060405161125538038061125583398101604081905261002f91610054565b600080546001600160a01b0319166001600160a01b0392909216919091179055610084565b60006020828403121561006657600080fd5b81516001600160a01b038116811461007d57600080fd5b9392505050565b6111c2806100936000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c8063a4c0ed361161005b578063a4c0ed36146100ec578063c5e639ca146100ff578063d349170714610122578063e030ba661461013557600080fd5b8063165d35e11461008d57806340429946146100ad5780634b602282146100c25780636ee4d553146100d9575b600080fd5b6000546040516001600160a01b0390911681526020015b60405180910390f35b6100c06100bb366004610bf4565b610148565b005b6100cb61012c81565b6040519081526020016100a4565b6100c06100e7366004610c93565b610390565b6100c06100fa366004610d73565b6104fe565b61011261010d366004610dca565b6106d6565b60405190151581526020016100a4565b610112610130366004610e16565b61083c565b610112610143366004610ef0565b6109ab565b6000546001600160a01b0316331461019d5760405162461bcd60e51b815260206004820152601360248201527226bab9ba103ab9b2902624a725903a37b5b2b760691b60448201526064015b60405180910390fd5b60005486906001600160a01b03908116908216036101fd5760405162461bcd60e51b815260206004820152601760248201527f43616e6e6f742063616c6c6261636b20746f204c494e4b0000000000000000006044820152606401610194565b6040516bffffffffffffffffffffffff1960608c901b1660208201526034810186905260009060540160408051601f198184030181529181528151602092830120600081815260019093529120549091506001600160a01b03161561029b5760405162461bcd60e51b8152602060048201526014602482015273135d5cdd081d5cd94818481d5b9a5c5d5948125160621b6044820152606401610194565b60006102a94261012c610b0f565b905060405180604001604052808a6001600160a01b03168152602001896001600160e01b0319168152506001600084815260200190815260200160002060008201518160000160006101000a8154816001600160a01b0302191690836001600160a01b0316021790555060208201518160000160146101000a81548163ffffffff021916908360e01c0217905550905050897fd8d7ecc4800d25fa53ce0372f13a416d98907a7ef3d8d3bdd79cf4fe75529c658d848e8d8d878d8d8d60405161037a99989796959493929190610f3b565b60405180910390a2505050505050505050505050565b6000848152600160205260409020546001600160a01b03166103eb5760405162461bcd60e51b8152602060048201526014602482015273135d5cdd081d5cd94818481d5b9a5c5d5948125160621b6044820152606401610194565b428111156104345760405162461bcd60e51b815260206004820152601660248201527514995c5d595cdd081a5cc81b9bdd08195e1c1a5c995960521b6044820152606401610194565b60008481526001602052604080822080546001600160c01b03191690555185917fa7842b9ec549398102c0d91b1b9919b2f20558aefdadf57528a95c6cd3292e9391a260005460405163a9059cbb60e01b8152336004820152602481018590526001600160a01b039091169063a9059cbb906044016020604051808303816000875af11580156104c8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104ec9190610fa5565b6104f8576104f8610fc7565b50505050565b6000546001600160a01b0316331461054e5760405162461bcd60e51b815260206004820152601360248201527226bab9ba103ab9b2902624a725903a37b5b2b760691b6044820152606401610194565b8061055b60026020610ff3565b61056690600461100a565b815110156105af5760405162461bcd60e51b8152602060048201526016602482015275092dcecc2d8d2c840e4cae2eacae6e840d8cadccee8d60531b6044820152606401610194565b602082015182906001600160e01b031981166320214ca360e11b146106165760405162461bcd60e51b815260206004820152601e60248201527f4d757374207573652077686974656c69737465642066756e6374696f6e7300006044820152606401610194565b8560248501528460448501526000306001600160a01b03168560405161063c9190611041565b600060405180830381855af49150503d8060008114610677576040519150601f19603f3d011682016040523d82523d6000602084013e61067c565b606091505b50509050806106cd5760405162461bcd60e51b815260206004820152601860248201527f556e61626c6520746f20637265617465207265717565737400000000000000006044820152606401610194565b50505050505050565b60008381526001602052604081205484906001600160a01b031661070c5760405162461bcd60e51b81526004016101949061105d565b6000858152600160208181526040808420815180830190925280546001600160a01b03811683526001600160e01b0319600160a01b820460e01b1683850152948a9052929091526001600160c01b0319909216905562061a805a10156107845760405162461bcd60e51b815260040161019490611094565b600081600001516001600160a01b031682602001518888886040516024016107ae939291906110c9565b60408051601f198184030181529181526020820180516001600160e01b03166001600160e01b03199094169390931790925290516107ec9190611041565b6000604051808303816000865af19150503d8060008114610829576040519150601f19603f3d011682016040523d82523d6000602084013e61082e565b606091505b509098975050505050505050565b60008681526001602052604081205487906001600160a01b03166108725760405162461bcd60e51b81526004016101949061105d565b6000888152600160208181526040808420815180830190925280546001600160a01b03811683526001600160e01b0319600160a01b820460e01b1683850152948d9052929091526001600160c01b0319909216905562061a805a10156108ea5760405162461bcd60e51b815260040161019490611094565b600081600001516001600160a01b031682602001518b8b8b8b8b8b60405160240161091a96959493929190611118565b60408051601f198184030181529181526020820180516001600160e01b03166001600160e01b03199094169390931790925290516109589190611041565b6000604051808303816000865af19150503d8060008114610995576040519150601f19603f3d011682016040523d82523d6000602084013e61099a565b606091505b50909b9a5050505050505050505050565b60008281526001602052604081205483906001600160a01b03166109e15760405162461bcd60e51b81526004016101949061105d565b6000848152600160208181526040808420815180830190925280546001600160a01b03811683526001600160e01b0319600160a01b820460e01b168385015294899052929091526001600160c01b0319909216905562061a805a1015610a595760405162461bcd60e51b815260040161019490611094565b8051602082015160405160248101889052604481018790526000926001600160a01b0316919060640160408051601f198184030181529181526020820180516001600160e01b03166001600160e01b0319909416939093179092529051610ac09190611041565b6000604051808303816000865af19150503d8060008114610afd576040519150601f19603f3d011682016040523d82523d6000602084013e610b02565b606091505b5090979650505050505050565b600080610b1c838561100a565b905083811015610b6e5760405162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f7700000000006044820152606401610194565b90505b92915050565b80356001600160a01b0381168114610b8e57600080fd5b919050565b80356001600160e01b031981168114610b8e57600080fd5b60008083601f840112610bbd57600080fd5b50813567ffffffffffffffff811115610bd557600080fd5b602083019150836020828501011115610bed57600080fd5b9250929050565b60008060008060008060008060006101008a8c031215610c1357600080fd5b610c1c8a610b77565b985060208a0135975060408a01359650610c3860608b01610b77565b9550610c4660808b01610b93565b945060a08a0135935060c08a0135925060e08a013567ffffffffffffffff811115610c7057600080fd5b610c7c8c828d01610bab565b915080935050809150509295985092959850929598565b60008060008060808587031215610ca957600080fd5b8435935060208501359250610cc060408601610b93565b9396929550929360600135925050565b634e487b7160e01b600052604160045260246000fd5b600082601f830112610cf757600080fd5b813567ffffffffffffffff80821115610d1257610d12610cd0565b604051601f8301601f19908116603f01168101908282118183101715610d3a57610d3a610cd0565b81604052838152866020858801011115610d5357600080fd5b836020870160208301376000602085830101528094505050505092915050565b600080600060608486031215610d8857600080fd5b610d9184610b77565b925060208401359150604084013567ffffffffffffffff811115610db457600080fd5b610dc086828701610ce6565b9150509250925092565b600080600060408486031215610ddf57600080fd5b83359250602084013567ffffffffffffffff811115610dfd57600080fd5b610e0986828701610bab565b9497909650939450505050565b60008060008060008060c08789031215610e2f57600080fd5b86359550602087013567ffffffffffffffff80821115610e4e57600080fd5b610e5a8a838b01610ce6565b96506040890135915080821115610e7057600080fd5b610e7c8a838b01610ce6565b95506060890135915080821115610e9257600080fd5b610e9e8a838b01610ce6565b94506080890135915080821115610eb457600080fd5b610ec08a838b01610ce6565b935060a0890135915080821115610ed657600080fd5b50610ee389828a01610ce6565b9150509295509295509295565b60008060408385031215610f0357600080fd5b50508035926020909101359150565b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b6001600160a01b038a81168252602082018a905260408201899052871660608201526001600160e01b03198616608082015260a0810185905260c0810184905261010060e08201819052600090610f958382018587610f12565b9c9b505050505050505050505050565b600060208284031215610fb757600080fd5b81518015158114610b6e57600080fd5b634e487b7160e01b600052600160045260246000fd5b634e487b7160e01b600052601160045260246000fd5b8082028115828204841417610b7157610b71610fdd565b80820180821115610b7157610b71610fdd565b60005b83811015611038578181015183820152602001611020565b50506000910152565b6000825161105381846020870161101d565b9190910192915050565b6020808252601b908201527f4d757374206861766520612076616c6964207265717565737449640000000000604082015260600190565b6020808252818101527f4d7573742070726f7669646520636f6e73756d657220656e6f75676820676173604082015260600190565b8381526040602082015260006110e3604083018486610f12565b95945050505050565b6000815180845261110481602086016020860161101d565b601f01601f19169290920160200192915050565b86815260c06020820152600061113160c08301886110ec565b828103604084015261114381886110ec565b9050828103606084015261115781876110ec565b9050828103608084015261116b81866110ec565b905082810360a084015261117f81856110ec565b999850505050505050505056fea264697066735822122017b2bbd3b1159416768ea5d487328191addfcec94d30dbc70c55f88c35ba914964736f6c63430008110033";

type MockApiOracleConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MockApiOracleConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MockApiOracle__factory extends ContractFactory {
  constructor(...args: MockApiOracleConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "MockApiOracle";
  }

  deploy(
    _link: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MockApiOracle> {
    return super.deploy(_link, overrides || {}) as Promise<MockApiOracle>;
  }
  getDeployTransaction(
    _link: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_link, overrides || {});
  }
  attach(address: string): MockApiOracle {
    return super.attach(address) as MockApiOracle;
  }
  connect(signer: Signer): MockApiOracle__factory {
    return super.connect(signer) as MockApiOracle__factory;
  }
  static readonly contractName: "MockApiOracle";
  public readonly contractName: "MockApiOracle";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockApiOracleInterface {
    return new utils.Interface(_abi) as MockApiOracleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockApiOracle {
    return new Contract(address, _abi, signerOrProvider) as MockApiOracle;
  }
}
