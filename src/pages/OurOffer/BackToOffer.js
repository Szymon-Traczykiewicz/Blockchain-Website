import React from "react";
import "./BackToOffer.css";
import Card from "../../UI/Card";
import ArrowBack from '../../image/OurServices/ArrowBack.png';
import { Link } from "react-router-dom";



export function BackToOffer() {

    return (
    
        <Card>


<div className="BackToOffer">
<img src={ArrowBack} alt="BackToOffer" className="ImgBackToOffer"/>
<Link to='/OurOffer'>
 <text className="TextBackToOffer" >Back to offer</text>
</Link>
</div>
        </Card>

    );
};