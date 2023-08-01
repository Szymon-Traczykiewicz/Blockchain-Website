import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../../const";
import "./BlockchainConsulting.css";

import Card from "../../UI/Card";
import { BackToOffer } from "./BackToOffer";
import Footer from "../../UI/Footer";



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
    return <div style={{ display: 'flex' }}>
        <a className="ButtonContactUs" href={props.link} >{props.title} </a>
    </div>
};

const UxUiDesign = () => {

    const [state, setState] = useState({
        headerUX: '',
        descriptUX: '',
        imgUX: '',
        subHeadingUX: '',
        headingTileOne: '',
        headingTileTwo: '',
        headingTileThree: '',
        headingTileFour: '',
        headingTileFive: '',
        headingTileSix: '',
        headingTileContact: '',
        imgBubbleUX: '',
        descriptTileOne: '',
        descriptTileTwo: '',
        descriptTileThree: '',
        descriptTileFour: '',
        descriptTileFive: '',
        descriptTileSix: '',

    })

    useEffect(() => {
const controller = new AbortController();
axios
    .get('/api/ux-ui-designs?populate=*', {
        signal: controller.signal,
    })
    .then(({ data: response }) => {
        const {
            DescriptUX, HeaderUX,
            SubHeadingUX,
            HeadingTileOne,
            HeadingTileTwo,
            HeadingTileThree,
            HeadingTileFour,
            HeadingTileFive,
            HeadingTileSix,
            HeadingTileContact,
            DescriptTileOne,
            DescriptTileTwo,
            DescriptTileThree,
            DescriptTileFour,
            DescriptTileFive,
            DescriptTileSix,
            ImgUX: { data: ImgUXData },
            ImgBubbleUX: { data: ImgBubbleUXData },
        } = response?.data?.[0]?.attributes || {};
        setState({
        headerUX: HeaderUX || '',
        descriptUX: DescriptUX || '',
        subHeadingUX: SubHeadingUX || '',
        headingTileOne: HeadingTileOne || '',
        headingTileTwo: HeadingTileTwo || '',
        headingTileThree: HeadingTileThree || '',
        headingTileFour: HeadingTileFour || '',
        headingTileFive: HeadingTileFive || '',
        headingTileSix: HeadingTileSix || '',
        headingTileContact: HeadingTileContact || '',
        descriptTileOne: DescriptTileOne || '',
        descriptTileTwo: DescriptTileTwo || '',
        descriptTileThree: DescriptTileThree || '',
        descriptTileFour: DescriptTileFour || '',
        descriptTileFive: DescriptTileFive || '',
        descriptTileSix: DescriptTileSix || '',
        imgUX: ImgUXData?.[0]?.attributes?.url || "",
        imgBubbleUX: ImgBubbleUXData?.[0]?.attributes?.url || "",


        });
    })
            .catch(console.error);

        return () => controller.abort();
    }, []);

return(
<Card className="Chapter">
    <div className="UpContainer" >
    <div className="BackToOffer1"> <BackToOffer/> </div>
    <div className="TwoDivs">
    <div className="jarOne">
    <header>
<MainHeader className="SubHeader">{state.headerUX}</MainHeader>
    </header>
<article className="DescriptionHeader">
<p className="TextDescriptionHeder">
{state.descriptUX}</p>
</article>
<div className="BookFreeConsultationDiv">
<BookFreeConsultation title='Book Free Consultation' />
</div>
    </div>
        <div className="jarTwo">
            <img className="ImgRight" src={API_URL + state.imgUX} alt="UX_UI_Design" />
        </div>
    </div>

    </div>
    <header>
<SubHeader>{state.subHeadingUX}</SubHeader>
    </header>
<main className="ContainerBC">
    <section className="item">

         <HeaderTile>{state.headingTileOne}</HeaderTile>
<p className="TextTile">{state.descriptTileOne}</p>
<ButtonLearnMore/>
    </section>
    <section className="item">
    <header>
         <HeaderTile>{state.headingTileOne}</HeaderTile>
    </header>
    <article>
<p className="TextTile">{state.descriptTileTwo}</p>
    </article>
<ButtonLearnMore/>
    </section>
    <section className="item">
         <HeaderTile>{state.headingTileThree}</HeaderTile>
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


            <section className="TileContactUs">
            <div className="divheadertile">
                <div className="divQuestion" >{state.headingTileContact}</div>
            </div>
            <text className="TextTile"></text>
            <div className="DivContactUs">
                <ContactUs title="Contact Us" />
                <img src={API_URL + state.imgBubbleUX} alt="BubbleContactUs"
                    className="ImgBubbleContactUs"
                />
            </div>
    </section>





</main>
<footer>
<Footer/>
</footer>
</Card>

);
};

export default UxUiDesign;