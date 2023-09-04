/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  AutomationBase,
  AutomationBaseInterface,
} from "../AutomationBase";

const _abi = [
  {
    inputs: [],
    name: "OnlySimulatedBackend",
    type: "error",
  },
];

const _bytecode =
  "0x6080604052348015600f57600080fd5b50603f80601d6000396000f3fe6080604052600080fdfea2646970667358221220df365de88d047fdab0e2cc81875c9ab5b645fc7a6ab576fe68ae0b1afa5102e364736f6c63430008110033";

type AutomationBaseConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: AutomationBaseConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class AutomationBase__factory extends ContractFactory {
  constructor(...args: AutomationBaseConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "AutomationBase";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<AutomationBase> {
    return super.deploy(overrides || {}) as Promise<AutomationBase>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): AutomationBase {
    return super.attach(address) as AutomationBase;
  }
  connect(signer: Signer): AutomationBase__factory {
    return super.connect(signer) as AutomationBase__factory;
  }
  static readonly contractName: "AutomationBase";
  public readonly contractName: "AutomationBase";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): AutomationBaseInterface {
    return new utils.Interface(_abi) as AutomationBaseInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AutomationBase {
    return new Contract(address, _abi, signerOrProvider) as AutomationBase;
  }
}