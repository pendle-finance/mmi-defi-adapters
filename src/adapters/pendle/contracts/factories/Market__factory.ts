/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type { Market, MarketInterface } from "../Market";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_PT",
        type: "address",
      },
      {
        internalType: "int256",
        name: "_scalarRoot",
        type: "int256",
      },
      {
        internalType: "int256",
        name: "_initialAnchor",
        type: "int256",
      },
      {
        internalType: "address",
        name: "_vePendle",
        type: "address",
      },
      {
        internalType: "address",
        name: "_gaugeController",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "InvalidShortString",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "int256",
        name: "exchangeRate",
        type: "int256",
      },
    ],
    name: "MarketExchangeRateBelowOne",
    type: "error",
  },
  {
    inputs: [],
    name: "MarketExpired",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "int256",
        name: "currentAmount",
        type: "int256",
      },
      {
        internalType: "int256",
        name: "requiredAmount",
        type: "int256",
      },
    ],
    name: "MarketInsufficientPtForTrade",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "actualBalance",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "requiredBalance",
        type: "uint256",
      },
    ],
    name: "MarketInsufficientPtReceived",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "actualBalance",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "requiredBalance",
        type: "uint256",
      },
    ],
    name: "MarketInsufficientSyReceived",
    type: "error",
  },
  {
    inputs: [],
    name: "MarketProportionMustNotEqualOne",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "int256",
        name: "proportion",
        type: "int256",
      },
      {
        internalType: "int256",
        name: "maxProportion",
        type: "int256",
      },
    ],
    name: "MarketProportionTooHigh",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "int256",
        name: "rateScalar",
        type: "int256",
      },
    ],
    name: "MarketRateScalarBelowZero",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "int256",
        name: "scalarRoot",
        type: "int256",
      },
    ],
    name: "MarketScalarRootBelowZero",
    type: "error",
  },
  {
    inputs: [],
    name: "MarketZeroAmountsInput",
    type: "error",
  },
  {
    inputs: [],
    name: "MarketZeroAmountsOutput",
    type: "error",
  },
  {
    inputs: [],
    name: "MarketZeroLnImpliedRate",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "int256",
        name: "totalPt",
        type: "int256",
      },
      {
        internalType: "int256",
        name: "totalAsset",
        type: "int256",
      },
    ],
    name: "MarketZeroTotalPtOrTotalAsset",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "str",
        type: "string",
      },
    ],
    name: "StringTooLong",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "receiverSy",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "receiverPt",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "netLpBurned",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "netSyOut",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "netPtOut",
        type: "uint256",
      },
    ],
    name: "Burn",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [],
    name: "EIP712DomainChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint16",
        name: "observationCardinalityNextOld",
        type: "uint16",
      },
      {
        indexed: false,
        internalType: "uint16",
        name: "observationCardinalityNextNew",
        type: "uint16",
      },
    ],
    name: "IncreaseObservationCardinalityNext",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "netLpMinted",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "netSyUsed",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "netPtUsed",
        type: "uint256",
      },
    ],
    name: "Mint",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256[]",
        name: "rewardsOut",
        type: "uint256[]",
      },
    ],
    name: "RedeemRewards",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "caller",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        indexed: false,
        internalType: "int256",
        name: "netPtOut",
        type: "int256",
      },
      {
        indexed: false,
        internalType: "int256",
        name: "netSyOut",
        type: "int256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "netSyFee",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "netSyToReserve",
        type: "uint256",
      },
    ],
    name: "Swap",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "lnLastImpliedRate",
        type: "uint256",
      },
    ],
    name: "UpdateImpliedRate",
    type: "event",
  },
  {
    inputs: [],
    name: "DOMAIN_SEPARATOR",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "_storage",
    outputs: [
      {
        internalType: "int128",
        name: "totalPt",
        type: "int128",
      },
      {
        internalType: "int128",
        name: "totalSy",
        type: "int128",
      },
      {
        internalType: "uint96",
        name: "lastLnImpliedRate",
        type: "uint96",
      },
      {
        internalType: "uint16",
        name: "observationIndex",
        type: "uint16",
      },
      {
        internalType: "uint16",
        name: "observationCardinality",
        type: "uint16",
      },
      {
        internalType: "uint16",
        name: "observationCardinalityNext",
        type: "uint16",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "activeBalance",
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
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
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
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
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
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
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
        internalType: "address",
        name: "receiverSy",
        type: "address",
      },
      {
        internalType: "address",
        name: "receiverPt",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "netLpToBurn",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [
      {
        internalType: "uint256",
        name: "netSyOut",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "netPtOut",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "eip712Domain",
    outputs: [
      {
        internalType: "bytes1",
        name: "fields",
        type: "bytes1",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "version",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "chainId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "verifyingContract",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "salt",
        type: "bytes32",
      },
      {
        internalType: "uint256[]",
        name: "extensions",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "expiry",
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
    inputs: [],
    name: "factory",
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
    inputs: [],
    name: "getRewardTokens",
    outputs: [
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint16",
        name: "cardinalityNext",
        type: "uint16",
      },
    ],
    name: "increaseObservationsCardinalityNext",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "initialAnchor",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "isExpired",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "lastRewardBlock",
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
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "netSyDesired",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "netPtDesired",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [
      {
        internalType: "uint256",
        name: "netLpOut",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "netSyUsed",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "netPtUsed",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "nonces",
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
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "observations",
    outputs: [
      {
        internalType: "uint32",
        name: "blockTimestamp",
        type: "uint32",
      },
      {
        internalType: "uint216",
        name: "lnImpliedRateCumulative",
        type: "uint216",
      },
      {
        internalType: "bool",
        name: "initialized",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32[]",
        name: "secondsAgos",
        type: "uint32[]",
      },
    ],
    name: "observe",
    outputs: [
      {
        internalType: "uint216[]",
        name: "lnImpliedRateCumulative",
        type: "uint216[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "permit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "router",
        type: "address",
      },
    ],
    name: "readState",
    outputs: [
      {
        components: [
          {
            internalType: "int256",
            name: "totalPt",
            type: "int256",
          },
          {
            internalType: "int256",
            name: "totalSy",
            type: "int256",
          },
          {
            internalType: "int256",
            name: "totalLp",
            type: "int256",
          },
          {
            internalType: "address",
            name: "treasury",
            type: "address",
          },
          {
            internalType: "int256",
            name: "scalarRoot",
            type: "int256",
          },
          {
            internalType: "uint256",
            name: "expiry",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "lnFeeRateRoot",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "reserveFeePercent",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "lastLnImpliedRate",
            type: "uint256",
          },
        ],
        internalType: "struct MarketState",
        name: "market",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "readTokens",
    outputs: [
      {
        internalType: "contract IStandardizedYield",
        name: "_SY",
        type: "address",
      },
      {
        internalType: "contract IPPrincipalToken",
        name: "_PT",
        type: "address",
      },
      {
        internalType: "contract IPYieldToken",
        name: "_YT",
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
        name: "user",
        type: "address",
      },
    ],
    name: "redeemRewards",
    outputs: [
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "rewardState",
    outputs: [
      {
        internalType: "uint128",
        name: "index",
        type: "uint128",
      },
      {
        internalType: "uint128",
        name: "lastBalance",
        type: "uint128",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "scalarRoot",
    outputs: [
      {
        internalType: "int256",
        name: "",
        type: "int256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "skim",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "exactPtIn",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "swapExactPtForSy",
    outputs: [
      {
        internalType: "uint256",
        name: "netSyOut",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "netSyFee",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "exactPtOut",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "swapSyForExactPt",
    outputs: [
      {
        internalType: "uint256",
        name: "netSyIn",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "netSyFee",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalActiveSupply",
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
    inputs: [],
    name: "totalSupply",
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
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
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
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
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
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "userReward",
    outputs: [
      {
        internalType: "uint128",
        name: "index",
        type: "uint128",
      },
      {
        internalType: "uint128",
        name: "accrued",
        type: "uint128",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

export class Market__factory {
  static readonly abi = _abi;
  static createInterface(): MarketInterface {
    return new Interface(_abi) as MarketInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): Market {
    return new Contract(address, _abi, runner) as unknown as Market;
  }
}
