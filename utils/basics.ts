import { ethers } from "hardhat"

export const toEther = (e: any) => Number(ethers.utils.formatEther(e));
export const toWei = (e: string) => ethers.utils.parseEther(e);
export const toWeiN = (e: number) => ethers.utils.parseEther(e + '');

export const compareResult = (contractValue: any, expectedValue: number, diff = 0.0000000001): boolean => {
  if (Math.abs(Number(contractValue) - expectedValue) > diff) {
    console.log("Not equal! - ", Number(contractValue), expectedValue);
    return false;
  }
  return true;
}

export const roundDecimal = (value: number, place = 2): number => {
  const X = 10 ** place;
  return Math.round((value + Number.EPSILON) * X) / X;
}

export const checkUnsignedInt = (value: number) => {
  if (value < 0)
    throw new Error("VM Exception while processing transaction: reverted with panic code 0x11 (Arithmetic operation underflowed or overflowed outside of an unchecked block)");
  return value;
}

export interface UnsignedIntType {
  value: number;
}

export const UnsignedInt = (value: number): UnsignedIntType => {
  const obj = Object.create(null);
  obj._v = checkUnsignedInt(value);

  Object.defineProperty(obj, "value", {
    set: function(value: number) {
      this._v = checkUnsignedInt(value);
    },
    get: function() {
      return this._v;
    }
  });

  return obj;
}