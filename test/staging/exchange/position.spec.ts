import { numToBytes32, stringToBytes } from "@chainlink/test-helpers/dist/src/helpers"
import { assert, expect } from "chai"
import { BigNumber, ContractReceipt, ContractTransaction } from "ethers"
import { network, deployments, ethers, run } from "hardhat"
import { developmentChains, networkConfig } from "../../../helper-hardhat-config"
import { APIConsumer, LinkToken, MockApiOracle, MockOracle } from "../../../typechain"

const chainId = 31337;
const jobId = ethers.utils.toUtf8Bytes(networkConfig[chainId].jobId!);
const toEther = (e:any) => ethers.utils.formatEther(e);
const toWei = (e: string) => ethers.utils.parseEther(e);

!developmentChains.includes(network.name)
? describe.skip
: describe("Exchange Unit Tests", async function () {
      let exchange:any
      let nftOracle:any
      let linkToken: LinkToken
      let mockOracle: MockApiOracle
      let usdc:any
      let accounts:any
      let exchangeInfo:any

      beforeEach(async () => {
        await deployments.fixture(["mocks", "nftOracle", "exchange","exchangeInfo", "token"]);
        linkToken = await ethers.getContract("LinkToken")
        nftOracle = await ethers.getContract("MockV3AggregatorNft")
        exchange = await ethers.getContract("Exchange")
        usdc = await ethers.getContract("Token")
        exchangeInfo = await ethers.getContract("ExchangeInfo");
        mockOracle = await ethers.getContract("MockApiOracle")
        usdc = await ethers.getContract("Token")
        accounts = await ethers.provider.getSigner()

        //fund link
        await run("fund-link", { contract: exchangeInfo.address, linkaddress: linkToken.address })
        //set exchange info
        await exchange.setExchangeInfo(exchangeInfo.address);
      })

      function numToBytes(num:number) {
        const value = ethers.BigNumber.from(num.toLocaleString('fullwide', { useGrouping: false }));
        const bytes32Value = ethers.utils.hexZeroPad(value.toHexString(), 32);
        return bytes32Value
      }

      const latestPrice = 100
      const latestFundingRate = 10
      let date = new Date();
      let timestamp = date.getTime();

      async function setOraclePrice(newPrice: any) {
        // await nftOracle.updateAnswer((1 * 10 ** 18).toString())
        // await priceFeed.updateAnswer((newPrice * 10 ** 18).toLocaleString('fullwide', {useGrouping:false}))
        const transaction: ContractTransaction = await exchangeInfo.requestFundingRate();
        const transactionReceipt: ContractReceipt = await transaction.wait(1);
        if (!transactionReceipt.events) return
        const requestId: string = transactionReceipt?.events[0].topics[1]
        await mockOracle.fulfillOracleFundingRateRequest(requestId, numToBytes(newPrice*10**18), numToBytes(timestamp), numToBytes(latestFundingRate));
      }
      
      it("Test open and close long position", async () => {
        const [owner, account1, account2] = await ethers.getSigners();
        await setOraclePrice(1500);
        // console.log(toEther(await exchange.showPriceETH()))
        await exchange.initialVirtualPool(toWei('5'));
        //owner deposit collateral
        await usdc.approve(exchange.address, toWei('1000'));
        await exchange.depositCollateral(toWei('1000'));
        expect(toEther(await exchange.collateral(usdc.address, owner.address))).to.equal('1000.0')
        
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
        
        let minimumBayc = await exchangeInfo.getMinimumLongBaycOut(toWei('130'))
        await exchange.openLongPosition(toWei('130'), minimumBayc)
        console.log(toEther(await exchange.getAccountValue(owner.address)));
        console.log(toEther(await exchange.uservBaycBalance(owner.address)));
        console.log(toEther(await exchange.uservUsdBalance(owner.address)));
        const ownerAssetSize = await exchange.uservBaycBalance(owner.address);
        console.log('owner position national 1 :',toEther(await exchange.getPositionNotional(owner.address)));
        console.log('first collateral:', toEther(await exchange.collateral(usdc.address, owner.address)));
        console.log('owner margin 1 :', Number(await exchange.userMargin(owner.address)))
        console.log('p1:', toEther(await exchange.getCurrentExchangePrice()))

        minimumBayc = await exchangeInfo.getMinimumShortBaycOut(toWei('150'))
        await exchange.connect(account1).openShortPosition(toWei('150'), minimumBayc)

        minimumBayc = await exchangeInfo.getMinimumShortBaycOut(toWei('150'))
        await exchange.connect(account2).openShortPosition(toWei('150'), minimumBayc)
        console.log('p2:', toEther(await exchange.getCurrentExchangePrice()))
        console.log('owner margin 2 :', Number(await exchange.userMargin(owner.address)))
        console.log('owner position national 2 :',toEther(await exchange.getPositionNotional(owner.address)));
        // console.log('owner unrealized pnl :', toEther(await exchange.))
        const ownerBaycBalance = await exchange.uservBaycBalance(owner.address);
        const minimumUsdOut = await exchangeInfo.getMinimumShortUsdOut(ownerBaycBalance.abs());
        await exchange.closePosition(ownerAssetSize, minimumUsdOut);
        console.log('owner position national 3 :',toEther(await exchange.getPositionNotional(owner.address)));
        console.log('owner margin 3 :', Number(await exchange.userMargin(owner.address)))
        console.log(toEther(await exchange.uservBaycBalance(owner.address)));
        console.log(toEther(await exchange.uservUsdBalance(owner.address)));
        console.log('final collateral:', toEther(await exchange.collateral(usdc.address, owner.address)));
      })


      it("Test open and close short position", async () => {
        const [owner, account1, account2] = await ethers.getSigners();
        await setOraclePrice(1500);
        // console.log(toEther(await exchange.showPriceETH()))
        await exchange.initialVirtualPool(toWei('5'));
        //owner deposit collateral
        await usdc.approve(exchange.address, toWei('1000'));
        await exchange.depositCollateral(toWei('1000'));
        expect(toEther(await exchange.collateral(usdc.address, owner.address))).to.equal('1000.0')
        
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
        
        let minimumBayc = await exchangeInfo.getMinimumShortBaycOut(toWei('130'))
        await exchange.openShortPosition(toWei('130'), minimumBayc)
        console.log(toEther(await exchange.getAccountValue(owner.address)));
        console.log(toEther(await exchange.uservBaycBalance(owner.address)));
        console.log(toEther(await exchange.uservUsdBalance(owner.address)));
        let ownerAssetSize = await exchange.uservBaycBalance(owner.address);
        console.log('owner position national 1 :',toEther(await exchange.getPositionNotional(owner.address)));
        console.log('first collateral:', toEther(await exchange.collateral(usdc.address, owner.address)));
        console.log('owner margin 1 :', Number(await exchange.userMargin(owner.address)))
        console.log('p1:', toEther(await exchange.getCurrentExchangePrice()))
        minimumBayc = await exchangeInfo.getMinimumShortBaycOut(toWei('150'))
        await exchange.connect(account1).openShortPosition(toWei('150'), minimumBayc)

        minimumBayc = await exchangeInfo.getMinimumShortBaycOut(toWei('150'))
        await exchange.connect(account2).openShortPosition(toWei('150'), minimumBayc)
        console.log('p2:', toEther(await exchange.getCurrentExchangePrice()))
        console.log('owner margin 2 :', Number(await exchange.userMargin(owner.address)))
        console.log('owner position national 2 :',toEther(await exchange.getPositionNotional(owner.address)));
        // console.log('owner unrealized pnl :', toEther(await exchange.))
        console.log('owner asset size :', Math.abs(Number(ownerAssetSize)).toString())
        ownerAssetSize = await exchange.uservBaycBalance(owner.address);
        console.log('real asset size :', (await exchange.uservBaycBalance(owner.address)))
        console.log('positive asset size :', Math.abs(Number(ownerAssetSize)).toString())
        // await exchange.closePosition(Math.abs(Number(ownerAssetSize)).toString());
        console.log(toEther(await exchange.uservBaycBalance(owner.address)));
        const ownerBaycBalance = await exchange.uservBaycBalance(owner.address);
        const minimumUsdOut = await exchangeInfo.getMinimumLongUsdOut(ownerBaycBalance.abs());
        await exchange.closePositionComplete(minimumUsdOut);
        console.log('owner position national 3 :',toEther(await exchange.getPositionNotional(owner.address)));
        console.log('owner margin 3 :', Number(await exchange.userMargin(owner.address)))
        console.log(toEther(await exchange.uservBaycBalance(owner.address)));
        console.log(toEther(await exchange.uservUsdBalance(owner.address)));
        console.log('final collateral:', toEther(await exchange.collateral(usdc.address, owner.address)));
        const finalCollateral = await exchange.collateral(usdc.address, owner.address);
        await exchange.withdrawCollateral(finalCollateral);
        console.log('final collateral after withdraw:', toEther(await exchange.collateral(usdc.address, owner.address)));
        return
      })

     
    })