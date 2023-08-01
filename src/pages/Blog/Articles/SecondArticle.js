import React from "react";
import './Article.css';
import Footer from "../../../UI/Footer";
import Card from "../../../UI/Card";
import twoimg from "../../../image/Blog/2.jpg"
import DiagramA2 from "../../../image/Blog/DiagramA2.png"
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


const SecondArticle = () => {

    return (
<Card>
<main className="ArticleContainer">
    <MainHeader>Inter-Blockchain Communication</MainHeader>
<div className="DivImgArticle">
<img className="ImgArticle" src={twoimg} alt="FirstArticle"/>
</div>
<SubHeading>Internet of blockchains - IBC protocol</SubHeading>
<PlainText>
Blockchain is a network of chains operating in parallel, completely independent of each 
other. There are at least several dozen such chains. As long as transactions are carried 
out within a given chain, the matter is relatively easy to control. However, when there is 
a need to carry out transactions that touch more than one blockchain - everything starts 
to get complicated. This is where IBC or Inter Blockchain Communication protocol comes 
into the game.
</PlainText>
<SubHeading>What is IBC?</SubHeading>
<PlainText>
Following the definition from the project website: “IBC is an interoperability protocol for communicating arbitrary data between arbitrary state machines.” What does that mean? It means that IBC was designed to securely process transactions on two chains without need to involve a third party.
</PlainText>
<SubHeading>What are alternatives?</SubHeading>
<PlainText>
IBC is a pretty new protocol (designed in 2019), but the problem of establishing transactional communication between blockchain is very common and not new. So how did the world manage to solve interoperability between chains before IBC? The main way developers managed to overcome this problem was bridging the networks. It allowed the exchange of assets (like NFT or ERC-20 based tokens) between networks. 
<br/><br/>
There are at least a few options that exists on the market and try to address this problem:
<blockquote style={{lineHeight:"2", marginBottom:80}}>
<ul><li>Cross-chain bridges</li></ul>
<ul><li>XCMP - Polkadot version of cross-chain communication</li></ul>
</blockquote>
</PlainText>
<SubHeading>What problems can IBC solve?</SubHeading>
<PlainText>
More than 1.5M transactions on 25 blockchain networks are executed every month using Inter Blockchain Communication protocol. IBC is an open source interoperability protocol designed by Cosmos for exchanging digital assets (tokens, interchain accounts, oracle data) between chains without the need of third party solutions like dedicated bridges.
<br/><br/>
Compared to third party bridges, IBC brings several improvements in different areas:
<br/><br/>
<blockquote>
<ul><li>performance/speed of transactions</li></ul>
<ul><li>no need of trust to third parties</li></ul>
<ul><li>lower costs</li></ul>
</blockquote>
</PlainText>
<SubHeading>Performance</SubHeading>
<PlainText>
One of the biggest problems IBC solves is the speed of transactions. IBC protocol is faster than a cross-chain bridge because it eliminates the need for a third-party intermediary in order to transfer data or assets between two different blockchains. Cross-chain bridges, on the other hand, rely on a third-party service that must process the data or assets before they are transferred to the other blockchain, which can create delays.    
</PlainText>
<SubHeading>Security (lack of third party)</SubHeading>
<PlainText>
Protocol brings data exchange privacy to a higher level by ensuring that data is kept confidential and secured. They also make sure that only authorized parties can access the data.
<br/> <br/>
To make it more juicy: lack of third parties (which usually is based on centralized solutions) means that there is no single point of failure, making this type of solution much harder for hackers to attack and exploit the system. 
<br/> <br/>
The architecture of IBC (transport layer & application layer) allows to take control over process building and sharing datagrams between parties. The application layer is responsible for providing security services like authentication, authorization and auditing of data. Additionally there is still a possibility to extend the security layer with custom solutions like encryption.     
</PlainText>
<SubHeading>Lower costs</SubHeading>
<PlainText>When considering high volumes of data transferred between chains, costs of transactions become a crucial aspect. IBC allows to decrease costs of transaction fees as the need to include additional networks into the process. These aspects of IBC create opportunities for creating high horizontal scaling dAps without the need to create complex off-chain and on-chain solutions. 
</PlainText>
<SubHeading>How does IBC work?</SubHeading>
<PlainText>
The base of IBC protocol are light clients and relayers. During communication both parties (Chains) use light customers and relayers, one chain without having to use a trusted third party can reach a consensus state of another chain. Both sides do not send messages directly, once one chain changes his state by creating a data pocket permissionless off-ledger relayers process scanning this state and transferring data to the other chain. Relayers are off-chain processes responsible for executing data on opposite chains by using one or more channels of communication. 
<br/><br/>
Relayers use light clients of chains for verifications of incoming messages. Light clients are algorithms responsible for tracking and verifying the consensus state of other blockchains against the client's consensus state. Examples of light clients are Tendermint or Solo Machine.
<br/><br/>
IBC is designed up to two layers - the transport layer (TAO) and the application layer. The transport layer implements infrastructure mechanisms for secured connections and transferred data authentication. The application layer is responsible for packaging and interpretation of data, all is opaque to the protocol. Architecture of IBC layers is similar to bottom-up TCP/IP internet protocol. It enables cross-chain communication by defining a set of requirements and functions used by protocol.
<br/><br/><br/>
</PlainText>
<div className="ImageInsideContent">
<img className="DiagramImg" src={DiagramA2} alt="diagram"/>
<br/><br/><br/>
</div>
<PlainText>
Let me explain the picture above based on a real example - let’s transfer 1 ETH from the Ethereum Mainnet to Cosmos. In this scenario our Mainnet is “Client APP A” and Cosmos is “Client APP B”:
<blockquote>
    <span style={{color:'red',fontWeight:'bold'}}>1.  </span>Client app A is locking asset A in the network
    <br/><br/>
    <span style={{color:'red',fontWeight:'bold'}}>2.  </span>Relayer 1 is scanning CoreIBC A network for changes in state - once detected it locks the asset read data and sends it to Core IBC B on a different network
    <br/><br/>
    <span style={{color:'red',fontWeight:'bold'}}>3.  </span>Core IBC B is sending data to Client APP B and the asset is minted on the second network
    <br/><br/>
    <span style={{color:'red',fontWeight:'bold'}}>4.  </span>After successful minting acknowledgement data is set and Relayer 2 is sending this data to CORE IBC A that informs about successful minting on second network
    <br/><br/>
</blockquote>
Assets minted in the second network can be sent back to the first network - it will execute unlocking of locked assets. Importantly IBC is not sending tokens itself - just sending value. On the second network a new instance of the token is minted based on value of the asset from the first network 
</PlainText>
<SubHeading>Summary</SubHeading>
<PlainText></PlainText>
<div className="ButtonBrowseAllArticles">
    <Link to="/Blog" className="abutton">Browse All Articles</Link>
</div>
</main>
<Footer />
</Card>

    );
};
export default SecondArticle;