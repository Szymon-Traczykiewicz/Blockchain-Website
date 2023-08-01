import React, { useEffect, useState } from "react";
import './CaseStudy.css';

import Footer from "../../UI/Footer";
import axios from "axios";
import { API_URL } from "../../const";




const MainHeaderCaseStudy= (props) => {
    return (
        <h1 className={props.className}>
            {props.children}
        </h1>
    );
};
const HederUnderImg= (props) => {
    return (
        <h3 className={props.className}>
            {props.children}
        </h3>
    );
};
const DesriptCaseStudy= (props) => {
    return (
        <p className={props.className}>
            {props.children}
        </p>
    );
};
const ContactUs = (props) => {
    return <div style={{ display: 'flex' }}>
        <a className="ButtonContactUs" href={props.link} >{props.title} </a>
    </div>
};

const CaseStudy = () => {
const [state, setState] = useState({
headerCaseStudies: '',
desriptCaseStudy: '',
filterByTechnology: '',
filterByTag: '',
tagsByTechnology: '',
tagByTag: '',
imgTradlo: '',
imgSaaS: '',
imgMicroservices: '',
imgInteligentBot: '',
imgHighAvailability: '',
imgInfluenceVote: '',
imgEasyToIntegrate: '',
imgMultitoken: '',
imgMultuchain: '',
imgBankVote: '',
imgCleanUI: '',
imgBubbleContact: '',
headingTradlo: '',
txtSaaS: '',
txtMicroservices: '',
txtInteligentBot: '',
txtHighAvailability: '',
txtMultuchain: '',
txtMultitoken: '',
txtEasyToIntegrate: '',
txtCleanUI: '',
txtQuestionContact: '',
headingInfluenceVote: '',
headingBankVote: '',
tagsTradlo: '',
tagsInfluenceVote: '',
tagsBankVote: '',
});
    useEffect(() => {
        const controller = new AbortController();
        axios
.get('/api/case-studies/?populate=*', {
    signal: controller.signal,
})
.then(({ data: response }) => {
    const {
        HeaderCaseStudies,
        DesriptCaseStudy,
        FilterByTechnology,
        FilterByTag,
        TagsByTechnology,
        TagByTag,
        ImgTradlo: { data: ImgTradloData },
        ImgSaaS: { data: ImgSaaSData },
        ImgMicroservices: { data: ImgMicroservicesData },
        ImgInteligentBot: { data: ImgInteligentBotData },
        ImgHighAvailability: { data: ImgHighAvailabilityData },
        ImgInfluenceVote: { data: ImgInfluenceVoteData },
        ImgEasyToIntegrate: { data: ImgEasyToIntegrateData },
        ImgMultitoken: { data: ImgMultitokenData },
        ImgMultuchain: { data: ImgMultuchainData },
        ImgBankVote: { data: ImgBankVoteData },
        ImgCleanUI: { data: ImgCleanUIData },
        ImgBubbleContact: { data: ImgBubbleContactData },
        HeadingTradlo,
        SaaS,
        Microservices,
        InteligentBot,
        HighAvailability,
        Multuchain,
        Multitoken,
        EasyToIntegrate,
        CleanUI,
        QuestionContact,
        HeadingInfluenceVote,
        HeadingBankVote,
        TagsTradlo,
        TagsInfluenceVote,
        TagsBankVote,
    } = response?.data?.[0]?.attributes || {};
    setState({
        headerCaseStudies: HeaderCaseStudies || "",
        desriptCaseStudy: DesriptCaseStudy || "",
        tagsByTechnology: TagsByTechnology || "",
        filterByTag: FilterByTag || "",
        filterByTechnology: FilterByTechnology || "",
        tagByTag: TagByTag || "",
        imgTradlo: ImgTradloData?.[0]?.attributes?.url || "",
        imgSaaS:ImgSaaSData?.[0]?.attributes?.url || "",
        imgMicroservices: ImgMicroservicesData?.[0]?.attributes?.url || "",
        imgInteligentBot: ImgInteligentBotData?.[0]?.attributes?.url || "",
        imgHighAvailability: ImgHighAvailabilityData?.[0]?.attributes?.url || "",
        imgInfluenceVote: ImgInfluenceVoteData?.[0]?.attributes?.url || "",
        imgEasyToIntegrate: ImgEasyToIntegrateData?.[0]?.attributes?.url || "",
        imgMultitoken: ImgMultitokenData?.[0]?.attributes?.url || "",
        imgMultuchain: ImgMultuchainData?.[0]?.attributes?.url || "",
        imgBankVote: ImgBankVoteData?.[0]?.attributes?.url || "",
        imgCleanUI: ImgCleanUIData?.[0]?.attributes?.url || "",
        imgBubbleContact: ImgBubbleContactData?.[0]?.attributes?.url || "",
        headingTradlo: HeadingTradlo || "",
        txtSaaS: SaaS || "",
        txtMicroservices: Microservices || "",
        txtInteligentBot: InteligentBot || "",
        txtHighAvailability: HighAvailability || "",
        txtMultuchain: Multuchain || "",
        txtMultitoken: Multitoken || "",
        txtEasyToIntegrate: EasyToIntegrate || "",
        txtCleanUI: CleanUI || "",
        txtQuestionContact: QuestionContact || "",
        headingInfluenceVote: HeadingInfluenceVote || "",
        headingBankVote: HeadingBankVote || "",
        tagsTradlo: TagsTradlo || "",
        tagsInfluenceVote: TagsInfluenceVote || "",
        tagsBankVote: TagsBankVote || "",
    });
})
.catch(console.error);

        return () => controller.abort();
    }, []);


    return (
<div>

<div className="ContainerCaseStudy">
    <div className="BoxLeft">

<MainHeaderCaseStudy className='MainHeaderCaseStudy'>
{state.headerCaseStudies}
</MainHeaderCaseStudy>
<DesriptCaseStudy className='DesriptCaseStudy'>
{state.desriptCaseStudy}
</DesriptCaseStudy>
<div className="DiscussButton">
    <a href="https://www.neti-soft.com/contact"   className="textDiscussButton">
        Let's Discuss Your Idea
    </a>
</div>
    </div>
    <div className="BoxRight">
    <h3 className="SmallerHeader">{state.filterByTechnology}</h3>
    <div className="DivWrappedTags">

    {state.tagsByTechnology.split('\n').map((item, index) => (
    <div className="TextButtonTag" key={index}>{item.replace(/(<([^>]+)>)/gi, '')}</div> ))}

    </div>
        <h3 className="SmallerHeader">{state.filterByTag}</h3>
<div className="DivWrappedTags">

{state.tagByTag.split('\n').map((item, index) => (
    <div className="TextButtonTag" key={index}>{item.replace(/(<([^>]+)>)/gi, '')}</div> ))}
    
</div>
</div>
</div>
<div className="ContainerWithFoto">
    <div className="BoxFotoTitle">
    
<img className="ImageLeftSide" src={API_URL + state.imgTradlo} alt="ImgTradlo"/>

<div className="DivHeaderUnderImg">
    <HederUnderImg className='HederUnderImg'>
{state.headingTradlo}
    </HederUnderImg>
</div>

        
    </div>
<section className="BoxPicturesTags">
    <div className="DivAroundImages">
    <div className="PictureAndFigcaption">
        <img src={API_URL + state.imgSaaS} alt="SaaS" className="SmallPicture"/>
        <figcaption className="FigCaption">{state.txtSaaS}</figcaption>

    </div>
    <div className="PictureAndFigcaption">
        <img src={API_URL + state.imgMicroservices} alt="Microservices" className="SmallPicture"/>
         <figcaption className="FigCaption">{state.txtMicroservices}</figcaption>
    </div>
    <div className="PictureAndFigcaption">
        <img src={API_URL + state.imgInteligentBot} alt="InteligentBot" className="SmallPicture"/>
        <figcaption className="FigCaption">{state.txtInteligentBot}</figcaption>
    </div>
    <div className="PictureAndFigcaption">
        <img src={API_URL + state.imgHighAvailability} alt="HighAvailability" className="SmallPicture"/>
          <figcaption className="FigCaption">{state.txtHighAvailability}</figcaption>
    </div>
    </div>
<div className="DivUnderSmallPic">
 {state.tagsTradlo.split('\n').map((item, index) => (
    <div className="TextButtonTag" key={index}>{item.replace(/(<([^>]+)>)/gi, '')}</div> ))}

</div>

</section>

</div>

<div className="ContainerWithFoto">
    <div className="BoxFotoTitle">
    
<img className="ImageLeftSide" src={API_URL + state.imgInfluenceVote} alt="imgInfluenceVote"/>

<div className="DivHeaderUnderImg">
    <HederUnderImg className='HederUnderImg'>
{state.headingInfluenceVote}
    </HederUnderImg>
</div>

        
    </div>
<section className="BoxPicturesTags">
    <div className="DivAroundImages">
    <div className="PictureAndFigcaption">
        <img src={API_URL + state.imgSaaS} alt="SaaS" className="SmallPicture"/>
        <figcaption className="FigCaption">{state.txtMultuchain}</figcaption>

    </div>
    <div className="PictureAndFigcaption">
        <img src={API_URL + state.imgMicroservices} alt="Microservices" className="SmallPicture"/>
         <figcaption className="FigCaption">{state.txtMultitoken}</figcaption>
    </div>
    <div className="PictureAndFigcaption">
        <img src={API_URL + state.imgInteligentBot} alt="InteligentBot" className="SmallPicture"/>
        <figcaption className="FigCaption">{state.txtEasyToIntegrate}</figcaption>
    </div>

    </div>
<div className="DivUnderSmallPic">
 {state.tagsInfluenceVote.split('\n').map((item, index) => (
    <div className="TextButtonTag" key={index}>{item.replace(/(<([^>]+)>)/gi, '')}</div> ))}
</div>

</section>

</div>

<div className="ContainerWithFoto">
    <div className="BoxFotoTitle">
    
<img className="ImageLeftSide" src={API_URL + state.imgBankVote} alt="BankVote"/>

<div className="DivHeaderUnderImg">
    <HederUnderImg className='HederUnderImg'>
{state.headingBankVote}
    </HederUnderImg>
</div>

        
    </div>
<section className="BoxPicturesTags">
    <div className="DivAroundImages">
    <div className="PictureAndFigcaption">
        <img src={API_URL + state.imgSaaS} alt="SaaS" className="SmallPicture"/>
        <figcaption className="FigCaption">{state.txtMultuchain}</figcaption>

    </div>
    <div className="PictureAndFigcaption">
        <img src={API_URL + state.imgMicroservices} alt="Microservices" className="SmallPicture"/>
         <figcaption className="FigCaption">{state.txtCleanUI}</figcaption>
    </div>
    <div className="PictureAndFigcaption">
        <img src={API_URL + state.imgInteligentBot} alt="InteligentBot" className="SmallPicture"/>
        <figcaption className="FigCaption">{state.txtInteligentBot}</figcaption>
    </div>
    <div className="PictureAndFigcaption">
        <img src={API_URL + state.imgHighAvailability} alt="HighAvailability" className="SmallPicture"/>
          <figcaption className="FigCaption">{state.txtHighAvailability}</figcaption>
    </div>
    </div>
<div className="DivUnderSmallPic">
 {state.tagsBankVote.split('\n').map((item, index) => (
    <div className="TextButtonTag" key={index}>{item.replace(/(<([^>]+)>)/gi, '')}</div> ))}


</div>

</section>

</div>


<section className="TileContactUsCaseStudy">
        <header className="divheadertileCaseStudy">
            <div className="divQuestionCaseStudy" >{state.txtQuestionContact}</div>
        </header>
    <div className="DivContactUsCaseStudy">
        <ContactUs title="Contact Us" />
        <img src={API_URL + state.imgBubbleContact} alt="BubbleContactUs"
            className="ImgBubbleContactCaseStudy"
        />
    </div>
</section>
            <Footer/>
</div>


);
};

export default CaseStudy;
