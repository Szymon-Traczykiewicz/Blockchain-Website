import React from "react";
import './Article.css';
import Card from "../../../UI/Card";
import Footer from "../../../UI/Footer";
import imgeight from '../../../image/Blog/8.png';
import imgcontent from '../../../image/Blog/A8imgInsideContent.png';
import imgcontenttable from '../../../image/Blog/A8TableInsideContent.png';
import imgsummary from '../../../image/Blog/A8imgSummary.png';
import A8tablesummary from '../../../image/Blog/A8tablesummary.png';
import A8ContentTerra from '../../../image/Blog/A8ContentTerra.png';
import A8TableTerra from '../../../image/Blog/A8TableTerra.png';
import A8AvalancheContent from '../../../image/Blog/A8AvalancheContent.png';
import A8pdot from '../../../image/Blog/A8pdot.png';
import A8pdotTable from '../../../image/Blog/A8pdotTable.png';
import A8CeloContent from '../../../image/Blog/A8CeloContent.png';
import A8CeloContentTable from '../../../image/Blog/A8CeloContentTable.png';
import { Link } from "react-router-dom";

const EightArticle = () => {

    const MainHeader = (props) => {
        return (<div className="MainHeaderArticle"> {props.children} </div>);
    };
    const SubHeading = (props) => {
        return (<div className="SubHeading"> {props.children} </div>);
    };

    const PlainText = (props) => {
        return (<div className="PlainText"> {props.children} </div>);
    };


    return (  
    
<Card>
    <main className="ArticleContainer">
<MainHeader>Blockchain Platforms 2022</MainHeader>
<div>
<img className="ImgArticle"  src={imgeight} alt="SevenArticle" />
</div>
<SubHeading>A short history of Blockchain </SubHeading>
<PlainText>
Blockchain technology is directly related to the Internet and electronic money development. Since the early 90s, researchers have been looking for an answer to the question: is it possible to create a decentralized payment system that will allow users to send funds to each other in an atmosphere of complete distrust?
<br/> <br/>
Crypto enthusiast Nick Szabo first formulated the ideas embedded in modern blockchain platforms in 1998. In his E-mail newsletter, he described the theory of the bit-gold protocol, the main ideas of which subsequently migrated to Bitcoin. A year earlier, Adam Back outlined the concept of the Hashcash protocol, which was a model of the Proof-of-Work consensus mechanism.
<br/> <br/>
However, the vast majority of users did not have high-speed Internet access and hard drives of sufficient capacity at that time, so these ideas did not find much support. Their implementation was delayed until 2008 when an unknown user named Satoshi Nakamoto published a white paper for his “digital cash” protocol. On January 3, 2009, the first blocks were generated on the new network, called <b>Bitcoin</b>.
<br/> <br/>
In 2013, the NXT protocol was developed, offering a <b>Proof-of-Stake</b> (PoS) consensus mechanism. The probability of generating a block in such a blockchain depends not on computing power but on the amount of cryptocurrency on the user’s balance. At the same time, NXT also supported the creation of their cryptocurrencies by other users based on a single platform.
<br/> <br/>
In July 2015, programmer Vitalik Buterin and his team introduced the first version of <b>Ethereum</b>. This virtual machine runs simultaneously on multiple computers and uses blockchain to store data. The main innovation of Ethereum has become smart contracts — small programs in the Solidity language, the execution of which takes place on remote nodes. Cryptocurrency in the system is used to pay for the execution of smart contracts on remote servers. The emergence of Ethereum meant a breakthrough in the development of blockchain applications.
</PlainText>
<SubHeading>Blockchain Trilemma</SubHeading>    
<PlainText>
<b>Scalability, security, decentralization</b>. Developers face them all the time, very often they need to sacrifice one “aspect” as a trade-off to accommodate the other two. It is a widely held belief that decentralized networks can only provide two of three benefits. However, ambitious developers still believe that blockchain networks can indeed have all three and more.
<br/> <br/>
Today, researchers are experimenting with variations on the underlying blockchain architecture. While the main blockchains perform well under light loads, the issue of supporting full-scale applications is associated with significant scaling problems: the cost of transactions <b>increases</b> dramatically, and the data processing time increases from <b>several hours to several days</b>. Many of the new blockchains include innovative solutions to these problems.
</PlainText>
<SubHeading>Blockchain Development Platforms for 2022</SubHeading>
<PlainText>
As we mentioned above Blockchain is based on three principles: decentralization, scalability, and security. And if the first of them is achieved relatively easily, then the other two cause some difficulties. There is also the problem of interaction between blockchains. Most of the existing solutions are complex, overloaded, narrow, and involve a third party. In addition, they may not be completely safe.
<br/> <br/>
The blockchain market is still exploding. Along with a growing interest in blockchain technology, many blockchain development platforms are also growing. It is challenging to choose the proper framework to meet your business needs. We will provide a quick overview of the best blockchain development platforms for 2022 and explain what to look for when choosing a blockchain for your business. Well, to choose from top blockchain application platforms, you need to know more about each of them.
<br/><br/> <br/><br/>
</PlainText>
<div className="ImageInsideContent" >
<img className='ImgContent' style={{borderRadius:10}} src={imgcontent} alt="ImgContent" />
<br/><br/><br/><br/>
</div>
<div className="ImageInsideContent" >
<img className="ImgContent" src={imgcontenttable} alt="ImgContent" />
<br/><br/><br/><br/>
</div>
<PlainText>
Starting with <b>Ethereum</b> would probably be the right decision. It is the perfect platform that helps build dApps (decentralized applications), democratic autonomous organizations(DAOs), and offers highly secure cryptocurrency trading smart contracts.
<br/><br/>
It’s gaining popularity for blockchain mobile apps development to develop enterprise-level applications. The high level of security due to decentralization, minimal downtime, versatility (adaptability), and a huge community makes the platform unique and powerful.
<br/><br/>
The developers of Ethereum are aware of the problem with the difficulty of mining and plan to replace the consensus mechanism. The slow processing times, higher transaction costs, and scaling issues make the system weaker.
<br/><br/>
Approximately in the 3rd quarter of 2022, the Ethereum blockchain will switch to the Proof-of-Stake (PoS) algorithm.
<br/><br/>
</PlainText>
<PlainText><b>Summary:</b><br/><br/></PlainText>
<PlainText>
Defi and <a className="a6" href="https://ideasoft.io/blog/what-is-nft-introduction/" target="_blank" rel="noreferrer">NFT</a> are directly related to Ethereum; the demand for the network is growing. The variety of Ethereum-based projects is remarkable. The platform supports creating voting systems, secure medical data, and games. Thanks to constant improvements, Ethereum will be one of the most promising blockchain development platforms in the coming years.
<br/> <br/>
</PlainText>
<div className="ImageInsideContent" >
<img  style={{borderRadius:10}} src={imgsummary} alt="ImgContent" />
<br/><br/><br/><br/>
</div>
<div className="ImageInsideContent" >
<img className="ImgContent" style={{borderRadius:10}} src={A8tablesummary} alt="ImgContent" />
<br/><br/><br/><br/>
</div>
<PlainText>
<b>Binance Smart Chain</b> achieved huge success in early 2021.
<br/><br/>
It runs in parallel to the Binance Chain. The chain was built to support smart contracts, Defi development, and crypto payments.
<br/><br/>
Due to issues with Ethereum’s heavy congestion and the high price of gas, it forced developer investors to look for other options. The BSC community has made the network even more attractive to new users by lowering gas fees from 15 Gwei to 10 Gwei ($0.15 per transaction). Binance Smart Chain has a block time of around 3 seconds. The native token of blockchain is BNB.
<br/><br/>
BSC relies on BNB network. Besides granting users a trading fee discount, access to Binance’s token offerings, and allowing them to participate in liquidity mining and yield farming on BSC, BNB is also used to pay the network fees.
<br/><br/>
Binance does not hide that its Binance Smart Chain is similar to the Ethereum ecosystem (EVM compatible) with lower fees and a very low degree of decentralization.
<br/><br/>
Relying on BSC does come with some tradeoffs, especially in the security and decentralization aspects.
<br/><br/>
BSC is mainly centralized. There are 41 validators active on the network. Centralized systems are more vulnerable to system failures, attacks, and regulatory compliance orders. We need to be aware that this most influential trade-off enables the low block times and low transaction costs, which are the most considerable advantage of BSC. All network validators on BSC need to be approved by Binance.
</PlainText>
<PlainText><br/><br/><b>Summary:</b><br/><br/></PlainText>
<PlainText>
    Binance Smart Chain provides faster and cheaper transactions than most blockchains and allows developers to port from Ethereum to Binance Smart Chain with ease.
    <br/><br/>
</PlainText>
<div className="ImageInsideContent" >
<img className="ImgContent" style={{borderRadius:10}} src={A8ContentTerra} alt="ImgContent" />
<br/><br/><br/><br/>
</div>
<div className="ImageInsideContent" >
<img className="ImgContent" style={{borderRadius:10}} src={A8TableTerra} alt="ImgContent" />
<br/><br/><br/><br/>
</div>

<PlainText>
Terra is a blockchain emitting its own stablecoins linked to fiat currencies. This project wants to compete with popular payment methods instead of using fiat currencies.
<br/><br/>
There are currently many different types of stablecoins available on Terra. Specifically, you can access TerraUSD (UST) pegged to the US dollar, TerraKRW (KRT) pegged to the South Korean Won, TerraMNT pegged to the Mongolian Tugrik, and TerraSDR (SDT) pegged to the US dollar.
<br/><br/>
Blockchain Terra uses the popular Cosmos SDK blockchain building platform based on the Proof Of Stake consensus mechanism. Terra limits to 100 validators, making it not highly decentralized. Blockchain Terra can reach hundreds of transactions per second that are billed in express (usually 6 seconds) and cost just a few cents each. Terra wants to compete with popular payment methods such as traditional online payment models, credit cards, or the popular financial giant PayPal.
</PlainText>
<SubHeading>Terra blockchain protocols</SubHeading>
<PlainText>The mirror protocol existing in the Terra blockchain allows users to mint tokens that reflect the prices of stocks and other assets. Anyone using the “mirror protocol” will have exposure to the shares of companies such as Tesla, Amazon, Microsoft, or GameStop, which was blocked at some point on many platforms.
<br/><br/>
Another protocol built on Terra is the Anchor protocol, which calls itself the “Gold Standard for Passive Income on the Blockchain.” This protocol allows users to deposit UST and earn 20% per annum. This income is achieved by using staking rewards from several blockchains, including Terra, Ethereum, Solana, and Polkadot. It is possible to deposit these cryptocurrencies into Anchor, and then the income from the coins will be used to achieve this interest rate.
                    <br /><br />
</PlainText>
<PlainText><b>CHAI</b><br /><br /></PlainText>
<PlainText>CHAI is a Korean financial application based on the Terra blockchain that allows users of this country to make transactions with ease. It has over 2.3 million users, generating 90,000 transactions per day for approximately $ 2 million or more. The application has integrated with 14 of the most popular banks in Korea. The user interface looks similar to all the payment applications on the market.
<br /><br />
</PlainText>
<PlainText><b>Summary:</b><br /><br /></PlainText>
<PlainText>
Terra is a complete, decentralized financial system with CHAI for payments, Mirror for investments, and Anchor for savings. It has an optimal user experience, fills the gap with traditional finance, and enables the new generation to adopt innovative blockchain-based systems. Combined with fast transactions and low fees, this software is a pleasure to use. You can even purchase it for Android and iOS. It works on the consensus proof of the steak, so there are no problems with scalability and speed.
<br /><br /><br /><br />
</PlainText>
<div className="ImageInsideContent" >
<img className="ImgContent" style={{borderRadius:10}} src={A8AvalancheContent} alt="ImgContent" />
<br/><br/><br/><br/>
</div>
<div className="ImageInsideContent" >
<img className="ImgContent" style={{borderRadius:10}} src={A8tablesummary} alt="ImgContent" />
<br/><br/><br/><br/>
</div>
<PlainText>
Avalanche’s purpose is to be the best flexible smart contract platform which proposes a new consensus protocol to launch DeFi products with high transaction rates.
<br/><br/>
Developers have access to tools for launching and deploying decentralized networks identical to that of Ethereum. At the same time, all financial transactions are performed much faster.
<br/><br/>
Let us share our experience with this Blockchain platform:
<br/><br/>
➡ It’s one of the fastest-growing and most promising blockchain projects on the market. The growth of the token value only in 2021 was like 4500%
<br/><br/>
➡ It’s simple to develop smart contracts with Avalanche. If you had experience with Solidity (the most popular language for smart contract development)- switching to the Avalanche will happen without the extra cost and pain.
<br/><br/>
➡ Transaction fees are almost negligible. It’s crucial, especially if your product deals with small transfers.
<br/><br/>
➡ The transaction speed (max 2s) and throughput (4500/s) are incomparable to most of the current competitors on the market.
<br/><br/>
➡ Based on the information from our dev team — they love to work with Avalanche because it is well documented. There are no doubts about how to start, learn, and achieve specific results.
<br/><br/>
</PlainText>
<PlainText><b>Summary:</b><br/><br/></PlainText>
<PlainText>As cryptocurrencies, DeFi and NFTs continue to attract more users, Avalanche is well-positioned to thrive. Offering Ethereum interoperability (EVM compatibility), high-speed transactions, and low fees, Avalanche becomes more and more popular and attracts many new users day by day.<br/><br/></PlainText>
<div className="ImageInsideContent" >
<img className="ImgContent" style={{borderRadius:10}} src={A8pdot} alt="ImgContent" />
<br/><br/><br/><br/>
</div>
<div className="ImageInsideContent" >
<img className="ImgContent" style={{borderRadius:10}} src={A8pdotTable} alt="ImgContent" />
<br/><br/><br/><br/>
</div>
<PlainText>
    Today, all blockchain platforms work separately and independently from each other. When creating innovative decentralized systems, developers are forced to spend their resources and time on an entirely new network. At the same time, we could improve existing platforms and bring the standard that everyone would like to the ideal.
    <br/><br/>
</PlainText>
<PlainText><b>The idea of creating Polkadot</b><br/><br/></PlainText>
<PlainText>
The project of Gavin Wood, one of the creators of Ethereum, aims to solve this problem by combining blockchain platforms. The technology is called Polkadot and is a multi-chain, heterogeneous, scalable network.
    <br/><br/>
The goal of the project is to create a framework for existing blockchains. The platform allows developers to invest their talent in developing smart contracts, dapp applications, and other projects on top of all blockchain platforms. At the same time, the Polkadot team will deal with all related processes, including cryptocurrency mining, transaction verification, and security protocols.
    <br/><br/>
The network works on the principle of Relay chain; with it, blockchain platforms can connect to Polkadot and work in parallel. Such parallel chains are called parachain.
    <br/><br/>
They have access to network verification using the Proof-of-Stake (PoS) consensus algorithm. It gives them the ability to set the code update time launch dapp applications or their tokens. This approach allows the network to maintain its security measures but at the same time, to release new protocols.
    <br/><br/>
</PlainText>
<PlainText><b>Summary:</b>    <br/><br/></PlainText>
<PlainText>
    Polkadot has multiple advantages, such as scalability, cross-chain communication, and a shared security model. If you choose this option, you will not have to worry about high transaction fees, low TPS, and other problems. Creating a dApp using Polkadot is easy, but it will require an additional bridge to connect to other blockchains. Moreover, you will need to find experienced Polkadot developers, which is not easy due to the relative novelty of this technology.
    <br/> <br/>
</PlainText>
<div className="ImageInsideContent" >
<img className="ImgContent" style={{borderRadius:10}} src={A8CeloContent} alt="ImgContent" />
<br/><br/><br/><br/>
</div>
<div className="ImageInsideContent" >
<img className="ImgContent" style={{borderRadius:10}} src={A8CeloContentTable} alt="ImgContent" />
<br/><br/><br/><br/>
</div>
<PlainText>
Celo is an open platform that makes financial instruments available to everyone who has a mobile phone. It is decentralized, programmable, and configurable. It aims to create a reliable ecosystem of organizations, validators, and developers to build an open financial system that helps their communities grow and thrive.
<br/><br/>
<b>Key Features</b>
<br/><br/>
<ul><li>Currencies with a stable value. Celo includes built-in support for several stable currencies, similar to the ERC20 standard, linked to “fiat” currencies such as the US dollar to facilitate the use of Celo as a means of payment.</li></ul>
<ul><li>Accounts linked to phone numbers. Celo supports secure decentralized phone number matching. It allows users to send and receive payments with their existing contacts and confidently deliver the payment to the intended recipient.</li></ul>
<ul><li>Users can pay transaction fees in stable currencies, so they don’t have to manage balances in different currencies.</li></ul>
<ul><li>High-speed and secure synchronization between mobile devices and the Celo network means that users with high latency, low bandwidth, or high data rates can use Celo.</li></ul>
<ul><li>Celo uses a consensus algorithm with proof of stake. Compared to Proof of Work systems such as Bitcoin and Ethereum, this eliminates the negative impact on the environment and means that users can make it cheaper, and faster, and the result cannot be changed after completion.</li></ul>
<ul><li>The Celo protocol offers incentives to run full nodes to serve light clients that run on every mobile device. Unlike other bet confirmation systems, users can still earn cryptocurrency in exchange for providing computing resources without placing bets.</li></ul>
<ul><li>Network management. Celo supports rapid protocol updates and changes through chain management, in which all cryptocurrency holders can participate.</li></ul>
<ul><li>Celo includes a programmable smart contract platform compatible with the Ethereum virtual machine, which is already widely used, familiar to developers, and has powerful tool support. This allows Celo to provide rich user features and quickly support a broad ecosystem of third-party applications and extensions.</li></ul>
<ul><li>Independent custody. Users have access to their funds and account keys and have full control over them, and they do not need to depend on third parties to make payments.</li></ul><br/><br/><br/><br/>
<b>Summary:</b> Celo is an innovative mobile-first blockchain platform. The ecosystem is carbon neutral, making it an energy-efficient, eco-friendly platform. With rising concerns about the power consumption of legacy blockchains, Celo provides a compelling alternative to computationally heavy blockchains.
</PlainText>
<SubHeading>Conclusion</SubHeading>
<PlainText>
We believe that many of the blockchains represented above will coexist for the next few years. After that, those that bring the most advances and solutions to blockchain technology will remain.
<br/><br/>
How do you decide which blockchain platform is the most suitable for your business?
<br/><br/>
We need to consider the following criteria:
<br/><br/>
<ul><li>Scalability, and the throughput of the platform.</li></ul>
<ul><li>Transactions, token development costs, transactions speed</li></ul>
<ul><li>Smart contracts development capabilities</li></ul>
<ul><li>Consensus</li></ul>
<ul><li>Know-how structure: documentation quality, availability of external tutorials or guides.</li></ul>
<ul><li>Adoption rate: consider the strength of the community.</li></ul>
<ul><li>Required dev experience: how easy is it for a new developer to get started with a particular blockchain platform?</li></ul>
<ul><li>Availability of supporting developer tools to increase the developer experience.</li></ul>
<br/><br/>
However, if you are still struggling to choose the right platform according to your project needs, don’t worry! The Neti team will support you. We could help you conceptualize your blockchain project idea into reality with our <a className="a6" href="https://www.neti-soft.com/contact" target="_blank" rel="noreferrer">strong-minded engineers.</a><br/><br/>
</PlainText>
<div className="ButtonBrowseAllArticles">
    <Link to="/Blog" className="abutton">Browse All Articles</Link>
</div>
    </main>
    <Footer/>
</Card>

    );};
    export default EightArticle;