import React, { useEffect, useState } from "react";
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
    return <div style={{ display: 'flex' }}>
        <a className="ButtonContactUs" href={props.link} >{props.title} </a>
    </div>
};

const SoftwareDevelopment = () => {


    const [state, setState] = useState({
        headerSD: '',
        descriptSD: '',
        imgSD: '',
        subHeadingSD: '',
        headingTileOne: '',
        headingTileTwo: '',
        headingTileThree: '',
        headingTileFour: '',
        headingTileFive: '',
        headingTileContact: '',
        imgBubbleSD: '',
        descriptTileOne: '',
        descriptTileTwo: '',
        descriptTileThree: '',
        descriptTileFour: '',
        descriptTileFive: '',

    })

    useEffect(() => {
        const controller = new AbortController();
        axios
            .get('/api/software-developments?populate=*', {
                signal: controller.signal,
            })
            .then(({ data: response }) => {
                const {
                    DescriptSD, HeaderSD,
                    SubHeadingSD,
                    HeadingTileOne,
                    HeadingTileTwo,
                    HeadingTileThree,
                    HeadingTileFour,
                    HeadingTileFive,
                    HeadingTileContact,
                    DescriptTileOne,
                    DescriptTileTwo,
                    DescriptTileThree,
                    DescriptTileFour,
                    DescriptTileFive,
                    ImgSD: { data: ImgSDData },
                    ImgBubbleSD: { data: ImgBubbleSDData },
                } = response?.data?.[0]?.attributes || {};
                setState({
                    headerSD: HeaderSD || '',
                    descriptSD: DescriptSD || '',
                    subHeadingSD: SubHeadingSD || '',
                    headingTileOne: HeadingTileOne || '',
                    headingTileTwo: HeadingTileTwo || '',
                    headingTileThree: HeadingTileThree || '',
                    headingTileFour: HeadingTileFour || '',
                    headingTileFive: HeadingTileFive || '',
                    headingTileContact: HeadingTileContact || '',
                    descriptTileOne: DescriptTileOne || '',
                    descriptTileTwo: DescriptTileTwo || '',
                    descriptTileThree: DescriptTileThree || '',
                    descriptTileFour: DescriptTileFour || '',
                    descriptTileFive: DescriptTileFive || '',
                    imgSD: ImgSDData?.[0]?.attributes?.url || "",
                    imgBubbleSD: ImgBubbleSDData?.[0]?.attributes?.url || "",


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
                            <MainHeader className="SubHeader">{state.headerSD}</MainHeader>
                        </header>
                        <article className="DescriptionHeader">
                            <p className="TextDescriptionHeder">
                                {state.descriptSD}
                            </p>
                        </article>
                        <header className="BookFreeConsultationDiv">
                            <BookFreeConsultation title='Book Free Consultation' />
                        </header>
                    </div>
                    <div className="jarTwo">
                        <img className="ImgRight" src={API_URL + state.imgSD} alt="SoftwareDevelopment" />
                    </div>
                </div>

            </section>
            <header>
                <SubHeader>{state.subHeadingSD}</SubHeader>
            </header>
            <div className="ContainerBC">
                <section className="item">
                    <header>
                        <HeaderTile>{state.headingTileOne}</HeaderTile>
                    </header>
                    <article>
                        <p className="TextTile">{state.descriptTileOne}
                        </p>
                    </article>
                    <ButtonLearnMore />
                </section>
                <section className="item">
                    <header>
                        <HeaderTile>{state.headingTileTwo}</HeaderTile>
                    </header>
                    <article>
                        <p className="TextTile">{state.descriptTileTwo}</p>
                    </article>
                    <ButtonLearnMore />
                </section>
                <section className="item">
                    <header>
                        <HeaderTile>{state.headingTileThree}</HeaderTile>
                    </header>
                    <article>
                        <p className="TextTile">{state.descriptTileThree}</p>
                    </article>
                    <ButtonLearnMore />
                </section>
                <section className="item">
                    <HeaderTile>{state.headingTileFour}</HeaderTile>
                    <article>
                        <p className="TextTile">{state.descriptTileFour}</p>
                    </article>
                    <ButtonLearnMore />
                </section>
                <section className="item">
                    <header>
                        <HeaderTile>{state.headingTileFive}</HeaderTile>
                    </header>
                    <article>
                        <p className="TextTile">{state.descriptTileFive}</p>
                    </article>
                    <ButtonLearnMore />
                </section>


                <section className="TileContactUs">
                    <div className="divheadertile">
                        <header>
                            <div className="divQuestion" >{state.headingTileContact}</div>
                        </header>
                    </div>

                    <div className="DivContactUs">
                        <ContactUs title="Contact Us" />
                        <img src={API_URL + state.imgBubbleSD} alt="BubbleContactUs"
                            className="ImgBubbleContactUs"
                        />
                    </div>
                </section>





            </div>
        </main>
        <footer>
            <Footer />
        </footer>
    </Card>

);
};
export default SoftwareDevelopment;
