/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface ExchangeInterface extends utils.Interface {
  contractName: "Exchange";
  functions: {
    "ETHER()": FunctionFragment;
    "PartialLiquidation(address)": FunctionFragment;
    "adjustCollateral()": FunctionFragment;
    "assetAddress()": FunctionFragment;
    "betBearEth(uint256,uint256,uint256)": FunctionFragment;
    "betBearUsd(uint256,uint256,uint256)": FunctionFragment;
    "betBullEth(uint256,uint256,uint256)": FunctionFragment;
    "betBullUsdc(uint256,uint256,uint256)": FunctionFragment;
    "collateral(address,address)": FunctionFragment;
    "depositEther()": FunctionFragment;
    "getIndexPrice()": FunctionFragment;
    "lastRequestId()": FunctionFragment;
    "latestPrice()": FunctionFragment;
    "latestRequestId()": FunctionFragment;
    "ledger(uint256,address)": FunctionFragment;
    "liquidation(address)": FunctionFragment;
    "nftOracle()": FunctionFragment;
    "oracleLatestRoundId()": FunctionFragment;
    "owner()": FunctionFragment;
    "paused()": FunctionFragment;
    "payment()": FunctionFragment;
    "priceFeed()": FunctionFragment;
    "pricingAsset()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "requestPrice()": FunctionFragment;
    "roundNumber()": FunctionFragment;
    "rounds(uint256)": FunctionFragment;
    "showUsdBalance()": FunctionFragment;
    "specId()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "userRounds(address,uint256)": FunctionFragment;
    "withdrawEther(uint256)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "ETHER", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "PartialLiquidation",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "adjustCollateral",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "assetAddress",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "betBearEth",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "betBearUsd",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "betBullEth",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "betBullUsdc",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "collateral",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "depositEther",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getIndexPrice",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "lastRequestId",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "latestPrice",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "latestRequestId",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "ledger",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(functionFragment: "liquidation", values: [string]): string;
  encodeFunctionData(functionFragment: "nftOracle", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "oracleLatestRoundId",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "paused", values?: undefined): string;
  encodeFunctionData(functionFragment: "payment", values?: undefined): string;
  encodeFunctionData(functionFragment: "priceFeed", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "pricingAsset",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "requestPrice",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "roundNumber",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "rounds",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "showUsdBalance",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "specId", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "userRounds",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawEther",
    values: [BigNumberish]
  ): string;

  decodeFunctionResult(functionFragment: "ETHER", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "PartialLiquidation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "adjustCollateral",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "assetAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "betBearEth", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "betBearUsd", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "betBullEth", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "betBullUsdc",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "collateral", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "depositEther",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getIndexPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "lastRequestId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "latestPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "latestRequestId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "ledger", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "liquidation",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "nftOracle", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "oracleLatestRoundId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "paused", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "payment", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "priceFeed", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "pricingAsset",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "requestPrice",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "roundNumber",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "rounds", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "showUsdBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "specId", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "userRounds", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "withdrawEther",
    data: BytesLike
  ): Result;

  events: {
    "BetBear(address,uint256,uint256)": EventFragment;
    "BetBull(address,uint256,uint256)": EventFragment;
    "Deposit(address,address,uint256,uint256)": EventFragment;
    "NewOracle(address)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "Pause(uint256)": EventFragment;
    "Paused(address)": EventFragment;
    "StartRound(uint256)": EventFragment;
    "Unpaused(address)": EventFragment;
    "Withdraw(address,address,uint256,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "BetBear"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "BetBull"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Deposit"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewOracle"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Pause"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Paused"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "StartRound"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Unpaused"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Withdraw"): EventFragment;
}

export type BetBearEvent = TypedEvent<
  [string, BigNumber, BigNumber],
  { sender: string; epoch: BigNumber; amount: BigNumber }
>;

export type BetBearEventFilter = TypedEventFilter<BetBearEvent>;

export type BetBullEvent = TypedEvent<
  [string, BigNumber, BigNumber],
  { sender: string; epoch: BigNumber; amount: BigNumber }
>;

export type BetBullEventFilter = TypedEventFilter<BetBullEvent>;

export type DepositEvent = TypedEvent<
  [string, string, BigNumber, BigNumber],
  { token: string; user: string; amount: BigNumber; balance: BigNumber }
>;

export type DepositEventFilter = TypedEventFilter<DepositEvent>;

export type NewOracleEvent = TypedEvent<[string], { oracle: string }>;

export type NewOracleEventFilter = TypedEventFilter<NewOracleEvent>;

export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  { previousOwner: string; newOwner: string }
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export type PauseEvent = TypedEvent<[BigNumber], { epoch: BigNumber }>;

export type PauseEventFilter = TypedEventFilter<PauseEvent>;

export type PausedEvent = TypedEvent<[string], { account: string }>;

export type PausedEventFilter = TypedEventFilter<PausedEvent>;

export type StartRoundEvent = TypedEvent<[BigNumber], { epoch: BigNumber }>;

export type StartRoundEventFilter = TypedEventFilter<StartRoundEvent>;

export type UnpausedEvent = TypedEvent<[string], { account: string }>;

export type UnpausedEventFilter = TypedEventFilter<UnpausedEvent>;

export type WithdrawEvent = TypedEvent<
  [string, string, BigNumber, BigNumber],
  { token: string; user: string; amount: BigNumber; balance: BigNumber }
>;

export type WithdrawEventFilter = TypedEventFilter<WithdrawEvent>;

export interface Exchange extends BaseContract {
  contractName: "Exchange";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ExchangeInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    ETHER(overrides?: CallOverrides): Promise<[string]>;

    PartialLiquidation(
      _user: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    adjustCollateral(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    assetAddress(overrides?: CallOverrides): Promise<[string]>;

    betBearEth(
      _margin: BigNumberish,
      _price: BigNumberish,
      leverageRate: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    betBearUsd(
      _usdMargin: BigNumberish,
      _usdPrice: BigNumberish,
      leverageRate: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    betBullEth(
      _margin: BigNumberish,
      _price: BigNumberish,
      leverageRate: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    betBullUsdc(
      _usdMargin: BigNumberish,
      _usdPrice: BigNumberish,
      leverageRate: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    collateral(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    depositEther(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getIndexPrice(overrides?: CallOverrides): Promise<[BigNumber]>;

    lastRequestId(overrides?: CallOverrides): Promise<[string]>;

    latestPrice(overrides?: CallOverrides): Promise<[BigNumber]>;

    latestRequestId(overrides?: CallOverrides): Promise<[string]>;

    ledger(
      arg0: BigNumberish,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<
      [number, BigNumber, boolean] & {
        position: number;
        amount: BigNumber;
        claimed: boolean;
      }
    >;

    liquidation(
      _user: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    nftOracle(overrides?: CallOverrides): Promise<[string]>;

    oracleLatestRoundId(overrides?: CallOverrides): Promise<[BigNumber]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    paused(overrides?: CallOverrides): Promise<[boolean]>;

    payment(overrides?: CallOverrides): Promise<[BigNumber]>;

    priceFeed(overrides?: CallOverrides): Promise<[string]>;

    pricingAsset(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    requestPrice(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    roundNumber(overrides?: CallOverrides): Promise<[BigNumber]>;

    rounds(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        string,
        string,
        boolean
      ] & {
        startTimestamp: BigNumber;
        price: BigNumber;
        bullInitialMargin: BigNumber;
        bullMargin: BigNumber;
        bullMarginDebt: BigNumber;
        bullAmount: BigNumber;
        bearInitialMargin: BigNumber;
        bearMargin: BigNumber;
        bearMarginDebt: BigNumber;
        bearAmount: BigNumber;
        totalAmount: BigNumber;
        bullAddress: string;
        bearAddress: string;
        isActive: boolean;
      }
    >;

    showUsdBalance(overrides?: CallOverrides): Promise<[BigNumber]>;

    specId(overrides?: CallOverrides): Promise<[string]>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    userRounds(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    withdrawEther(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  ETHER(overrides?: CallOverrides): Promise<string>;

  PartialLiquidation(
    _user: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  adjustCollateral(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  assetAddress(overrides?: CallOverrides): Promise<string>;

  betBearEth(
    _margin: BigNumberish,
    _price: BigNumberish,
    leverageRate: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  betBearUsd(
    _usdMargin: BigNumberish,
    _usdPrice: BigNumberish,
    leverageRate: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  betBullEth(
    _margin: BigNumberish,
    _price: BigNumberish,
    leverageRate: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  betBullUsdc(
    _usdMargin: BigNumberish,
    _usdPrice: BigNumberish,
    leverageRate: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  collateral(
    arg0: string,
    arg1: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  depositEther(
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getIndexPrice(overrides?: CallOverrides): Promise<BigNumber>;

  lastRequestId(overrides?: CallOverrides): Promise<string>;

  latestPrice(overrides?: CallOverrides): Promise<BigNumber>;

  latestRequestId(overrides?: CallOverrides): Promise<string>;

  ledger(
    arg0: BigNumberish,
    arg1: string,
    overrides?: CallOverrides
  ): Promise<
    [number, BigNumber, boolean] & {
      position: number;
      amount: BigNumber;
      claimed: boolean;
    }
  >;

  liquidation(
    _user: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  nftOracle(overrides?: CallOverrides): Promise<string>;

  oracleLatestRoundId(overrides?: CallOverrides): Promise<BigNumber>;

  owner(overrides?: CallOverrides): Promise<string>;

  paused(overrides?: CallOverrides): Promise<boolean>;

  payment(overrides?: CallOverrides): Promise<BigNumber>;

  priceFeed(overrides?: CallOverrides): Promise<string>;

  pricingAsset(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  requestPrice(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  roundNumber(overrides?: CallOverrides): Promise<BigNumber>;

  rounds(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      string,
      string,
      boolean
    ] & {
      startTimestamp: BigNumber;
      price: BigNumber;
      bullInitialMargin: BigNumber;
      bullMargin: BigNumber;
      bullMarginDebt: BigNumber;
      bullAmount: BigNumber;
      bearInitialMargin: BigNumber;
      bearMargin: BigNumber;
      bearMarginDebt: BigNumber;
      bearAmount: BigNumber;
      totalAmount: BigNumber;
      bullAddress: string;
      bearAddress: string;
      isActive: boolean;
    }
  >;

  showUsdBalance(overrides?: CallOverrides): Promise<BigNumber>;

  specId(overrides?: CallOverrides): Promise<string>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  userRounds(
    arg0: string,
    arg1: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  withdrawEther(
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    ETHER(overrides?: CallOverrides): Promise<string>;

    PartialLiquidation(_user: string, overrides?: CallOverrides): Promise<void>;

    adjustCollateral(overrides?: CallOverrides): Promise<void>;

    assetAddress(overrides?: CallOverrides): Promise<string>;

    betBearEth(
      _margin: BigNumberish,
      _price: BigNumberish,
      leverageRate: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    betBearUsd(
      _usdMargin: BigNumberish,
      _usdPrice: BigNumberish,
      leverageRate: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    betBullEth(
      _margin: BigNumberish,
      _price: BigNumberish,
      leverageRate: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    betBullUsdc(
      _usdMargin: BigNumberish,
      _usdPrice: BigNumberish,
      leverageRate: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    collateral(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    depositEther(overrides?: CallOverrides): Promise<void>;

    getIndexPrice(overrides?: CallOverrides): Promise<BigNumber>;

    lastRequestId(overrides?: CallOverrides): Promise<string>;

    latestPrice(overrides?: CallOverrides): Promise<BigNumber>;

    latestRequestId(overrides?: CallOverrides): Promise<string>;

    ledger(
      arg0: BigNumberish,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<
      [number, BigNumber, boolean] & {
        position: number;
        amount: BigNumber;
        claimed: boolean;
      }
    >;

    liquidation(_user: string, overrides?: CallOverrides): Promise<void>;

    nftOracle(overrides?: CallOverrides): Promise<string>;

    oracleLatestRoundId(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    paused(overrides?: CallOverrides): Promise<boolean>;

    payment(overrides?: CallOverrides): Promise<BigNumber>;

    priceFeed(overrides?: CallOverrides): Promise<string>;

    pricingAsset(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    requestPrice(overrides?: CallOverrides): Promise<void>;

    roundNumber(overrides?: CallOverrides): Promise<BigNumber>;

    rounds(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        string,
        string,
        boolean
      ] & {
        startTimestamp: BigNumber;
        price: BigNumber;
        bullInitialMargin: BigNumber;
        bullMargin: BigNumber;
        bullMarginDebt: BigNumber;
        bullAmount: BigNumber;
        bearInitialMargin: BigNumber;
        bearMargin: BigNumber;
        bearMarginDebt: BigNumber;
        bearAmount: BigNumber;
        totalAmount: BigNumber;
        bullAddress: string;
        bearAddress: string;
        isActive: boolean;
      }
    >;

    showUsdBalance(overrides?: CallOverrides): Promise<BigNumber>;

    specId(overrides?: CallOverrides): Promise<string>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    userRounds(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    withdrawEther(
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "BetBear(address,uint256,uint256)"(
      sender?: string | null,
      epoch?: BigNumberish | null,
      amount?: null
    ): BetBearEventFilter;
    BetBear(
      sender?: string | null,
      epoch?: BigNumberish | null,
      amount?: null
    ): BetBearEventFilter;

    "BetBull(address,uint256,uint256)"(
      sender?: string | null,
      epoch?: BigNumberish | null,
      amount?: null
    ): BetBullEventFilter;
    BetBull(
      sender?: string | null,
      epoch?: BigNumberish | null,
      amount?: null
    ): BetBullEventFilter;

    "Deposit(address,address,uint256,uint256)"(
      token?: null,
      user?: null,
      amount?: null,
      balance?: null
    ): DepositEventFilter;
    Deposit(
      token?: null,
      user?: null,
      amount?: null,
      balance?: null
    ): DepositEventFilter;

    "NewOracle(address)"(oracle?: null): NewOracleEventFilter;
    NewOracle(oracle?: null): NewOracleEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;

    "Pause(uint256)"(epoch?: BigNumberish | null): PauseEventFilter;
    Pause(epoch?: BigNumberish | null): PauseEventFilter;

    "Paused(address)"(account?: null): PausedEventFilter;
    Paused(account?: null): PausedEventFilter;

    "StartRound(uint256)"(epoch?: BigNumberish | null): StartRoundEventFilter;
    StartRound(epoch?: BigNumberish | null): StartRoundEventFilter;

    "Unpaused(address)"(account?: null): UnpausedEventFilter;
    Unpaused(account?: null): UnpausedEventFilter;

    "Withdraw(address,address,uint256,uint256)"(
      token?: null,
      user?: null,
      amount?: null,
      balance?: null
    ): WithdrawEventFilter;
    Withdraw(
      token?: null,
      user?: null,
      amount?: null,
      balance?: null
    ): WithdrawEventFilter;
  };

  estimateGas: {
    ETHER(overrides?: CallOverrides): Promise<BigNumber>;

    PartialLiquidation(
      _user: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    adjustCollateral(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    assetAddress(overrides?: CallOverrides): Promise<BigNumber>;

    betBearEth(
      _margin: BigNumberish,
      _price: BigNumberish,
      leverageRate: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    betBearUsd(
      _usdMargin: BigNumberish,
      _usdPrice: BigNumberish,
      leverageRate: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    betBullEth(
      _margin: BigNumberish,
      _price: BigNumberish,
      leverageRate: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    betBullUsdc(
      _usdMargin: BigNumberish,
      _usdPrice: BigNumberish,
      leverageRate: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    collateral(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    depositEther(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getIndexPrice(overrides?: CallOverrides): Promise<BigNumber>;

    lastRequestId(overrides?: CallOverrides): Promise<BigNumber>;

    latestPrice(overrides?: CallOverrides): Promise<BigNumber>;

    latestRequestId(overrides?: CallOverrides): Promise<BigNumber>;

    ledger(
      arg0: BigNumberish,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    liquidation(
      _user: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    nftOracle(overrides?: CallOverrides): Promise<BigNumber>;

    oracleLatestRoundId(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    paused(overrides?: CallOverrides): Promise<BigNumber>;

    payment(overrides?: CallOverrides): Promise<BigNumber>;

    priceFeed(overrides?: CallOverrides): Promise<BigNumber>;

    pricingAsset(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    requestPrice(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    roundNumber(overrides?: CallOverrides): Promise<BigNumber>;

    rounds(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    showUsdBalance(overrides?: CallOverrides): Promise<BigNumber>;

    specId(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    userRounds(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    withdrawEther(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    ETHER(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    PartialLiquidation(
      _user: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    adjustCollateral(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    assetAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    betBearEth(
      _margin: BigNumberish,
      _price: BigNumberish,
      leverageRate: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    betBearUsd(
      _usdMargin: BigNumberish,
      _usdPrice: BigNumberish,
      leverageRate: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    betBullEth(
      _margin: BigNumberish,
      _price: BigNumberish,
      leverageRate: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    betBullUsdc(
      _usdMargin: BigNumberish,
      _usdPrice: BigNumberish,
      leverageRate: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    collateral(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    depositEther(
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getIndexPrice(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    lastRequestId(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    latestPrice(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    latestRequestId(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    ledger(
      arg0: BigNumberish,
      arg1: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    liquidation(
      _user: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    nftOracle(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    oracleLatestRoundId(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    paused(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    payment(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    priceFeed(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pricingAsset(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    requestPrice(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    roundNumber(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    rounds(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    showUsdBalance(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    specId(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    userRounds(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    withdrawEther(
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
