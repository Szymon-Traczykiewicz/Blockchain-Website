import React from "react";
import './Article.css';
import Card from "../../../UI/Card";
import Footer from "../../../UI/Footer";
import imgnine from '../../../image/Blog/9.png';
import A9Content from '../../../image/Blog/A9Content.jpeg';
import { Link } from "react-router-dom";


const NineArticle = () => {

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
    <MainHeader>Blockchain Platforms 2022</MainHeader>
    <div>
    <img className="ImgArticle"  src={imgnine} alt="SevenArticle" />
    </div>
<PlainText>
According to the research of Gartner company, <b>blockchain technology</b> will almost certainly affect the business of most IT giants <b>in the next 5 years</b>. And according to the calculations of the famous consulting company Grand View Research, based in Silicon Valley, by 2028, the global blockchain technology market will reach 394.60 billion US dollars. It’s worth taking a look at what skills are required to jump into this world as a developer. As <Link className="a6" to="/" target="_blank" rel="noreferrer" >Neti</Link> team below we are sharing our experience and thoughts in this area.
</PlainText>
<SubHeading>In what areas are blockchain developers most in demand?</SubHeading>
<PlainText>
Blockchain technology - especially <Link className="a6" to="/Blog/four" target="_blank" rel="noreferrer" >DeFi</Link> - is strongly associated with the financial industry. But in fact, it can be used in any industry e.g. retail and logistics, leasing, internet of things, real estate, insurance and this are not a complete list of areas in which chains of block transactions will solve many problems. There is also an example of the American state of Utah, which tried blockchain in organizing its municipal elections, which means this technology can contribute to changes in the practice of election campaigns. In all those areas there is a huge shortage of skilled and experienced developers, who can not only write program code, but most of all propose solutions for solving programs and take responsibility for the work and take responsibility for them.
</PlainText>
<br/> 
<ItalicText>***If you have a project from DeFi space and looking for IT partner who will take care of technical part of your project do not hesitate to <a className="a6" href="https://www.neti-soft.com/contact" target="_blank" rel="noreferrer"><u>contact Neti</u></a>.***</ItalicText>
<SubHeading>Where to learn blockchain programming?</SubHeading>
<PlainText>
<ul><li>You can start in a very joyful way — just play the <b><a className="a6" href="https://cryptozombies.io" target="_blank" rel="noreferrer"><u>CryptoZombies</u></a></b> game. It’s an interactive school that teaches you all things technical about blockchains. By playing you will not only spend your time in an interesting and engaging way, but you will also jump into the topics crucial for any blockchain developer.</li></ul>
<ul><li>We encourage you to <b>visit sites like</b>: <b><u><a className="a6" href="https://www.udemy.com" target="_blank" rel="noreferrer">Udemy</a></u></b>, <b><u><a className="a6" href="https://www.pluralsight.com/courses/blockchain-principles-practices?clickid=0-%3A2RjXTLz9ZWNizs-QZNzYOUkGWsjRxVy34UY0&irgwc=1&mpid=1193463&aid=7010a000001xAKZAA2&utm_medium=digital_affiliate&utm_campaign=1193463&utm_source=impactradius" target="_blank" rel="noreferrer">Pluralsight</a></u></b>, <b><u><a className="a6" href="https://www.coursera.org/specializations/blockchain?ranMID=40328&ranEAID=JVFxdTr9V80&ranSiteID=JVFxdTr9V80-lASb4fN6iOdxhBDmhW00.g&siteID=JVFxdTr9V80-lASb4fN6iOdxhBDmhW00.g&utm_content=10&utm_medium=partners&utm_source=linkshare&utm_campaign=JVFxdTr9V80" target="_blank" rel="noreferrer">Coursera</a></u></b>, and <b><u><a className="a6" href="https://101blockchains.com/free-blockchain-course/" target="_blank" rel="noreferrer">101 Blockchains</a></u></b>, one of the specialized blockchain learning platforms.</li></ul>
<ul><li><b>Check out the articles on</b> <b><u><a className="a6" href="https://medium.com" target="_blank" rel="noreferrer">medium.com</a></u></b>. There are lots of articles describing <b><u><a className="a6" href="https://tomterado.medium.com/how-to-learn-solidity-in-30-days-78b02e503d23" target="_blank" rel="noreferrer">language</a></u></b>, <b><u><a className="a6" href="https://medium.com/blockvigil/design-pattern-of-developing-ethereum-applications-on-ethvigil-api-gateway-b56337b0086a" target="_blank" rel="noreferrer">patterns</a></u></b>, antipatterns, traps, and smart solutions for particular problems. There are also very valuable articles describing the problems you want to solve. By using knowledge already available through reading articles you will save hundreds of hours of your time and will have a chance to avoid mistakes that someone else has already made.</li></ul>
<ul><li><b>Read/review the “smart contracts” code available on GitHub</b>. It is a really useful guide with good practices to learn. There are tons of programs written in Solidity running in production in the blockchain. Most of them are open sources to ensure transparency and visibility of the system. There is no better way to understand what to do and what to do not do than looking in verified checked by thousands of developers code.</li></ul>
</PlainText>
<SubHeading>What do you already need to have to become a blockchain developer?</SubHeading>
<PlainText>
<ul><li><b>A crypto wallet</b> (for instance from MetaMask). How to do this? You will find a good manual <b><u><a className="a6" href="https://readwrite.com/how-to-create-a-cryptocurrency-wallet/" target="_blank" rel="noreferrer">here</a></u></b> or <b><u><a className="a6" href="https://medium.com/@CharlesRDalton/crypto-for-beginners-how-to-setup-your-first-wallet-88448c82eef3" target="_blank" rel="noreferrer">here</a></u></b>.</li></ul>
<ul><li><b>The analytical mindset</b>. You will need to be able to predict most of the consequences of your work and solve complex problems.</li></ul>
<ul><li><b>The knowledge of at least 1 programming language</b> (Java, Python, JavaScript, C++, C#).</li></ul>
<ul><li>You will need to know in “which chain” you want to develop (depending on this you may need to learn a different language, for example, Ethereum is written in Solidity).</li></ul>
<ul><li>The understanding of <b><u><a className="a6" href="https://www.softwaretestinghelp.com/smart-contract-development-companies/" target="_blank" rel="noreferrer">smart contract platforms</a></u></b> and how is the best to apply them. The developer should understand the types of smart contracts and how to develop them. Our experience shows that it’s easiest to start with some Ethereum side chain (like Avalanche or Celo), where transaction costs are little, and the Solidity language is in usage.</li></ul>
<ul><li>At a later stage, knowledge in the field of <b>cryptography</b> will also become valuable, which will allow you to better understand how it is all working underneath. Good knowledge about data structures and cryptography like hash functions e.g. SHA256 and KECCAK256 are used in blockchain aside from asynchronous cryptography for generating digital signatures. It is impossible to become a blockchain developer without understanding how these work. Please notice that knowledge in cryptography will also become valuable but on the advanced stage of learning. It will allow you to understand better how it all flows underneath.</li></ul>
<ul><li>The basics of <b>both front-end and back-end</b> development include things like creating interactive graphical user interfaces for Dapps, API handling, request handling, etc.</li></ul>
</PlainText>
<SubHeading>What are some of the hardest challenges?</SubHeading>
<PlainText>
<ul><li>You will need to understand the concept of <b>tokenomics</b> (how the solution you build will work and whose problem it will solve and how?).</li></ul>
<ul><li><b>The mistakes and errors</b> may cost you a lot (remember to spend more time on analytics to avoid the high costs of the exploitation mistakes).</li></ul>
<ul><li>Start loving <b>TDD</b> (test-driven development).</li></ul>
<ul><li>Understand different token’s specifications and their use cases (<b>ERC-20</b>, ERC-721, ERC-1155, etc.). Please notice that ERC-20 is the simplest one.</li></ul>
<br/> <br/>
</PlainText>
<div className="ImageInsideContent" >
<img className="ImgContent" src={A9Content} alt="ImgContent" />
<br/><br/><br/><br/>
</div>
<SubHeading>What tools do you need to be familiar with?</SubHeading>
<PlainText>
    <ul>✅ <b>Hardhat</b> — is a development environment used by most solidity developers in the world. It’s used for smart contracts compiling, testing and deployments. Its unique functionality is built in the development server which allows you to run the tests out of     the box without spending time on configuring external dependencies.</ul>

    <ul>✅ <b>Truffle</b> is another development environment used for testing, deployments, and task automation. In contrast to Hardhat it requires a local blockchain (for instance Ganache) for local testing. Because of this, our developers say it’s less flexible than     Hardhat and also not so commonly used.</ul>

   <ul>✅ <b>Remix</b> (online development environment); you can not only code contracts in it but also compile and simply run/execute them. Best for prototyping, quick testing, firing functions on not verified contracts which we have the code for, no setup needed.</ul>

   <ul>✅ <b>Vscode</b> — most popular IDE for software development with Solidity plugin (works with hardhat as remix alternative).</ul>

   <ul>✅ <b>Ethers</b> — library for interacting with blockchain from the Web application level. It ensures the ability to connect through various providers, call read/write functions, handle wallets, events subscriptions. Moreover, it provides a lot of EVM built-in     constants. It’s small ( just 377 KB), also tree-shakeable, so we can just get the functions we need for our build, instead of the whole package (unlike web3), very well TypeScript compatible.</ul>

   <ul>✅ <b>Web3</b> as an ethers alternative. Practically 100% of our dev team prefer to use ethers, but if you would like to give a try to another library for communication with blockchain from the web application — Web3 is probably the one you are looking for.</ul>

   <ul>✅ <b>Ganache</b> — the application that runs our own blockchain locally for fun/tests.</ul>

   <ul>✅ <b>Brownie</b> is an alternative to Hardhat and Truffle. It offers the same set of functionalities so if you prefer to use Python over JavaScript — it’s probably the tool you have to become familiar with.</ul>

The blockchain industry needs developers. If you want to work in a new field, start learning and be patient and visit <Link className="a6" target="_blank" to="/" rel="noreferrer">Neti</Link> website.
<br/> <br/>
The technology is still considered new but there is enough information and courses on the web to educate. For useful data, you should find the developer community (eg. Discord, Telegram, or usually you can find it on the website of a specific “chain” — they have links to their community).
<br/> <br/>
We keep our fingers crossed and wish You a piece of good luck in Your blockchain technology learning trip.
<br/> <br/>
Could you share with us how you get knowledge about blockchain programming/technology?
</PlainText>
<ItalicText>If you would like to know more, do not hesitate to <b><u><a href="https://www.neti-soft.com/contact" target="_blank" rel="noreferrer" className="a6">contact Neti</a></u></b>.<br/> <br/></ItalicText>
<div className="ButtonBrowseAllArticles">
    <Link to="/Blog" className="abutton">Browse All Articles</Link>
</div>
</main>
<Footer/>
</Card>
    );};
    export default NineArticle;