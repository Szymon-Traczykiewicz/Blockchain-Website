import React from "react";
import './Tradlo.css';
import T_Tradlo from "../../image/CaseStudy/T_R_A_D_L_O/A_Tradlo.png";
import R_Tradlo from "../../image/CaseStudy/T_R_A_D_L_O/R_Tradlo.png";
import A_Tradlo from "../../image/CaseStudy/T_R_A_D_L_O/A_Tradlo.png";
import D_Tradlo from "../../image/CaseStudy/T_R_A_D_L_O/D_Tradlo.png";
import L_Tradlo from "../../image/CaseStudy/T_R_A_D_L_O/L_Tradlo.png";
import O_Tradlo from "../../image/CaseStudy/T_R_A_D_L_O/Arrow_Tradlo.png";
import MakeGreatTrades from "../../image/CaseStudy/T_R_A_D_L_O/MakeGreatTrades.png";


const Tradlo = () =>{
    return(
<div className="CONTAINER_TRADLO">
    <div className="ContainerLetters">
    <img className="SingleLetter" alt="Tradlo" src={T_Tradlo}/>
    <img className="SingleLetter" alt="Tradlo" src={R_Tradlo}/>
    <img className="SingleLetter" alt="Tradlo" src={A_Tradlo}/>
    <img className="SingleLetter" alt="Tradlo" src={D_Tradlo}/>
    <img className="SingleLetter" alt="Tradlo" src={L_Tradlo}/>
    <img className="SingleLetter" alt="Tradlo" src={O_Tradlo}/>
    </div>
    <div className="CaptionImg">
    <img src={MakeGreatTrades} alt="MakeGreatTreades" />
    </div>
</div>
    );
};
export default Tradlo;