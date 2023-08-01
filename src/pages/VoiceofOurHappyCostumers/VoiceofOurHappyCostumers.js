import React, { useState,useEffect } from "react";
import "./VoiceofOurHappyCostumers.css";
import Header from "../../UI/HeaderWithSmallLogo";
import Card from "../../UI/Card";
import axios from "axios";
import { API_URL } from "../../const";


const VoiceofOurHappyCostumers = () => {

const [state, setState] = useState({
    headerVoiceCostumers:'',
    slidePageOne:'',
    slidePageTwo:'',
    PersonNameFirstSlide:'',
    PersonNameTwoSlide:'',
    PersonIdentityFirstSlide:'',
    PersonIdentityTwoSlide:'',
    imgSlideOne:'',
    imgSlideTwo:'',
    arrowLeft:'',
    arrowRight:'',
});

useEffect(() => {
    const controller = new AbortController();
    axios
        .get('/api/voice-of-our-happy-costumers?populate=*', {
        signal: controller.signal,
      })
      .then(({ data: response }) => {
        const {
            HeaderVoiceCostumers,
            SlidePageOne,
            SlidePageTwo,
            personNameFirstSlide,
            personNameTwoSlide,
            personIdentityFirstSlide,
            personIdentityTwoSlide,
            ImgSlideOne: { data: ImgSlideOneData },
            ImgSlideTwo: { data: ImgSlideTwoData },
            ArrowLeft: { data: ArrowLeftData },
            ArrowRight: { data: ArrowRightData },
        } = response?.data?.[0]?.attributes || {};
        setState({
        headerVoiceCostumers: HeaderVoiceCostumers || "",
        slidePageOne: SlidePageOne || "",
        slidePageTwo: SlidePageTwo || "",
        PersonNameFirstSlide: personNameFirstSlide || "",
        PersonNameTwoSlide: personNameTwoSlide || "",
        PersonIdentityFirstSlide: personIdentityFirstSlide || "",
        PersonIdentityTwoSlide: personIdentityTwoSlide || "",
        imgSlideOne:ImgSlideOneData?.[0]?.attributes?.url || "",
        imgSlideTwo:ImgSlideTwoData?.[0]?.attributes?.url || "",
        arrowLeft:ArrowLeftData?.[0]?.attributes?.url || "",
        arrowRight:ArrowRightData?.[0]?.attributes?.url || "",

        });
      })
      .catch(console.error);

    return () => controller.abort();
  }, []);


    const [slideIndex, setSlideIndex] = useState(0);
    
    const slides = [
        <div className="divSlider2">
            <div className="divImage">
            <img className="Image1" src={API_URL + state.imgSlideOne} alt="personName"/>
            </div>
            <article key={1} className="Description">
{state.slidePageOne}
            <div className="person">
<span className="personName">{state.PersonNameFirstSlide}</span>
<span className="personIdentity">{state.PersonIdentityFirstSlide}</span>
            </div>
    
            </article>
        </div>
        ,
        <div className="divSlider2">
            <div className="divImage">
            <img className="Image2" src={API_URL + state.imgSlideTwo} alt="personName" />
            </div>
            <article key={2} className="Description">
{state.slidePageTwo}

            <div className="person">
<span className="personName">{state.PersonNameTwoSlide}</span>
<span className="personIdentity">
{state.PersonIdentityTwoSlide}
</span>
            </div>
    
    
            </article>
        </div>,
    ];
    
    const nextSlide = () => {
        if (slideIndex !== slides.length - 1) {
            setSlideIndex(slideIndex + 1);
        } else {
            setSlideIndex(0);
        }
    };
    
    const prevSlide = () => {
        if (slideIndex !== 0) {
            setSlideIndex(slideIndex - 1);
        } else {
            setSlideIndex(slides.length - 1);
        }
    };

   


    return(
   
<Card className="CardVOHC">

<header className="HeaderVOHC">
    <Header>{state.headerVoiceCostumers}</Header>
</header>

<div className="ContainerVOHC">
    <div className="PrevSlide">
        <img src={API_URL + state.arrowLeft} className="ImgPrevSlide" alt="ArrowLeft" onClick={prevSlide}/>
    </div>
<div className="boxVOHC">

<div className="BOX11">
    <div className={`HeaderAndDescription 
        ${slideIndex === 0 ? "slide-in" : "slide-out"}`}>
        {slides[slideIndex]}
    </div>
</div>

</div>

<div className="NextSlide">
    <img src={API_URL + state.arrowRight} className="ImgNextSlide" alt="ArrowRight" onClick={nextSlide}/>
</div>

</div>
</Card>

    );
};

export default VoiceofOurHappyCostumers;
