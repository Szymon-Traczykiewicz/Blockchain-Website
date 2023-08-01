import React from "react";
import './Footer.css';
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { API_URL } from "../const";




const Footer = () => {

    const [state, setState] = useState({
        nameCompany: '',
        addressCompany: '',
        nIPnumber: '',
        h4Services: '',
        servicesBD: '',
        servicesBC: '',
        servicesSO: '',
        servicesMVP: '',
        servicesTE_BL: '',
        servicesUI_UX: '',
        servicesAP: '',
        textCopyright: '',
        imgClutch: '',
        imgBlockchainTechnologyCompanies: '',
        imgSocialMediaLinkedin: '',
        imgSocialMediaTelegram: '',
        imgSocialMediaMediumBrands: '',
        imgSocialMediaFacebook: '',
        imgSocialMediaTwitter: '',
        imgSocialMediaInstagram: '',
        imgLogoNeti: '',
    });

    useEffect(() => {
    const controller = new AbortController();
    axios
        .get('/api/footers?populate=*', {
        signal: controller.signal,
      })
      .then(({ data: response }) => {
        const {
            NameCompany, AddressCompany,
            NIPnumber, H4Services,
            ServicesBD, ServicesSO, ServicesBC,
            ServicesMVP, ServicesTE_BL,
            ServicesUI_UX, ServicesAP,
            TextCopyright,
            ImgClutch: { data: ImgClutchData },
            BlockchainTechnologyCompanies: { data: BlockchainTechnologyCompaniesData },
            SocialMediaLinkedin: { data: SocialMediaLinkedinData },
            SocialMediaTelegram: { data: SocialMediaTelegramData },
            SocialMediaMediumBrands: { data: SocialMediaMediumBrandsData },
            SocialMediaFacebook: { data: SocialMediaFacebookData },
            SocialMediaTwitter: { data: SocialMediaTwitterData },
            SocialMediaInstagram: { data: SocialMediaInstagramData },
            ImgLogoNeti: { data: ImgLogoNetiData },
        } = response?.data?.[0]?.attributes || {};
        setState({
nameCompany: NameCompany || "",
addressCompany: AddressCompany || "",
nIPnumber: NIPnumber || "",
h4Services: H4Services || "",
servicesBD: ServicesBD || "",
servicesBC: ServicesBC || "",
servicesSO: ServicesSO || "",
servicesMVP: ServicesMVP || "",
servicesTE_BL: ServicesTE_BL || "",
servicesUI_UX: ServicesUI_UX || "",
servicesAP: ServicesAP || "",
textCopyright: TextCopyright || "",
imgClutch:ImgClutchData?.[0]?.attributes?.url || "",
imgBlockchainTechnologyCompanies:BlockchainTechnologyCompaniesData?.[0]?.attributes?.url || "",
imgSocialMediaLinkedin:SocialMediaLinkedinData?.[0]?.attributes?.url || "",
imgSocialMediaTelegram:SocialMediaTelegramData?.[0]?.attributes?.url || "",
imgSocialMediaMediumBrands:SocialMediaMediumBrandsData?.[0]?.attributes?.url || "",
imgSocialMediaFacebook:SocialMediaFacebookData?.[0]?.attributes?.url || "",
imgSocialMediaTwitter:SocialMediaTwitterData?.[0]?.attributes?.url || "",
imgSocialMediaInstagram:SocialMediaInstagramData?.[0]?.attributes?.url || "",
imgLogoNeti:ImgLogoNetiData?.[0]?.attributes?.url || "",
   
        });
      })
      .catch(console.error);

    return () => controller.abort();
  }, []);


    return (


<div className="Footer">
<div className="ContainerFooter">
    <div className="AddressAndLogo" >
    <div className="LogoNetiFooter">
        <Link to='/'
        rel="noopener noreferrer">
        <img src={API_URL + state.imgLogoNeti} alt="LogoNeti"/>
        </Link>
    </div>
        <div className="FooterAddress">
        <span>{state.nameCompany}</span>
        <span>{state.addressCompany}</span>
        <span>{state.nIPnumber}</span>

        </div>
    </div>
    <div className="Services" >
        <h4>{state.h4Services}</h4>
        <span> <Link rel="services link" to="/Offer/BlockchainDevelopment">
        {state.servicesBD}</Link></span>
        <span> <Link rel="services link" to="/Offer/BlockchainConsulting">
        {state.servicesBC}</Link></span>
        <span> <Link rel="services link" to="/Offer/SoftwareDevelopment">
        {state.servicesSO}</Link></span>
        <span> <Link rel="services link" to="/Offer/UxUiDesign">
        {state.servicesUI_UX}</Link></span>
       
    </div>
    <div className="TwoImage" >
        <a href="https://clutch.co/profile/neti-sp-z-oo?utm_
        source=widget&utm_medium=2&utm_campaign=widge
        t&utm_content=num_reviews&utm_term=www.neti-soft
        .com#reviews"> 
        <img src={API_URL + state.imgClutch} alt="imgClutch" className="imgClutch" />
        </a>
        <a href="https://www.goodfirms.co/company/neti-sp-z-o-o">
        <img className='ListBlockchainTechnologyCompanies' src={API_URL + state.imgBlockchainTechnologyCompanies} 
        alt="list-blockchain-technology-companies"/>
        </a>
    </div>

</div>

<div className="SocialMediaCopyRight">
    <div className="Copyright" >  
    <span className="textCopyright">{state.textCopyright}</span>
    </div>
    <div className="SocialMedia" >
    <div className="icon">

<a alt="socialmedia" href="https://pl.linkedin.com/company/neti-ltd" >
<img src={API_URL + state.imgSocialMediaLinkedin} className="IMGSocialMedia" alt="imgSocialMediaLinkedin" />
</a>
    </div>
<a alt="socialmedia" href="https://t.me/NetiSylwia" >
<img src={API_URL + state.imgSocialMediaTelegram} className="IMGSocialMedia" alt="imgSocialMediaTelegram" />
</a>
<a alt="socialmedia" href="https://medium.com/@neti-soft" >
<img src={API_URL + state.imgSocialMediaMediumBrands} className="IMGSocialMedia" alt="imgSocialMediaMediumBrands" />
</a>
<a alt="socialmedia" href="https://www.facebook.com/neti.softpl" >
<img src={API_URL + state.imgSocialMediaFacebook} className="IMGSocialMedia" alt="imgSocialMediaFacebook" />
</a>
<a alt="socialmedia" href="https://twitter.com/neti_soft" >
<img src={API_URL + state.imgSocialMediaTwitter} className="IMGSocialMedia" alt="imgSocialMediaTwitter" />
</a>
<a alt="socialmedia" href="https://www.instagram.com/netisoft/" >
<img src={API_URL + state.imgSocialMediaInstagram} className="IMGSocialMedia" alt="imgSocialMediaInstagram" />
</a>
    </div>
</div>



</div>


    );
};
export default Footer;
