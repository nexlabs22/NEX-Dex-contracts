import { numToBytes32, stringToBytes } from "@chainlink/test-helpers/dist/src/helpers"
import { assert, expect } from "chai"
import { BigNumber, ContractReceipt, ContractTransaction } from "ethers"
import { network, deployments, ethers, run } from "hardhat"
import { developmentChains, networkConfig } from "../../../helper-hardhat-config"
import { APIConsumer, LinkToken, MockOracle } from "../../../typechain"

const chainId = 31337;
const jobId = ethers.utils.toUtf8Bytes(networkConfig[chainId].jobId!);
const toEther = (e:any) => ethers.utils.formatEther(e);
const toWei = (e: string) => ethers.utils.parseEther(e);

!developmentChains.includes(network.name)
? describe.skip
: describe("Open position in the good range", async function () {
      let exchange:any
      let nftOracle:any
      let linkToken: LinkToken
      let mockOracle: MockOracle
      let usdc:any
      let accounts:any
      let exchangeInfo:any

      beforeEach(async () => {
        await deployments.fixture(["mocks", "nftOracle", "exchange", "exchangeInfo", "token"]);
        linkToken = await ethers.getContract("LinkToken")
        nftOracle = await ethers.getContract("MockV3AggregatorNft")
        exchange = await ethers.getContract("Exchange")
        usdc = await ethers.getContract("Token")
        exchangeInfo = await ethers.getContract("ExchangeInfo");
        accounts = await ethers.provider.getSigner()
      })

      async function setOraclePrice(newPrice:any){
        await nftOracle.updateAnswer((newPrice*10**18).toString())
        }
      
      it("open postion in the good range", async () => {
        const [owner, account1, account2, account3] = await ethers.getSigners();
        await setOraclePrice(1.5);
        // console.log(toEther(await exchange.showPriceETH()))
        await exchange.initialVirtualPool(toWei('5'));
        //owner deposit collateral
        await usdc.approve(exchange.address, toWei('50'));
        await exchange.depositCollateral(toWei('50'));
        expect(toEther(await exchange.collateral(usdc.address, owner.address))).to.equal('50.0')
        
        //account1 deposit collateral
        await usdc.transfer(account1.address, toWei('1000'))
        await usdc.connect(account1).approve(exchange.address, toWei('1000'));
        await exchange.connect(account1).depositCollateral(toWei('1000'));
        expect(toEther(await exchange.collateral(usdc.address, account1.address))).to.equal('1000.0')

        //account1 deposit collateral
        await usdc.transfer(account2.address, toWei('1000'))
        await usdc.connect(account2).approve(exchange.address, toWei('1000'));
        await exchange.connect(account2).depositCollateral(toWei('1000'));
        expect(toEther(await exchange.collateral(usdc.address, account2.address))).to.equal('1000.0')

        //account3 deposit collateral
        await usdc.transfer(account3.address, toWei('1000'))
        await usdc.connect(account3).approve(exchange.address, toWei('1000'));
        await exchange.connect(account3).depositCollateral(toWei('1000'));
        expect(toEther(await exchange.collateral(usdc.address, account3.address))).to.equal('1000.0')
        
        // await exchange.openShortPosition(toWei('250'))
        let minimumBayc = await exchangeInfo.getMinimumLongBaycOut(toWei('250'))
        await expect(exchange.openLongPosition(toWei('250'), minimumBayc)).to.be.revertedWith("Insufficient margin to open position with requested size.");
        minimumBayc = await exchangeInfo.getMinimumShortBaycOut(toWei('250'))
        await expect(exchange.openShortPosition(toWei('250'), minimumBayc)).to.be.revertedWith("Insufficient margin to open position with requested size.");
        console.log('owner margin:', Number(await exchange.userMargin(owner.address)))
        
      })

      
      
    })