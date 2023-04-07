/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  ExchangeLibrary,
  ExchangeLibraryInterface,
} from "../ExchangeLibrary";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_vUsdAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "vBaycPoolSize",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "vUsdPoolSize",
        type: "uint256",
      },
    ],
    name: "getShortBaycAmountOut",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_vBaycAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "vBaycPoolSize",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "vUsdPoolSize",
        type: "uint256",
      },
    ],
    name: "getShortVusdAmountOut",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x6101d461003a600b82828239805160001a60731461002d57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106100405760003560e01c8063ccd8267014610045578063eaa464f11461006a575b600080fd5b6100586100533660046100f7565b61007d565b60405190815260200160405180910390f35b6100586100783660046100f7565b6100c0565b60008061008a8385610139565b905060006100988685610156565b905060006100a68284610169565b905060006100b48783610156565b98975050505050505050565b6000806100cd8385610139565b905060006100db868661018b565b905060006100e98284610169565b905060006100b48287610156565b60008060006060848603121561010c57600080fd5b505081359360208301359350604090920135919050565b634e487b7160e01b600052601160045260246000fd5b808202811582820484141761015057610150610123565b92915050565b8181038181111561015057610150610123565b60008261018657634e487b7160e01b600052601260045260246000fd5b500490565b808201808211156101505761015061012356fea264697066735822122025c646c6e6d4d3777a21500d20d9ce7dacdb5d4c07b7d4b4afa204f9b84a6dc964736f6c63430008110033";

type ExchangeLibraryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ExchangeLibraryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ExchangeLibrary__factory extends ContractFactory {
  constructor(...args: ExchangeLibraryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "ExchangeLibrary";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ExchangeLibrary> {
    return super.deploy(overrides || {}) as Promise<ExchangeLibrary>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ExchangeLibrary {
    return super.attach(address) as ExchangeLibrary;
  }
  connect(signer: Signer): ExchangeLibrary__factory {
    return super.connect(signer) as ExchangeLibrary__factory;
  }
  static readonly contractName: "ExchangeLibrary";
  public readonly contractName: "ExchangeLibrary";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ExchangeLibraryInterface {
    return new utils.Interface(_abi) as ExchangeLibraryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ExchangeLibrary {
    return new Contract(address, _abi, signerOrProvider) as ExchangeLibrary;
  }
}