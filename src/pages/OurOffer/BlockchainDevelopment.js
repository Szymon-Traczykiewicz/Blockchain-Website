import React, { useEffect, useState } from 'react';
import "./BlockchainConsulting.css";
import Card from "../../UI/Card";
import { BackToOffer } from "./BackToOffer";
import Footer from "../../UI/Footer";
import axios from "axios";
import { API_URL } from "../../const";


const ButtonLearnMore = (props) => {
    return (<div className="ButtonLearnMoreBC"> <a href={props.title} className="aButtonLernMoreBC">Learn more ›<div style={{ fontSize: 20, marginLeft: 11 }} ></div></a> </div>);
};

const MainHeader = (props) => {
    return (<h1 className="MainHeader"> {props.children} </h1>);
};
const SubHeader = (props) => {
    return (<div style={{ display: 'flex' }}> <h3 className="SubHeader">{props.children} </h3></div>);
};
const HeaderTile = (props) => {
    return (<div style={{ display: 'flex' }}> <h4 className="HederTile">{props.children} </h4></div>);
};

const BookFreeConsultation = (props) => {
    return <div style={{ display: 'flex' }}>
        <a className="aBookFreeConsultation" href={props.link} >{props.title} </a>
    </div>
};
const ContactUs = (props) => {
return <div style={{display:'flex'}}>
    <a className="ButtonContactUs" href={props.link} >{props.title} </a>
</div>
};

const BlockchainDevelopment = () => {

    const [state, setState] = useState({
        headerBD: '',
        descriptBD: '',
        imgBD: '',
        subHeadingBD: '',
        headingTileOne: '',
        headingTileTwo: '',
        headingTileThree: '',
        headingTileFour: '',
        headingTileFive: '',
        headingTileSix: '',
        headingTileSeven: '',
        headingTileContact: '',
        imgBubbleBD: '',
        descriptTileOne: '',
        descriptTileTwo: '',
        descriptTileThree: '',
        descriptTileFour: '',
        descriptTileFive: '',
        descriptTileSix: '',
        descriptTileSeven: '',

    })

    useEffect(() => {
        const controller = new AbortController();
        axios
.get('/api/blockchain-developments?populate=*', {
    signal: controller.signal,
})
.then(({ data: response }) => {
    const {
        DescriptBD, HeaderBD,
        SubHeadingBD,
        HeadingTileOne,
        HeadingTileTwo,
        HeadingTileThree,
        HeadingTileFour,
        HeadingTileFive,
        HeadingTileSix,
        HeadingTileSeven,
        HeadingTileContact,
        DescriptTileOne,
        DescriptTileTwo,
        DescriptTileThree,
        DescriptTileFour,
        DescriptTileFive,
        DescriptTileSix,
        DescriptTileSeven,
        ImgBD: { data: ImgBDData },
        ImgBubbleBD: { data: ImgBubbleBDData },
    } = response?.data?.[0]?.attributes || {};
    setState({
        headerBD: HeaderBD || '',
        descriptBD: DescriptBD || '',
        subHeadingBD: SubHeadingBD || '',
        headingTileOne: HeadingTileOne || '',
        headingTileTwo: HeadingTileTwo || '',
        headingTileThree: HeadingTileThree || '',
        headingTileFour: HeadingTileFour || '',
        headingTileFive: HeadingTileFive || '',
        headingTileSix: HeadingTileSix || '',
        headingTileSeven: HeadingTileSeven || '',
        headingTileContact: HeadingTileContact || '',
        descriptTileOne: DescriptTileOne || '',
        descriptTileTwo: DescriptTileTwo || '',
        descriptTileThree: DescriptTileThree || '',
        descriptTileFour: DescriptTileFour || '',
        descriptTileFive: DescriptTileFive || '',
        descriptTileSix: DescriptTileSix || '',
        descriptTileSeven: DescriptTileSeven || '',
        imgBD: ImgBDData?.[0]?.attributes?.url || "",
        imgBubbleBD: ImgBubbleBDData?.[0]?.attributes?.url || "",


    });
})
.catch(console.error);

        return () => controller.abort();
    }, []);


return(

    <Card className="Chapter">
    <main>

        <section className="UpContainer" >
<div className="BackToOffer1"> <BackToOffer /> </div>
<div className="TwoDivs">
    <div className="jarOne">
    <header>
  <MainHeader className="SubHeader">{state.headerBD}</MainHeader>
    </header>
<article className="DescriptionHeader">
<p className="TextDescriptionHeder">
{state.descriptBD}</p>
</article>
<div className="BookFreeConsultationDiv">

<BookFreeConsultation title='Book Free Consultation'/>      
</div>
    </div>
    <div className="jarTwo">
        <img className="ImgRight" src={API_URL + state.imgBD} alt="BlockchainDevelopment"/>
    </div>
</div>

        </section>
        <header>
    <SubHeader>{state.subHeadingBD}</SubHeader>
        </header>
<div className="ContainerBC">

<section className="item">
        <header>
             <HeaderTile>{state.headingTileOne}</HeaderTile>
        </header>
        <article>
<p className="TextTile">{state.descriptTileOne}</p>
        </article>
<ButtonLearnMore/>
</section>
<section className="item">
    <header>
             <HeaderTile>{state.headingTileTwo}</HeaderTile>
    </header>
    <article>
<p className="TextTile">{state.descriptTileTwo}</p>
    </article>
<ButtonLearnMore/>
</section>
<section className="item">
<header>
    <HeaderTile>{state.headingTileThree}</HeaderTile>
</header>
<article>
<p className="TextTile">{state.descriptTileThree}</p>
</article>
<ButtonLearnMore/>
</section>
<section className="item">
<header>
    <HeaderTile>{state.headingTileFour}</HeaderTile>
</header>
<article>
<p className="TextTile">{state.descriptTileFour}</p>
</article>
<ButtonLearnMore/>
</section>
<section className="item">
<header>
    <HeaderTile>{state.headingTileFive}</HeaderTile>
</header>
<article>
<p className="TextTile">{state.descriptTileFive}</p>
</article>
<ButtonLearnMore/>
</section>
<section className="item">
<header>
     <HeaderTile>{state.headingTileSix}</HeaderTile>
</header>
<article>
<p className="TextTile">{state.descriptTileSix}</p>
</article>
<ButtonLearnMore/>
</section>
<section className="item">
<header>
        <HeaderTile>{state.headingTileSeven}</HeaderTile>
</header>
<article>
<p className="TextTile">{state.descriptTileSeven}</p>
</article>
<ButtonLearnMore/>
</section>
<div className="lastitem">
    <section className="TileContactUs">
            <div className="divheadertile">
                <div className="divQuestion" >{state.headingTileContact}</div>
            </div>
            <div className="DivContactUs">
                <ContactUs title="Contact Us" />
                <img src={API_URL + state.imgBubbleBD} alt="BubbleContactUs"
                    className="ImgBubbleContactUs"
                />
            </div>
    </section>
    </div>

</div>
    </main>
        <footer>
            <Footer />
        </footer>
    </Card>
);
};
export default BlockchainDevelopment;