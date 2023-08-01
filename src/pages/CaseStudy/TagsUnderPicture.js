import React from "react";
import './CaseStudy.css';
import Card from "../../UI/Card";

import Tradlo from "./Tradlo";



const TagsUnderPicture = () => {
return (


<Card>

<div style={{ marginTop: 90, display: 'flex', flexDirection: 'row' }}>
    <div style={{ marginRight: 320 }}> <span className="Tags"> Client </span>
        <Tradlo />
    </div>
    <div style={{ display: 'flex', flexDirection: 'column' }}>
        <span className="Tags"> Industry </span>
        <span className="E_commerce"> E-commerce </span>
    </div>
</div>

<div style={{ marginTop: 45, display: 'flex', flexDirection: 'row' }}>
    <div className="Tags" style={{ marginRight: 307, marginBottom:50 }}>Technologies
        <div style={{ marginTop: 16, display: 'flex', flexDirection: 'row', width: 306, justifyContent: 'space-between' }} >
            <div className="Technologies">Node.js</div>
            <div className="Technologies">React.js</div>
            <div className="Technologies">JavaScript</div>

        </div>

    </div>
    <div className="Tags">Tags
        <div style={{
            marginTop: 16, display: 'flex', flexDirection: 'row',
            flexWrap: 'wrap', width: 384, height: 90, justifyContent: 'space-between'
        }}>
            <div className="Technologies">ecommerce</div>
            <div className="Technologies">online</div>
            <div className="Technologies">store</div>
            <div className="Technologies">e-shop</div>
            <div style={{ marginTop: 10, }} className="Technologies">marketing</div>

        </div>
    </div>
</div>





</Card>



);
};
export default TagsUnderPicture;
