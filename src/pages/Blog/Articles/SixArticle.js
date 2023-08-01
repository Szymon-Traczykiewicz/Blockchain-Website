import React from "react";
import './Article.css';
import Card from "../../../UI/Card";
import Footer from "../../../UI/Footer";
import imgsix from '../../../image/Blog/6.gif';
import DiagramA6 from "../../../image/Blog/DiagramA6.png";
import { Link } from "react-router-dom";

const SixArticle = () => {

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
    return (
        

<Card>

<main className="ArticleContainer">
<MainHeader>⚡Flashloans — Borrow millions of dollars without collateral on Blockchain⚡</MainHeader>
<div>
    <img className="ImgArticle" src={imgsix} alt="SixArticle" />
</div>
<PlainText>
Imagine that you can borrow any available amount of an asset (even millions of dollars) without giving any collateral, but only if you can prove that you will pay it back in the same transaction.
<br/><br/>
Is it possible? Maybe you think that’s crazy but with blockchain technology, yes, it’s possible!
<br/><br/>
And that, ladies and gentlemen, is a <b>Flashloan</b> ⚡
<br/><br/>
The emergence of Blockchain technology has allowed for a lot of innovation in the finance world.
<br/><br/>
The Decentralised Finance (<u>DEFI</u>) protocols have led to the rise of a new kind of lending and borrowing mechanism, that is not similar to traditional loans taken from brick-and-mortar companies. This is because the traditional banking loan requires a number of documents that need to be provided, including a formal ID and proof of income to take out a loan which is then repaid after years. In case of a flash loan, none of this is necessary due to the lack of collateral.
<br/><br/>
An uncollateralized instantaneous loan aka Flash loan is only possible due to Smart Contracts.
A smart contract is a program on the blockchain which ensures that a certain function can only succeed once all conditions are met (all or nothing principle).
<br/><br/>
For flash loans, the condition is that the borrower will need to repay the full amount of the loan plus interest to the lender before the transaction is completed. This is possible because flash loans are <b>one blocktime loans</b>. As such, no collateral is needed, because if the borrowed money including interest is not given back before the transaction is completed, the entire loan (transaction) is immediately reversed.
<br/><br/>
We will discuss block building on blockchain and how transactions work in another article.
</PlainText>
<SubHeading>Flashloans for arbitrage opportunities. 💱 </SubHeading>
<PlainText>
The most common method of using flash loans for profit is through arbitrage. This is an operation that uses the price difference of the same asset in two different markets. Imagine that you find a token X on DEX A listed for $1, and the price of the same token on DEX B is $1.10.
<br/><br/>
You could now use AAVE which is an open-source, decentralised, non-custodial protocol on Ethereum that allows users to do flashloans to buy up the cheaper tokens on DEX A, then sell them on DEX B at a profit. Once the AAVE Flashloan is paid back at the end of the transaction, you can keep the extra sum for yourself.    
</PlainText>
<div className="ImageInsideContent" >
<img className="DiagramImg" src={DiagramA6} alt="ImgContent" />
<br/><br/><br/><br/>
</div>
<SubHeading>Flashloans attacks. 🥷</SubHeading>
<PlainText>Flashloans are not only used for arbitrage trading, some of them can also exploit structural vulnerabilities in Defi platforms. As an example a trade was executed in the night from 14.February — 15.February 2020 (not a great end of Valentine’s Day), which did exploit a bug in bZx smart contract implementation.
The exploiter profited ~$350k from a single transaction due to a clever arbitrage execution.
<a className="a6" href="https://etherscan.io/tx/0xb5c8bd9430b6cc87a0e2fe110ece6bf527fa4f170a4bc8cd032f768fc5219838" target="_blank" rel="noreferrer">Transaction on Etherscan</a>
<br/><br/>
<a href="https://peckshield.medium.com/bzx-hack-full-disclosure-with-detailed-profit-analysis-e6b1fa9b18fc#579f" target="_blank" rel="noreferrer" className="a6" >Here is</a> a full analysis of the attack by Peckshield.</PlainText>
<SubHeading>Is any risk involved in a Flash Loan?</SubHeading>
<PlainText>
Flash loans are risk-free because no money is ever given away in the lender’s perspective.
<br/><br/>
If all of the smart contract criteria are met, both the borrower and the lender will benefit from the transaction. If one of the steps doesn’t succeed the transaction fails and the money is simply handed back to the lender and the borrower only pays the gas fee.
<br/><br/>
The borrower has no outstanding debts, while the lender still has their money.
<br/><br/>
Now that you understand the basics of flash loans, what is your opinion on them?
<br/><br/>
</PlainText>
<ItalicText>
The Author of the article - <a href="https://medium.com/@januszgradonski" target="_blank" rel="noreferrer" className="a6" >Janusz Gradoński</a>, <Link to="/" className="a6" target="_blank">NETI</Link>
</ItalicText>
<div className="ButtonBrowseAllArticles">
    <Link to="/Blog" className="abutton">Browse All Articles</Link>
</div>


</main>
<Footer/>

</Card>


    );};
    export default SixArticle;