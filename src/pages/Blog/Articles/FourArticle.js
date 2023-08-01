import React from "react";
import './Article.css';
import Footer from "../../../UI/Footer";
import Card from "../../../UI/Card";
import fourimg from "../../../image/Blog/4.png";
import { Link } from "react-router-dom";




const MainHeader = (props) => {
    return (<div className="MainHeaderArticle"> {props.children} </div>);
};
const SubHeading = (props) => {
    return (<div className="SubHeading"> {props.children} </div>);
};

const PlainText = (props) => {
    return (<div className="PlainText"> {props.children} </div>);
};
const ItalicText = (props) => {
    return (<div className="ItalicText"> {props.children} </div>);
};

const FourArticle = () => {

    return (
<Card>
<main className="ArticleContainer">
<MainHeader>Short guide to the world of Decentralized Finance (DeFi)</MainHeader>
<div>
    <img className="ImgArticle" src={fourimg} alt="ThirdArticle" />
</div>
<SubHeading>Introduction</SubHeading>
<PlainText>
You’ve probably heard something about decentralized exchanges or exchangers.
<br/> <br/>
We will discuss them — don’t worry, we’ll tell you everything and show it as usual, simple, understandable, accessible.
<br/> <br/>
In this article, we will look at decentralized finance (DeFi) and how it will impact the way financial firms operate and some everyday use cases. Neti wants to share the knowledge we receive within a few years, working directly with customers in Defi areas. We promise to keep things brief.
</PlainText>
<SubHeading>What’s Defi?</SubHeading>
<PlainText>
Decentralized Finance (DeFi) is a decentralized public finance ecosystem based on public blockchains, mostly implemented on Ethereum. Currently, DeFi covers the entire range of financial services — lending, loans, installments, trade, and more.
<br/> <br/>
What does decentralized mean? — there is no official representation in any country; no one can control the ecosystem since it’s implemented using the blockchain. In other words, it puts the average person on the same level that bankers are on without all the middlemen and processes.
<br/> <br/>
As a catch-all phrase for a new wave of financial services innovation, the term “DeFi” is often used interchangeably with “blockchain,” the decentralized, immutable public ledger on which the cryptocurrency Bitcoin is based. In the ideal world, no single person or organization should change that ledger of transactions. And thanks to Smart Contracts, that world is within reach.
</PlainText>
<br/>
<ItalicText>
***If you have a project from DeFi space and looking for IT partner who will take care of technical part of your project do not hesitate to <a href="https://www.neti-soft.com/contact" target="_blank"rel="noreferrer"><u>contact Neti</u></a>.***
</ItalicText>
<SubHeading>What are DeFi Benefits!</SubHeading>
<PlainText>
 <b>➡ Full transparency</b> — the code of each DeFi system is open for audit and, accordingly, each user can study it or even identify a bug. All transactions are a priori open.
<br/> <br/>
<b>➡ Self-government and decentralization</b> — there is no governance structure in the system of decentralized finance, all “management” is carried out through smart contracts.
<br/> <br/>
<b>➡ Multi-accessibility</b> — every internet user can easily use DeFi services anywhere in the world.
<br/> <br/>
<b>➡ System flexibility</b> — everyone can create their applications or operations since the system code is open to everyone.
<br/> <br/>
For example, you could program a smart contract to manage borrowing and lending. Let’s say a user takes out a loan against a smart contract and locks up collateral in the form of cryptocurrency. If the user defaults and does not pay within a specific timeframe, their collateral will be automatically liquidated to settle the loan. It’s guaranteed by the program (dApp) written in the Blockchain, and nobody can stop this (even the author of the program).
<br/> <br/>
Let’s try to understand Smart Contracts and why they’re important.   
</PlainText>
<SubHeading>What are Smart Contracts?</SubHeading>
<PlainText>
Like any other contract, Smart Contracts lay out the terms of an agreement or in this case, a transaction. However, smart contracts are based on code that runs on a blockchain rather than on paper that sits on a lawyer’s desk, which gives them their name.
</PlainText>
<br/>
<PlainText><b>Smart Contracts history:</b></PlainText>
<br/>
<PlainText>
Nick Szabo, a computer scientist, and lawyer proposed smart contracts in the 1990s. The famous Szabo vending machine analogy Imagine a machine that sells quarter soda cans:
</PlainText>
<br/>
<ItalicText>
“If you put a dollar in and choose a soda, the machine is programmed to deliver the drink, and 75 cents change or encourage you to make another option or return your $1. This is a simple, smart contract. Smart contracts, like a Coke machine, can automate nearly any deal”.
</ItalicText>
<br/>
<PlainText>
While Ethereum is now the most popular smart contract platform, Tezos, Tron, EOS, and Algorand can all run them. Anyone can design and deploy a smart contract to a blockchain. Their code is transparent and verifiable, so anyone can observe how a smart contract handles digital assets. Smart contracts can be written in several languages (including Solidity, Rust, Go, and many others). The Ethereum blockchain stores the code for each smart contract, allowing anybody to inspect the code and current state to verify its functionality.
</PlainText>
<br/>
<PlainText>
Along with the blockchain and transaction data, each network node holds a copy of all existing smart contracts and their current state.
</PlainText>
<br/>
<PlainText>
When a user deploys a smart contract on the blockchain, the code is executed by all nodes in the network to reach a consensus on the conclusion and value flow. As a result, smart contracts need no central authority to execute securely for consumers to conduct sophisticated financial transactions with unknown organizations.
</PlainText>
<br/>
<PlainText>
To execute a smart contract on the Ethereum network, you must pay a “gas” cost (so named because these fees keep the blockchain running). Smart contracts cannot be changed once implemented on a blockchain, even by their originator. (There are exceptions.) So they can’t be restricted or shut down, and they’re readily accessible from any location in the world. Hence you should be quite particular when you choose your Dev team.
</PlainText>
<br/>
<PlainText>
Neti has the best developers 👌
</PlainText>
<br/>
<SubHeading>But why are they so important to DeFi?</SubHeading>
<PlainText>
Decentralized apps and tokens are built using smart contracts. All of which are stored on a blockchain, just like any other crypto transaction, from new financial tools to logistics and game experiences. In most cases, once a smart-contract app has been added to the blockchain, it can’t be reversed or modified (although there are some exceptions).
<br/><br/>
Apps powered by smart contracts are referred to as Decentralized Applications or “dApps” — and include decentralized finance (or DeFi) technology that aims to revolutionize the banking industry. Cryptocurrency holders can use DeFi apps to carry out complex financial transactions, such as securing loans and insurance, without the involvement of a bank or other financial institution.
</PlainText>
<br/><br/>
<MainHeader>Common use cases of Defi in 2022</MainHeader>
<SubHeading>Lending Platforms</SubHeading>
<PlainText>
DeFi loan and borrowing services are among the most traditional features available to cryptocurrency consumers. Borrowers can use their bitcoin holdings as collateral to borrow money in other currencies if they have significant amounts of cryptocurrency. Individuals can profit from the value of their cryptocurrency assets without triggering taxable events by lending their bitcoin deposits to borrowers.
<br/><br/>
Since the supply and demand of cryptocurrencies affect interest rates, the dApps that enable decentralized borrowing and lending can automatically alter rates.
</PlainText>
<SubHeading>Stablecoins</SubHeading>
<PlainText>
Creating Stablecoins, otherwise known as digital currencies with fixed values, was one of the initial uses for DeFi technology. As a result of its lower volatility than other cryptocurrencies, stable coins are commonly used for everyday purchases.
<br/><br/>
DAI, a Stablecoin, is pegged to the dollar; the coin is backed by the native Ethereum token Ether and issued by open-source Ethereum blockchain project MakerDAO. To maintain DAI’s value in the face of volatile Ether prices, the token is overcollateralized with Ether.
</PlainText>
<SubHeading>Decentralized Exchanges</SubHeading>
<PlainText>
Decentralized exchanges, or DEXs, are peer-to-peer markets where cryptocurrency traders can conduct transactions without entrusting the management of their funds to an intermediary or custodian, as is the case with traditional exchanges (Coinbase, Coinberry, etc.).
<br/><br/>
Self-executing agreements encoded in code, known as “smart contracts,” allow these transactions to take place. In most markets, DEX users who contribute cryptocurrencies can earn money by receiving a percentage of transaction fees.
</PlainText>
<SubHeading>Decentralized Insurance</SubHeading>
<PlainText>
Instead of a single person or company, a decentralized pool of coverage providers is used with decentralized insurance. As a result, everyone can provide coverage. In addition, by putting your money in a “capital pool,” you become a market liquidity source and get rewarded as a result.
<br/> <br/>
Coverage providers can pick and choose which events or processes to cover. For example, perhaps you are certain that exchange X will not be violated. As a result, providing liquidity to the capital pool to cover that specific incident is acceptable to you.
<br/> <br/>
The capital pool of Exchange X will be used to pay claims from customers who purchased insurance in the event of a cyberattack.
</PlainText>
<SubHeading>Synthetic Asset Issuance</SubHeading>
<PlainText>
Any asset can be tokenized and traded using synthetic assets smart contracts. Synthetic assets have two advantages over traditional market derivatives: they are more reliable and flexible, allowing you to construct your derivative instrument, tokenize it, and then utilize it any way you see fit within the blockchain.
<br/> <br/>
The anonymity afforded by synthetic assets also makes it possible for you to “possess” tokenized shares of a major corporation, something that is inconceivable in traditional finance.
<br/> <br/>
A platform called Synthetix is at the forefront of synthetic asset issuance.
</PlainText>
<SubHeading>Yield farming and staking</SubHeading>
<PlainText>
In DeFi, one investing method is yield farming. You can earn interest or transaction fees by lending or staking your bitcoin coins and tokens. To put it another way, you’re lending money to the Bank and thus earning interest.
</PlainText>
<SubHeading>How to write dApps for Defi?</SubHeading>
<PlainText>
➡ <b>Define the Requirements</b>
<br/><br/>
Ensure your team understands the requirements before embarking on the project; in other words, make sure you communicate the vision, goal, and purpose of the dApp, so the entire team through a whitepaper so your team is on the same page.
<br/><br/>
➡<b> Choose the right Tech Stack</b>
<br/><br/>
If you have a CTO or Software Architect on board, it is their duty to choose the web 3.0 tech stack best suited for your project. However, If you don’t, it is your responsibility to thoroughly research the pros, cons, and everything in between. Should you have a problem, do not hesitate to contact us.
<br/><br/>
➡ <b>Team of developers</b>
<br/><br/>
If you hire the wrong people to work on your blockchain development or smart contract development project, it could cost you more than just an arm and a leg. It takes a lot of time and could put your project back for months or years. In this ever-changing world of Defi, you can’t afford to do that. Hence, it is important to work with a developer who has experience with projects from an MVP to a full-scale project.
<br/><br/>
From Project manager to an analyst, smart-contract developer, blockchain developer, and UI/UX designers, you need them all. If you’re at a crossroads, have the Neti-soft team do the heavy lifting on your behalf.
</PlainText>
<SubHeading>Does DeFi have a Future?</SubHeading>
<PlainText>
Over $90 billion has been locked in Ethereum-based DeFi protocols. Some reports indicate that DeFi’s growth in 2021 was 780 percent more than in 2018. To suggest that this is just the beginning would be an understatement. So yes, Defi does have a future; here’s why:
<br/><br/>
For business — Industries such as pharmaceuticals, insurance, gaming, and finance are already seeing the game-changing effects of DeFi, and the unfortunate reality is that adoption will increase in the coming years. Tesla, one of the world’s largest technology companies, has recognized this and is reorganizing its entire supply chain and logistics around it.
<br/><br/>
For personal use, the emerging league of billionaires will almost certainly have their wealth on Defi and homes in the Metaverse.
<br/><br/>
If you’re looking for an ideal team to bring your Decentralized Application to live on the blockchain do not hesitate to <a href="https://www.neti-soft.com/contact" target="_blank"rel="noreferrer"><u><b>contact Neti</b></u></a>.    
</PlainText>
<div className="ButtonBrowseAllArticles">
    <Link to="/Blog" className="abutton">Browse All Articles</Link>
</div>

    </main>
    <Footer />
</Card>

    );
};
export default FourArticle;