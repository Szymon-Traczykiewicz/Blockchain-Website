import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../../const";
import './AboutNeti.css';

const Header = (props) => {
    const classes1 = 'Main_Header_Section ' + props.className;
    return (
 <div className="HeaderAndLogo">
<div className="HeaderAndLogo">
<div className="SmallLogo">
    <div className="circle_red"/>
    <div className="circle_red"/>
    <div className="circle_red"/>
</div>
 <h1 className={classes1}>
 {props.children}
 </h1>

</div>
</div>
    );
};

const AboutNeti = () => {

    const [state, setState] = useState({
        headerAboutNeti: '',
        descriptAboutNeti: '',
        imgBubbleRightTop: '',
        imgBubbleMiddle: '',
        aboutNetiImg: '',
       
    });

useEffect(() => {
    const controller = new AbortController();
    axios
        .get('/api/about-netis?populate=*', {
        signal: controller.signal,
      })
      .then(({ data: response }) => {
        const {
            HeaderAboutNeti, 
            DescriptAboutNeti,
           AboutNetiBubbleRightTop: { data: AboutNetiBubbleRightTopData },
           AboutNetiBubbleMiddle: { data: AboutNetiBubbleMiddleData },
           AboutNetiImg: { data: AboutNetiImgData },

        } = response?.data?.[0]?.attributes || {};
        setState({
        headerAboutNeti: HeaderAboutNeti || "",
        descriptAboutNeti: DescriptAboutNeti || "",
        imgBubbleRightTop:AboutNetiBubbleRightTopData?.[0]?.attributes?.url || "",
        imgBubbleMiddle:AboutNetiBubbleMiddleData?.[0]?.attributes?.url || "",
        aboutNetiImg:AboutNetiImgData?.[0]?.attributes?.url || "",


        });
      })
      .catch(console.error);

    return () => controller.abort();
  }, []);



    return (
<section id="AboutNeti" className="AboutNeti">
    <img src={API_URL + state.imgBubbleRightTop} alt="AboutNetiBubbleRightTop" className="ImgBackgroundR" />
    <img src={API_URL + state.imgBubbleMiddle} alt="AboutNetiBubbleMiddle" className="ImgBackgroundM" />
<div className="BOXimage">
<img src={API_URL + state.aboutNetiImg} alt="AboutNetiImg" 
     className="ImageAboutNeti" />
     </div>
<article className="HeaderAndDescript">
     <header className="DIV_header">
              <Header> {state.headerAboutNeti} </Header>
     </header>

      <div className="DescriptAboutNeti">
             <span dangerouslySetInnerHTML={{ __html: state.descriptAboutNeti }} />
 
         </div>
     </article>
</section>
    );
    
};
export default AboutNeti;