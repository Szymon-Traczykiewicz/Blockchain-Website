import React, { useEffect, useState } from 'react';
import './OurOffer.css';
import Header from "../../UI/HeaderWithSmallLogo";
import { API_URL } from '../../const';
import { Link } from "react-router-dom";
import axios from 'axios';

const SubHeading = (props) => {
  return <div className="SubHeadingOffer">{props.children}</div>;
};

const OurServices = () => {

  
  const ButtonLearnMore = (props) => {
    return (
      <div className="ButtonLearnMore1">
        <a href={props.title} className="aButtonLearnMore">{state.buttonLearnMore}</a>
      </div>
    );
  };


  
const [state, setState] = useState({
  headerOurOffer: '',
  headerTileOne: '',
  headerTileTwo: '',
  headerTileThree: '',
  headerTileFour: '',
  headerBlockContactUs: '',
  buttonLearnMore: '',
  listTileOne: '',
  listTileTwo: '',
  listTileThree: '',
  listTileFour: '',
  pictureTileOne:'',
  pictureTileTwo:'',
  pictureTileThree:'',
  pictureTileFour:'',
  bubbleImg:'',
  });

  useEffect(() => {
    const controller = new AbortController();
    axios
      .get('/api/our-offers?populate=*', {
        signal: controller.signal,
      })
      .then(({ data: response }) => {
        const {
          HeaderOurOffer, HeaderTileOne,
          HeaderTileTwo, HeaderTileThree,
          HeaderTileFour, ButtonLearnMore,
          ListTileOne, HeaderBlockContactUs,
          ListTileTwo, ListTileThree, ListTileFour,
          PictureTileOne: { data: PictureTileOneData },
          PictureTileTwo: { data: PictureTileTwoData },
          PictureTileThree: { data: PictureTileThreeData },
          PictureTileFour: { data: PictureTileFourData },
          BubbleImg: { data: BubbbleData },
        } = response?.data?.[0]?.attributes || {};
        setState({
          headerOurOffer: HeaderOurOffer || "",
          headerTileOne: HeaderTileOne || "",
          headerTileTwo: HeaderTileTwo || "",
          headerTileThree: HeaderTileThree || "",
          headerTileFour: HeaderTileFour || "",
          headerBlockContactUs:HeaderBlockContactUs || "",
          buttonLearnMore: ButtonLearnMore || "",
          listTileOne: ListTileOne || "",
          listTileTwo: ListTileTwo || "",
          listTileThree: ListTileThree || "",
          listTileFour: ListTileFour || "",
          pictureTileOne:
            PictureTileOneData?.[0]?.attributes?.url || "",
          pictureTileTwo:
            PictureTileTwoData?.[0]?.attributes?.url || "",
            pictureTileThree:PictureTileThreeData?.[0]?.attributes.url || "",
            pictureTileFour:PictureTileFourData?.[0]?.attributes.url || "",
            bubbleImg: BubbbleData?.[0]?.attributes?.url || "",

        });
      })
      .catch(console.error);

    return () => controller.abort();
  }, []);

  return (
    <div id="OurOffer" className="BoxWithAll">
      <header className='Header'><Header>{state.headerOurOffer}</Header></header>

      <main className="FourTileGrid">
        <section className="BoxOne">
          <div className="HeadingAndSubsection">
            <SubHeading className="SubHeadingOffer">{state.headerTileOne}</SubHeading>
     <ul style={{ margin: 0 }}>
  {state.listTileOne.split('\n').map((item, index) => (
      <li className="lioffer" key={index}>
        <span className="spanoffer">{item.replace(/(<([^>]+)>)/gi, '')}</span>
              </li>
            ))}
</ul>
<Link to="/Offer/BlockchainConsulting">

<ButtonLearnMore/>
</Link>
</div>
<div className="div">
<img className="ImgSingleBoxOne" alt="ImgBlockchainConsulting" 
src={API_URL + state.pictureTileOne} />
</div>
 </section>

 <section className="BoxTwo">
<div className="HeadingAndSubsection">
<SubHeading className="SubHeadingOffer">{state.headerTileTwo}</SubHeading>
            <ul style={{margin:0}}>
              {state.listTileTwo.split('\n').map((item, index) => (
                <li className="lioffer" key={index}>
                  <span className="spanoffer">{item.replace(/(<([^>]+)>)/gi, '')}</span>
                </li>
              ))}
            </ul>
<Link to="/Offer/BlockchainDevelopment">
<ButtonLearnMore/>
</Link>
</div>
<div className="div">
            <img className="ImgSingleBoxTwo" alt="ImgBlockchainDevelopment" src={API_URL + state.pictureTileTwo} />
</div>
 </section>

 <section className="BoxThree">
<div className="HeadingAndSubsection">
<SubHeading className="SubHeadingOffer">{state.headerTileThree}</SubHeading>
<ul style={{margin:0}}>
              {state.listTileThree.split('\n').map((item, index) => (
                <li className="lioffer" key={index}>
                  <span className="spanoffer">{item.replace(/(<([^>]+)>)/gi, '')}</span>
                </li>
              ))}
            </ul>
<Link to="/Offer/SoftwareDevelopment">
<ButtonLearnMore/>
</Link>
</div>
<div className="div">
            <img className="ImgSingleBoxThree" alt="ImgSoftwareDevelopment" src={API_URL + state.pictureTileThree} />
</div>
 </section>

 <section className="BoxFour">
<div className="HeadingAndSubsection">
<SubHeading className="SubHeadingOffer">{state.headerTileFour}</SubHeading>
            <ul style={{ margin: 0 }}>
              {state.listTileFour.split('\n').map((item, index) => (
                <li className="lioffer" key={index}>
                  <span className="spanoffer">{item.replace(/(<([^>]+)>)/gi, '')}</span>
                </li>
              ))}
            </ul>
<Link to="/Offer/UxUiDesign">
<ButtonLearnMore/>
</Link>
</div>
<div className="div">
            <img className="ImgSingleBoxFour" alt="ImgUX_UIdesign" src={API_URL + state.pictureTileFour} />
</div>

 </section>

</main>
<div className="BlockContactUs">
        <img src={API_URL + state.bubbleImg} alt="bubble" className="Imgbubble"/>
        <h3 className='headerContactUs'>{state.headerBlockContactUs}</h3>
        <a className="aContactUsOffer" href='https://www.neti-soft.com/contact' > Contact Us </a>
</div>
</div>
);
};
export default OurServices;


