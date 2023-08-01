import React from "react";
import './Article.css';
import Footer from "../../../UI/Footer";
import Card from "../../../UI/Card";
import threeimg from "../../../image/Blog/3.png";
import DiagramA3 from "../../../image/Blog/DiagramA3.png";
import DiagramA3line from "../../../image/Blog/DiagramA3-line.png";
import DiagramA3flow from "../../../image/Blog/DiagramA3flow.png";
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


const ThirdArticle = () => {

    return (
<Card>
<main className="ArticleContainer">
<MainHeader>Cargo Protocol - Backstage from a developer's perspective</MainHeader>
<div>
<img className="ImgArticle" src={threeimg} alt="ThirdArticle"/>
</div>
<SubHeading>Introduction</SubHeading>
<PlainText>
Cargo Protocol was conceived as a project that would manage liquidity on-chain and aggregate strategies. Given the complexity, the MVP was an auto-compounder that served as an asset management on-chain for LP tokens where the rewards from pools would be automatically reinvested to achieve the highest possible compound interest rate. There was also technical research into Uniswap v3 rebalancer strategies and interface development.
<br/> <br/>
From the user's perspective, they choose which token they want to deposit, and Cargo finds the best possible strategy with the highest compounded interest rate. In the background, smart contracts swap users' funds into a matching pair of tokens and deposit that pair into the pool as a liquidity provider, minting LP tokens in return. The LP tokens are stored in the smart contract, and the user receives tokens representing their share in the pool. It is non-custodial in design meaning the user can safely leave the deposit to be managed passively. Meanwhile, bots collect accumulated rewards, swap them, and reinvest them into the most profitable pools. The main goal was to increase the return on investment which was proven successful in the shift from linear to logarithmic returns.
<br/> <br/>
</PlainText>
<div className="ImageInsideContent">
<img className="DiagramImg" src={DiagramA3} alt="diagram"/>
<br/><br/><br/>
</div>
<PlainText>
The second phase of the project integrated with Moola (a fork of AAVEv2), a lending protocol that gives access to yield and credit. Using Moola, users get more options for their deposits. For example, over-collateralised loans can be taken out and repaid with collect rewards from the auto-compounder. There is a buffer for users to select that collects and redistributes rewards depending on a risk profile.
<br/> <br/>
In May 2022, <u>there was a strategic shift in the project</u>, with a renewed focus on stablecoins and real-time settlement from mobile payments. This embedded Cargo deeper into Uniswap V3 which launched on the Celo blockchain in August 2022. Previous work on aggregating strategies on Uniswap V3 was rescoped to include the LP management that ultimately launched as a rebalancer to achieve better capital efficiency for deposits and mitigate impermanent loss.    
</PlainText>
<SubHeading>Uniswap </SubHeading>
<PlainText>Uniswap is a leading DEX protocol that initially ran on the Ethereum blockchain, the world's second-largest cryptocurrency project by market capitalisation, is compatible with ERC-20 tokens and supports numerous infrastructure projects.
<br/> <br/>
Nowadays, the newest version of Uniswap (V3) is not only available on Ethereum but also on many significant chains such as Polygon, Optimism, Arbitrum, and Celo. Most competitor DEXs are using forks of Uniswap V2.
<br/> <br/>
Currently, Uniswap v3 has roughly ~5.5x more liquidity than Binance, according to published research: <a href="https://uniswap.org/blog/uniswap-v3-dominance" target="_blank"rel="noreferrer">https://uniswap.org/blog/uniswap-v3-dominance</a></PlainText>
<SubHeading>Uniswap v2 vs v3</SubHeading>
<PlainText>
Uniswap V3 was an evolutionary step forward for DEXs with greater incentivisation for liquidity providers and further reduced price slippage for traders. This is all due to concentrated liquidity pools and improved autorouting.
<br/> <br/>
Unlike Uniswap V2, where each liquidity provider receives a certain amount of LP tokens according to their proportion of total liquidity added, v3 positions are represented by NFTs. This causes the user’s representation of liquidity to be non-fungible. Previous versions of Uniswap distributed liquidity along a price curve ranging from 0 to infinity. The disadvantage of this approach is the majority of liquidity is never used. This makes a large proportion of provided liquidity idle.
<br/> <br/>
Now, liquidity providers can concentrate and deploy deposits within whichever desired price range. Each position has a customisable set of parameters that determines its value and rewards bringing better capital efficiency.  
</PlainText>
<SubHeading>Integration with Uniswap: Cargo + Celo + GUNI + Uniswap v3</SubHeading>
<PlainText>
The third phase of development rescoped strategies so that these could be implemented by 3rd parties. We also created an automated, low-gas cost tool that manages, automates, and optimises concentrated liquidity and switched out Ubeswap to use the Nonfungible Position Manager from Uniswap V3. This solution required too much gas when creating and closing positions due to each action's NFT burn & creation process. However, this was resolved by using the G-Uni, which enabled the creation of managed position pools on Uniswap v3. G-Uni pools bypass the minting process of NFTs by directly depositing liquidity into Uniswap pools and generating a 32-bit position ID representing the position. This solution significantly optimised Cargo and reduced gas consumption. By adjusting the reinvestment frequency and the spread of positions, we can now create different management strategies for users. This is also the reason why Cargo is a non-custodial middleware product.
<br/> <br/>
The strategies can also protect users from reinvesting earned fees when the gas cost of the calling function is higher than the reward.
<br/> <br/>
</PlainText>
<div className="ImageInsideContent">
<img className="DiagramImg" src={DiagramA3line} alt="diagram"/>
<br/><br/> 

<br/> <br/> <br/>
</div>
<div className="ImageInsideContent">
<img className="DiagramImg" src={DiagramA3flow} alt="diagram"/>
<br/><br/><br/><br/>
</div>
<PlainText>
The diagram shows the entire flow of Cargo.
<br/><br/>
Currently in development are seamless stop-loss limits without needing to decide whether to go long or short on an asset. By depositing into Uniswap via Cargo, tokens are passed to the managed G-Uni pools which provides concentrated liquidity through the Cargo Service Contact. This contract not only manages deposits and withdrawals, but also the rebalancing of the position and reinvests trading fees. Cargo is secured by a Multisignature Contract which only allows changes if a minimum number of wallets agree and sign the transaction.
</PlainText>
<SubHeading>Summary</SubHeading>
<PlainText>
The most challenging, yet fun part was securing Cargo. Especially in the blockchain world, security is critical because even while blockchains produce tamper-proof ledgers, smart contract code can have vulnerabilities. Code was reviewed and approved by cLabs.
<br/><br/>
Building this piece of software was an exciting journey, but we haven't done it alone, so we would like to say "thank you guys" to the support team from Uniswap and Celo.
<br/><br/>
The project's development was a fascinating adventure for us and we are currently scoping Phase 4 with Cargo Labs. We had the opportunity to leverage our knowledge of different protocols and create unique opportunities for users by combining them all into one simple product. Have we made some mistakes? For sure! But without making mistakes you can not learn, especially in such a rapidly evolving industry as DeFi. What is important is not repeating mistakes in the future! Building on blockchains and especially DeFi solutions are often R&D work, so qualifying different ideas is a natural part of the development process. 
<br/><br/>
Finally, we have built a solution that makes us proud of our work. Of course, they can and will be developed further ... but this is a story for a different article.‍
</PlainText>
<div className="ButtonBrowseAllArticles">
    <Link to="/Blog" className="abutton">Browse All Articles</Link>
</div>
</main>
<Footer />
</Card>

    );
};
export default ThirdArticle;