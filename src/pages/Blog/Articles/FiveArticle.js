import React from "react";
import './Article.css';
import Card from "../../../UI/Card";
import Footer from "../../../UI/Footer";
import fiveimg from "../../../image/Blog/5.png";
import contentfive from "../../../image/Blog/contentfive.png";
import { Link } from "react-router-dom";

const FiveArticle = () => {

const MainHeader = (props) => {
    return (<div className="MainHeaderArticle"> {props.children} </div>);
};
const SubHeading = (props) => {
    return (<div className="SubHeading"> {props.children} </div>);
};

const PlainText = (props) => {
    return (<div className="PlainText"> {props.children} </div>);
};

    return(

<Card>
<main className="ArticleContainer">
<MainHeader>Tokens in Blockchain</MainHeader>
<div>
    <img className="ImgArticle" src={fiveimg} alt="ThirdArticle" />
</div>
<PlainText>
Blockchain gives us many new options for creating new, unique products.
This technology can transform the idea into something tangible, but (as any other technology) blockchain has its own rules, standards, and exceptions. Have you heard about tokens? Do you understand the concept? Sometimes reading articles about tokens is difficult to understand in a complete sense, especially for users who don’t have to deal with it daily. Let’s find out more about #tokens in Blockchain.   
</PlainText>
<SubHeading>What are tokens?</SubHeading>
<PlainText>
The word “token” derives from the Old English “tācen,” meaning a sign or symbol.
<br/> <br/>
In the physical world, you can use transportation, laundry, or game tokens as examples, they look similar to real one — coins. The physical versions of tokens have restrictions of using. They have limitations for specific businesses, organizations, or locations; physical tokens are not easily exchangeable and generally have only one function.
<br/> <br/>
Tokens were known and used long before the first blockchain was created. They were used as units of value issued by various institutions. For example, access tokens (authorization keys) in computer networks or tokens to guarantee data protection. In the banking system, you will get the token that expires after some time, and you need to refresh the session again.
<br/> <br/>
Tokens in blockchain represent the value if we use them for some purpose; it depends on what we actually need: we can use them for the distribution of goods, the sharing of rewards, voting systems, and even internally to reward employees for specific achievements. Everything valuable can be tokenized: real estate, land, works of art, or intellectual property.
<br/> <br/>
Imagine you are a casino customer. The first thing you need to do is to exchange your money/cash for tokens. You already have the tokens, so you start playing. You can win a lot of money; you can lose everything. It’s up to you when you say stop and go back and change your coins for cash.
<br/> <br/>
This analogy fits very well with the world of tokens in Blockchain and crypto :).  
</PlainText>
<SubHeading>Fungible and Non-fungible tokens? </SubHeading>
<PlainText>
Fungible means the item is replaceable and can be interchanged; this means numerous items hold the same value, and you would not care which fungible item you possessed as they are of equal value.
<br/> <br/>
“Non-fungible” more or less means that it’s unique and can’t be replaced with something else. Example: Mona Lisa painting. Think about owning the original Mona Lisa vs. owning a replica of the Mona Lisa.
<br/> <br/>
Non-fungible tokens (NFT) don’t exist in the physical world. They’re digital assets with unique lines of code that are stored on the “blockchain,” which is like an immutable digital ledger, or, a receipt written in stone. You need cryptocurrency to buy one, specifically Ethereum.
<br/> <br/>
In practice, the point is that you have something that nobody else has and nobody else can have (unless you give it back, sell it, or steal it from you). This can be compared to both having the original Mona Lisa and a t-shirt stained with sauce — these things are practically unforgeable. You can create imitations and very similar fakes, but there will always be some differences. One of these items is priceless, and the other worthless is only the result of some social contract.
<br/> <br/>
The NFT gained popularity when it became a pretty good way to sell digital art. While in the case of two-dimensional photos and graphics, their transfer to a material form is not problematic, with animations, 3D models, music videos, multimedia forms, etc., it is not so simple. In many cases, it becomes even impossible. NFT with a unique certificate saved in the blockchain allows you to buy and sell this type of digital work effectively.
<br/> <br/>
We will introduce examples of both fungible and non-fungible tokens later in this article.
</PlainText>
<SubHeading>Tokens on Ethereum</SubHeading>
<PlainText>
In the case of blockchain, tokens begin only with the creation of the Ethereum network.
<br/> <br/>
At first, there was no single set standard for creating and issuing tokens in the Ethereum ecosystem. Each issuer had to develop its version of the features and specifications. As a result, each token was unique, and the exchange of one for another required complicated coding.
<br/> <br/>
The breakthrough came in 2015. On November 19, Fabian Vogelsteller proposed its token specification as an Ethereum Request for Comments (ERC), which was the first one that finally appealed to the platform users.
<br/> <br/>
Thanks to his proposal, it was possible to create the ERC-20 token standard.
<br/> <br/>
It allows the creation of the foundation token infrastructure and Initial Coin Offering.
<br/> <br/>
You may have heard of Ether (ETH), the second-largest cryptocurrency at the time of writing. You’re not alone if you operate the terms ETH and Ethereum interchangeably in the conversation. But there’s a distinction between ETH, the crypto, and Ethereum, the blockchain platform. Ethereum allows you to create an entirely new token, which can be used for a specific purpose (for investment, to store value, or to make a purchase).
<br/> <br/>
In a few words, what are token standards for?
<br/> <br/>
They tell developers how to create, issue, and deploy new tokens based on their underlying blockchain. These standards help avoid fraud, technical incompatibility between tokens, and distribution of tokens that do not comply with blockchain rules.
<br/> <br/>
In other words, “what token of a particular type will be capable of”.
<br/> <br/>
Below, you can find the most popular Ethereum tokens standards:
<br/> <br/>
ERC-20 is a standard for fungible tokens, meaning that different units of an ERC20 token are interchangeable and have no unique properties. This standard dictates a list of rules and steps that a smart contract must follow in order to be implemented. Thanks to it, developers have the possibility of easier and standardized creation of tokens operating in the Ethereum network. It’s the most common type of Ethereum token; based on ERC-20, there are such tokens as Uniswap, AAVE lending, and borrowing platform, or Tether, considered a digital reflection of the US dollar. ERC-20 is probably the most popular type of token nowadays.
<br/> <br/>
ERC-721 — these are the so-called non-fungible tokens (NFT). They have their uniqueness to each attached asset. These tokens are becoming more and more popular and are used to create unique works of art or take attention in the game industry.
<br/> <br/>
ERC1155 — multi-token standard. Using this standard, a smart contract can represent and control any number of fungible and non-fungible token types. In this way, the ERC-1155 token can do the same functions as an <u>ERC-20</u> and <u>ERC-721</u> token, and even both simultaneously. And best of all, improving the functionality of both standards, making them more efficient.
<br/> <br/>
To put it in a simple way: with ERC-721 only one NFT can be wondered by one person, just like the Bored Ape NFT, but with ERC-1155 NFT can be owned by thousands of people. ERC-1155 is also much more gas efficient and much better for buying multiple of the same NFT.
<br/> <br/>
Due to its decentralization, Ethereum is a difficult target for fraud and censorship.
<br/> <br/>
It aims to provide greater security than traditional contracts and reduce the associated costs. Due to the above, it should be no surprise that Ethereum is one of the most important blockchain platforms.
</PlainText>
<SubHeading>What is the value of the token?</SubHeading>
<PlainText>
It’s exactly as much as someone will pay for it.
<br/><br/>
Imagine the NFT industry, the tokens representing digital art are gaining more and more astronomical prices. Many users have earned quite a lot of money by trading them. But why are prices so high? What factors are behind that given token costs just that much, not less or more?
<br/><br/>
It all depends on how you look at it.
<br/><br/>
A large part of the demand for certain items generates within the boundaries of specific interest groups. It turns out that the reasons to define something as valuable are generally common to all groups. It’s no secret that they have no intrinsic value at the beginning when you invest in any of them — playing cards, stocks, NFTs, or works of art.
<br/><br/>
Unlike stocks, its community regulates the perception of a given collector’s item. If there is no community around the thing you are interested in; you will collect for the sake of collecting. In other words, only greater or lesser acceptance by a community can make a given work feel in demand for millions of dollars.
</PlainText>
<SubHeading>How tokens can grow the value?</SubHeading>
<PlainText>
The tokenization process, during which we transfer some value to the token, can be an irreplaceable tool for automating processes in many areas of business.
<br/><br/>
Depending on what the token represents, how it will be distributed, what its potential but also if the creator has built “hype” around it — its value will increase or decrease.
<ul> <li>One example is the initial coin offering (ICO), where companies create a digital product or service and launch them. They offer tokens during the ICO. Investors can purchase these tokens and use them for payment on the issuing company’s platform. The more investors you bring in, the more valuable your tokens are.
</li> </ul>
<ul> <li>
The token can represent some real value in a permissioned blockchain. The users only perform specific actions granted to them by the ledger administrators and are required to identify themselves through certificates or other digital tokens.
</li> </ul>
<ul> <li>You can use tokens in different programming tools as an access key to diverse sections/options on the platform (for example, voting rights).
</li> </ul>
<ul> <li>Some of our good clients produce unique furniture from oak wood, and each owner of this amazing table will get a digital certificate (ownership). Why? So first, it’s the prestige and the additional satisfaction for a future buyer. You will own something special. In this case, the token will be a bonus to the potential customer.
</li> </ul>
<ul> <li>
If you invest in the stocks of a publicly-traded company, you participate in its value flows. On this basis, you can estimate what price they may gain in the future and discount them to the current market conditions. Only on this basis will you be able to determine their inherent value. If you’re a stakeholder with a certain amount of shares, you will have the right of decision-making power, of course depending on how big a percentage of shares you have the right for.
</li> </ul>
</PlainText>
<div className="ImageInsideContent">
    <img className="DiagramImg" src={contentfive} alt="ThirdArticle" />
</div>
<SubHeading>Conclusion</SubHeading>
<PlainText>
As we’ve noticed, many crypto projects with enormous potential, good marketing, and colossal value as we thought don’t exist anymore. Everyone watched how Terra and Luna fell; who knows that it happened? Or why do tokens grow the value and then can decrease their value many times over?
<br/><br/>
Blockchain technology is still a new concept and perspective, and we can see how it changes yearly. What will happen in two years? What will the trends be then? We will find out. Indeed, many things we witness are unpredictable, and only with time can we draw certain conclusions.
</PlainText>
<div className="ButtonBrowseAllArticles">
    <Link to="/Blog" className="abutton">Browse All Articles</Link>
</div>

</main>
<Footer/>
</Card>

    );
};
export default FiveArticle;