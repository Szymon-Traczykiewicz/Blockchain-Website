import React from 'react';
import Card from "../../UI/Card";
import InitialPart from "../MainViewSection1/InitialPart";
import OurTechnologies from "../OurTechnologies/OurTechnologies";
import OurOffer from "../OurOffer/OurOffer";
import AboutNeti  from "../AboutNeti/AboutNeti";
import Footer from "../../UI/Footer";
import VoiceofOurHappyCostumers from "../VoiceofOurHappyCostumers/VoiceofOurHappyCostumers";



const Home = () => {


    return (
<Card>

<InitialPart/>
 <OurOffer/> 
<OurTechnologies/>
<VoiceofOurHappyCostumers/>
<AboutNeti/>
<Footer/> 
</Card>
            

    );
};
export default Home;