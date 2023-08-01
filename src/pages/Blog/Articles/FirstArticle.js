import React from "react";
import './Article.css';
import Footer from "../../../UI/Footer";

import oneimg from "../../../image/Blog/1.png";
import Diagram from "../../../image/Blog/Diagram.gif";
import { Link } from "react-router-dom";

const MainHeader = (props) => {
    return (<div className="MainHeaderArticle"> {props.children} </div>);
};
const SubHeading = (props) => {
    return (<div className="SubHeading"> {props.children} </div>);
};
const ItalicText = (props) => {
    return (<div className="ItalicText"> {props.children} </div>);
};
const PlainText = (props) => {
    return (<div className="PlainText"> {props.children} </div>);
};


const FirstArticle = () => {

    return (

<main className="ArticleContainer">
<MainHeader >pBFT: the most popular consensus algorithm for private blockchain explained</MainHeader>

<img  className="ImgArticle" src={oneimg} alt="FirstArticle"/>

<ItalicText >
When we think of blockchain programming, we usually understand it the same way: building smart contracts - programs that run on the blockchain network. But there is another (deeper) level to understand - the consensus algorithm that powers and ensures the security and stability of the entire network. No, you can't see it :) You have to trust me, it's there, and it always works for you. Let me introduce you to the algorithm itself and explain what problem it solves.
</ItalicText>
<SubHeading >Byzantine Generals problem</SubHeading>
<PlainText >
The Byzantine Generals Problem is a computer science problem that presents a challenge in designing distributed systems. It is based on a thought experiment in which multiple generals of the Byzantine army, each commanding their own division, must coordinate to successfully attack or defend a city. The challenge lies in the fact that the generals need to be sure that the others will carry out their orders, as they may be traitors, and so must find a way to reach a consensus without being able to communicate directly with one another.
<br/><br/>
Byzantine Generals have to decide whether to attack or retreat. The decision must be unanimous, but communication between the generals is unreliable. Some generals may be traitors who will try to prevent the other generals from making the correct decision. The problem can be solved in several ways, one is Byzantine Fault Tolerance algorithm.
<br/><br/>
Do you see the analogy to the blockchain already? In the blockchain networks, we face the same problem -<b style={{color:'black'}}>we have to undoubtedly confirm the same transaction the same transaction </b>without being able to communicate between all nodes, which “takes decisions”
</PlainText>
<SubHeading>pBFT: the algorithm that powers blockchains</SubHeading>
<PlainText>Practical Byzantine Fault Tolerance algorithm (pBFT) was introduced in late 90’s by Barbara Liskov and Biguel Castro. pBTF is an efficient solution for asynchronous systems to solve problems related to Byzantine Fault Tolerance.  
<br/><br/>
pBTF consensus mechanisms try to ensure a practical Byzantine state machine for tolerating Byzantine nodes or failed nodes. The algorithm works by having each node in the network verify its own data, as well as the data of other nodes. 
<br/><br/>
The nodes then agree on the correct data; if they don’t agree, they will check the data again. This process is repeated until all nodes agree on the same data. In this way, the algorithm ensures that all nodes in the network are working together to reach a consensus and that the data is correct and up-to-date.
<br/><br/>
All nodes are assembled in sequence, and one of the nodes acts as a leader. The leader receives requests from clients, his role is to be a mediator between client and the rest of the nodes in a network called backup nodes. Leader nodes can be selected in a round-robin manner from honest backup nodes when there is suspicion that an old leader is not available. Selecting an honest node is based on the ability to communicate between each node in the network and verifying its own data.One of the most important assumptions of the pBTF algorithm is that the number of invalid nodes in the network cannot equal 1/3 of all nodes.
</PlainText>
<SubHeading>How does it work?</SubHeading>
<PlainText>
 pBTF consists of 3 main parts:
<blockquote style={{lineHeight:"2", marginBottom:80}}>
<span style={{color:'red', fontWeight:'bold' }}>1. </span>pre-prepare phase:  the primary node broadcasts a message containing the proposed transaction to all other nodes in the system. The primary node also signs the message with its secret key. 
<br/> <br/>
<span style={{color:'red', fontWeight:'bold'}}>2.  </span>prepare phase:  the other nodes in the system verify the message using the primary node's signature and then sign the message with their own secret keys. This ensures that all nodes in the system have agreed on the proposed transaction. Node is considered as prepared only if received pre-prepared message from leader and also 2f+1 number of commit messages from other nodes (f is number of possible faulty nodes)
<br/> <br/>

<span style={{color:'red', fontWeight:'bold'}}>3.  </span>commit phase: all nodes in the system broadcast the signed message to all other nodes This ensures that all nodes in the system have agreed on the proposed transaction, and that the transaction can be considered valid. pBFT algorithm explained as an animated gif:
</blockquote>
</PlainText>
<PlainText>pBFT algorithm explained as an animated gif:<br/><br/><br/></PlainText>
<div className="ImageInsideContent">
<img className="DiagramImg" src={Diagram} alt="diagram"/>
</div>
<SubHeading>Benefits</SubHeading>
<PlainText>
Compared to other consensus mechanisms pBFT does not require high mathematical computations like PoW so it is highly efficient in terms of energy consumptions. pBFT based consensus algorithms can be used for time critical systems since it does not need to follow multiple confirmed by each node, also the reward model is equitable because all nodes are taking part in verification.
</PlainText>
<SubHeading>Summary</SubHeading>
<PlainText>
PBFT is a powerful but complicated consensus algorithm. Fortunately, you don’t have to understand the details of the implementations to be able to use it :) It’s used by Hyperledger Fabric, Zilliqa and Tendermint in distributed consensus and voting to ensure that malicious actors cannot manipulate the data, while its improved efficiency ensures that the network can reach consensus quickly and efficiently. 
<br/><br/>
Personally, I would love to use it in the voting systems
</PlainText>
<div className="ButtonBrowseAllArticles">
    <Link to="/Blog" className="abutton">Browse All Articles</Link>
</div>
<Footer />
</main>


    );
};
export default FirstArticle;