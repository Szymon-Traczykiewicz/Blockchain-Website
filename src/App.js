import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link, Route, Routes} from "react-router-dom";
import { Link as ScrollLink } from 'react-scroll';
import './App.css';
import Card from "./UI/Card";
import OurTechnologies from "./pages/OurTechnologies/OurTechnologies";
import axios from "axios";
import { API_URL } from "./const";
const OurOfferAndFooter = React.lazy(() => import('./pages/OurOffer/OurOfferAndFooter'));
const CaseStudy = React.lazy(() => import ('./pages/CaseStudy/CaseStudy'));
const AboutNeti = React.lazy(() => import('./pages/AboutNeti/AboutNeti'));
const Blog = React.lazy(() => import('./pages/Blog/Blog'));
const Home = React.lazy(() => import('./pages/Home/Home'));
const FirstArticle = React.lazy(() => import('./pages/Blog/Articles/FirstArticle'));
const SecondArticle = React.lazy(() => import('./pages/Blog/Articles/SecondArticle'));
const ThirdArticle = React.lazy(() => import('./pages/Blog/Articles/ThirdArticle'));
const FourArticle = React.lazy(() => import('./pages/Blog/Articles/FourArticle'));
const FiveArticle = React.lazy(() => import('./pages/Blog/Articles/FiveArticle'));
const SixArticle = React.lazy(() => import('./pages/Blog/Articles/SixArticle'));
const SevenArticle = React.lazy(() => import('./pages/Blog/Articles/SevenArticle'));
const EightArticle = React.lazy(() => import('./pages/Blog/Articles/EightArticle'));
const NineArticle = React.lazy(() => import('./pages/Blog/Articles/NineArticle'));
const BlockchainConsulting = React.lazy(() => import('./pages/OurOffer/BlockchainConsulting'));
const BlockchainDevelopment = React.lazy(() => import('./pages/OurOffer/BlockchainDevelopment'));
const SoftwareDevelopment = React.lazy(() => import('./pages/OurOffer/SoftwareDevelopment'));
const UxUiDesign = React.lazy(() => import('./pages/OurOffer/UxUiDesign'));




const Navigation = (props) => {
  return (<div className={props.className}> {props.children} </div>);
};
//globalnie aby nie pisać później w komponentach API_URL ale w zdjęciach trzeba użyć 
axios.defaults.baseURL = API_URL

const App = ()=>{
  
  
  const [state, setState] = useState({
    technologiesTxT: '',
    ourOfferTxT: '',
    aboutUsTxT: '',
    careerTxT: '',
    caseStudiesTxT: '',
    blogTxT: '',
    imgLogoNeti: '',
  }) 
  
  
  
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const tabsData = [
    {
      label: state.technologiesTxT,
      link: '/',
      ScrollLink:'OurTechnologies'
    },
    {
      
      label: state.ourOfferTxT,
      link: '/OurOffer',
      dropdown: [
        { label: 'Blockchain Consulting', link: '/Offer/BlockchainConsulting' },
        { label: 'Blockchain Development', link: '/Offer/BlockchainDevelopment' },
        { label: 'Custom Software Development', link: '/Offer/SoftwareDevelopment' },
        { label: 'UX/UI Design', link: '/Offer/UxUiDesign' },
      ],
    },
    {
      ScrollLink: 'AboutNeti',
      label: state.aboutUsTxT,
      link: '/',
    },
    {
      label: state.careerTxT,
      link: 'https://neti-soft.career.softgarden.de/en/',
    },
    {
      label: state.caseStudiesTxT,
      link: '/CaseStudy',
    },
    {
      label: state.blogTxT,
      link: '/Blog',
    },
  ];
  
  useEffect(() => {
    const controller = new AbortController();
    axios
    .get('/api/nav-bars?populate=*', {
      signal: controller.signal,
    })
    .then(({ data: response }) => {
      const {
          TechnologiesTxT,
          OurOfferTxT,
          AboutUsTxT,
          CareerTxT,
          CaseStudiesTxT,
          BlogTxT,
          ImgLogoNeti: { data: ImgLogoNetiData },
          
        } = response?.data?.[0]?.attributes || {};
        setState({
          technologiesTxT: TechnologiesTxT || "",
          ourOfferTxT: OurOfferTxT || "",
          aboutUsTxT: AboutUsTxT || "",
          careerTxT: CareerTxT || "",
          caseStudiesTxT: CaseStudiesTxT || "",
          blogTxT: BlogTxT || "",
          imgLogoNeti:ImgLogoNetiData?.[0]?.attributes?.url || "",
          
        });
      })
      .catch(console.error);
      
      return () => controller.abort();
    }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const [isMenuOffer, setMenuOffer] = useState(false);

  const toggleMenuOffer = () => {
    setMenuOffer(!isMenuOffer);
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return(
    <Card className="cardApp">

      <div className={`menu ${isMenuOpen ? 'open' : ''}`}>
        <div className="toggle-btn" onClick={toggleMenu}>
          {isMenuOpen ? '✕' : '☰'}
        </div>
        {isMenuOpen && (
          <ul className="HamburgerMenu">
            {tabsData.map((tab, index) => (
              <li className="SingleTab" key={index}>
                {tab.dropdown && (
                  <div className="buttonOffer" style={{ color: isMenuOffer ? 'red' : '' }} onClick={toggleMenuOffer}>
                    {isMenuOffer ? '▲' : '▼'}
                  </div>
                )}
                <ScrollLink to={tab.ScrollLink} onClick={closeMenu} smooth={true} duration={1500} offset={-80}>
                  <Link onClick={toggleMenu} to={tab.link}>
                    {tab.label}
                  </Link>
                </ScrollLink>
                {tab.dropdown && isMenuOffer && (
                   <div  className={`menu ${isMenuOpen ? 'open2' : ''}`}>

                  <div className="dropdown-content">
                    {tab.dropdown.map((dropdownItem, dropdownIndex) => (
                      <li style={{ content: 'none' }} key={dropdownIndex}>
                        <Link className="aDropDown" onClick={toggleMenu} to={dropdownItem.link}>
                          {dropdownItem.label}
                        </Link>
                      </li>
                    ))}
                   </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>

  
      <>
        <nav className="TopMenu">
          <Navigation className="Navigation">

          <div className="LogoNeti">
            <Link to="/">
              <figure className="LogoNeti">
                <img src={API_URL + state.imgLogoNeti} alt="LogoNeti" />
              </figure>
            </Link>
          </div>
          <div className="TabsNavigation">
            {tabsData.map((tab, index) => (
              <ScrollLink key={index} to={tab.ScrollLink} smooth={true} duration={1500} offset={-80}>
                <li className="SingleTab">
                  <Link to={tab.link} onClick={closeMenu}>
                    {tab.label}
                  </Link>
                  {tab.dropdown && (
                    <div className="DropDown">
                      <div className="buttonOffer" style={{ color: isMenuOffer ? 'red' : '' }} onClick={toggleMenuOffer}>
                        {isMenuOffer ? '▲' : '▼'}
                      </div>
                      {tab.dropdown.map((dropdownItem, dropdownIndex) => (
                        <li key={dropdownIndex}>
                          <Link className="aDropDown" onClick={closeMenu} to={dropdownItem.link}>
                            {dropdownItem.label}
                          </Link>
                        </li>
                      ))}
                    </div>
                  )}
                </li>
              </ScrollLink>
            ))}
          </div>
          <div className="ContactUs">
            <a className="aContactUs" href="https://www.neti-soft.com/contact">
              Contact Us
            </a>
          </div>
          </Navigation>
        </nav>
        <Routes>
          <Route path="/" element={
            <React.Suspense fallback='Loading...'>
              <Home/>
            </React.Suspense>} />
          <Route path="/CaseStudy" element={
          <React.Suspense fallback= 'Loading...'>
            <CaseStudy/>
          </React.Suspense>} />
          <Route path="/AboutNeti" element={
            <React.Suspense fallback='Loading...'>
              <AboutNeti />
            </React.Suspense>} />
          <Route path="/Blog" element={
            <React.Suspense fallback='Loading...'>
              <Blog />
            </React.Suspense>} />
          <Route path="/OurOffer" element={
            <React.Suspense fallback='Loading...'>
              <OurOfferAndFooter />
            </React.Suspense>} />
          {/* <Route path="/OurOffer" element={
            <React.Suspense fallback='Loading...'>
              <OurOfferAndFooter />
            </React.Suspense>} /> */}
          <Route path="/Technologies" element={<OurTechnologies />} />
          <Route path="/Blog/first" element={
            <React.Suspense fallback='Loading...'>
              <FirstArticle />
            </React.Suspense>} />
          <Route path="/Blog/second" element={
            <React.Suspense fallback='Loading...'>
              <SecondArticle />
            </React.Suspense>} />
          <Route path="/Blog/third" element={
            <React.Suspense fallback='Loading...'>
              <ThirdArticle />
            </React.Suspense>} />
          <Route path="/Blog/four" element={
            <React.Suspense fallback='Loading...'>
              <FourArticle/>
            </React.Suspense>} />
          <Route path="/Blog/five" element={
            <React.Suspense fallback='Loading...'>
              <FiveArticle />
            </React.Suspense>} />
          <Route path="/Blog/six" element={
            <React.Suspense fallback='Loading...'>
              <SixArticle />
            </React.Suspense>} />
          <Route path="/Blog/seven" element={
            <React.Suspense fallback='Loading...'>
              <SevenArticle />
            </React.Suspense>} />
          <Route path="/Blog/eight" element={
            <React.Suspense fallback='Loading...'>
              <EightArticle />
            </React.Suspense>} />
          <Route path="/Blog/nine" element={
            <React.Suspense fallback='Loading...'>
              <NineArticle />
            </React.Suspense>} />
          <Route path="/Offer/BlockchainConsulting" element={
            <React.Suspense fallback='Loading...'>
              <BlockchainConsulting />
            </React.Suspense>} />
          <Route path="/Offer/BlockchainDevelopment" element={
            <React.Suspense fallback='Loading...'>
              <BlockchainDevelopment />
            </React.Suspense>} />
          <Route path="/Offer/SoftwareDevelopment" element={
            <React.Suspense fallback='Loading...'>
              <SoftwareDevelopment />
            </React.Suspense>} />
          <Route path="/Offer/UxUiDesign" element={
            <React.Suspense fallback='Loading...'>
              <UxUiDesign/>
            </React.Suspense>} />

      
         
        </Routes>
      </>
    </Card>
  );
};

export default App;



