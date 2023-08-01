import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../../const";
import { Link } from 'react-router-dom';
import './Blog.css';
import ButtonTag from "./ButtonTag";
import Footer from "../../UI/Footer";
import Card from "../../UI/Card";
import one from "../../image/Blog/1.png";
import two from "../../image/Blog/2.jpg";
import three from "../../image/Blog/3.png";
import four from "../../image/Blog/4.png";
import five from "../../image/Blog/5.png";
import six from "../../image/Blog/6.gif";
import seven from "../../image/Blog/7.png";
import eight from "../../image/Blog/8.png";
import nine from "../../image/Blog/9.png";



const HeadersArticles = (props) => {
    return (
        <div className={props.className} >
            {props.children}
        </div>
    );
};

const ButtonLernMore = (props) => {
  return (<div className="ButtonLearnMoreBlog"> 
  <a href={props.title} className="aButtonLernMoreBlog">
  Learn more ›
  </a> 
  </div>);
};
const Blog = () => {

 const [state, setState] = useState({
headerBlog: '',
headingArticleOne: '',
headingArticleTwo: '',
headingArticleThree: '',
headingArticleFour: '',
headingArticleFive: '',
headingArticleSix: '',
headingArticleSeven: '',
headingArticleEight: '',
headingArticleNine: '',
imgArticleOne: '',
imgArticleTwo: '',
imgArticleThree: '', 
imgArticleFour: '',
imgArticleFive: '',
imgArticleSix: '',
imgArticleSeven: '',
imgArticleEight: '',
imgArticleNine: '',
    });

useEffect(() => {
    const controller = new AbortController();
    axios
        .get('/api/blogs?populate=*', {
        signal: controller.signal,
      })
      .then(({ data: response }) => {
        const {
          HeaderBlog,
          HeadingArticleOne,
          HeadingArticleTwo,
          HeadingArticleThree,
          HeadingArticleFour,
          HeadingArticleFive,
          HeadingArticleSix,
          HeadingArticleSeven,
          HeadingArticleEight,
          HeadingArticleNine, 
          ImgArticleOne: { data: ImgArticleOneData },
          ImgArticleTwo: { data: ImgArticleTwoData },
          ImgArticleThree: { data: ImgArticleThreeData }, 
          ImgArticleFour: { data: ImgArticleFourData },
          ImgArticleFive: { data: ImgArticleFiveData },
          ImgArticleSix: { data: ImgArticleSixData },
          ImgArticleSeven: { data: ImgArticleSevenData },
          ImgArticleEight: { data: ImgArticleEightData },
          ImgArticleNine: { data: ImgArticleNineData },

        } = response?.data?.[0]?.attributes || {};
        setState({
          headerBlog: HeaderBlog || "",
          headingArticleOne: HeadingArticleOne || "",
          headingArticleTwo: HeadingArticleTwo || "",
          headingArticleThree: HeadingArticleThree || "",
          headingArticleFour: HeadingArticleFour || "",
          headingArticleFive: HeadingArticleFive || "",
          headingArticleSix: HeadingArticleSix || "",
          headingArticleSeven: HeadingArticleSeven || "",
          headingArticleEight: HeadingArticleEight || "",
          headingArticleNine: HeadingArticleNine || "",
          imgArticleOne: ImgArticleOneData?.[0]?.attributes?.url || "",
          imgArticleTwo: ImgArticleTwoData?.[0]?.attributes?.url || "",
          imgArticleThree: ImgArticleThreeData?.[0]?.attributes?.url || "",
          imgArticleFour: ImgArticleFourData?.[0]?.attributes?.url || "",
          imgArticleFive: ImgArticleFiveData?.[0]?.attributes?.url || "",
          imgArticleSix: ImgArticleSixData?.[0]?.attributes?.url || "",
          imgArticleSeven: ImgArticleSevenData?.[0]?.attributes?.url || "",
          imgArticleEight: ImgArticleEightData?.[0]?.attributes?.url || "",
          imgArticleNine: ImgArticleNineData?.[0]?.attributes?.url || "",

});
      })
      .catch(console.error);

    return () => controller.abort();
  }, []);


    return (
   

<Card className="CardBlog">


    <div className="DivHeader"><h1 className="Headerblog">{state.headerBlog}</h1></div>

<div className="ButtonsTags">
    <ButtonTag>Blockchain</ButtonTag>
    <ButtonTag>FinTech and Banking</ButtonTag>
    <ButtonTag>DeFi</ButtonTag>
    <ButtonTag>Design</ButtonTag>
    <ButtonTag>Development</ButtonTag>
    <ButtonTag>NFT</ButtonTag>
    <ButtonTag>Tokenization</ButtonTag>
    <ButtonTag>Tokenization</ButtonTag>
    <ButtonTag>Tokenization</ButtonTag>
</div>
<main className="WrappedArticles">
  <section className="SingleTileArticle">
 <Link  to="/Blog/first" >
            <img className="SingleImage" src={API_URL + state.imgArticleOne} alt="one"/>
  </Link>
            <HeadersArticles className='HeadersArticles'>
 <Link  to="/Blog/first" >

{state.headingArticleOne}
  </Link>
            </HeadersArticles>
  <Link to="/Blog/first" >
            <ButtonLernMore />
  </Link>

        </section>
        <section className="SingleTileArticle">
          <Link className="linkImg"  to="/Blog/second" >
            <img className="SingleImage" src={API_URL + state.imgArticleTwo} alt="two"/>
          </Link>
            <HeadersArticles className='HeadersArticles'>
          <Link to="/Blog/second" >
{state.headingArticleTwo}
          </Link>
            </HeadersArticles>
  <Link to="/Blog/second" >
             <ButtonLernMore />
  </Link>
        </section>
        <section className="SingleTileArticle">
                    <Link to="/Blog/third" >
 <img className="SingleImage" src={API_URL + state.imgArticleThree} alt="three"/>
                    </Link>

            <HeadersArticles className='HeadersArticles'>
<Link to="/Blog/third" >
{state.headingArticleThree}
</Link>
            </HeadersArticles>
  <Link to="/Blog/third" >
            <ButtonLernMore />
  </Link>
        </section>


        <section className="SingleTileArticle">
  <Link to="/Blog/four" >
            <img className="SingleImage" src={API_URL + state.imgArticleFour} alt="four"/>
  </Link>
            <HeadersArticles className='HeadersArticles'>
  <Link to="/Blog/four" >
{state.headingArticleFour}
  </Link>
            </HeadersArticles>
  <Link to="/Blog/four" >
            <ButtonLernMore />
  </Link>
        </section>
        <section className="SingleTileArticle">
  <Link to="/Blog/five" >
            <img className="SingleImage" src={API_URL + state.imgArticleFive} alt="five"/>
  </Link>
            <HeadersArticles className='HeadersArticles'>
  <Link to="/Blog/five" >
{state.headingArticleFive}
            
  </Link>
            </HeadersArticles>
  <Link to="/Blog/five" >
            <ButtonLernMore />
  </Link>
        </section>
        <section className="SingleTileArticle">
  <Link to="/Blog/six" >
            <img className="SingleImage" src={API_URL + state.imgArticleSix} alt="six"/>
  </Link>
            <HeadersArticles className='HeadersArticles'>
  <Link to="/Blog/six" >
{state.headingArticleSix}
  </Link>
            </HeadersArticles>
  <Link to="/Blog/six" >
            <ButtonLernMore />
  </Link>
        </section>


        <section className="SingleTileArticle">
  <Link to="/Blog/seven" >
            <img className="SingleImage" src={API_URL + state.imgArticleSeven} alt="seven"/>
  </Link>
            <HeadersArticles className='HeadersArticles'>
  <Link to="/Blog/seven" >
{state.headingArticleSeven}
  </Link>
            </HeadersArticles>
  <Link to="/Blog/seven" >
            <ButtonLernMore />
  </Link>
        </section>
        <section className="SingleTileArticle">
  <Link to="/Blog/eight" >
              <img className="SingleImage" src={API_URL + state.imgArticleEight} alt="eight"/>
  </Link>
            <HeadersArticles className='HeadersArticles'>
  <Link to="/Blog/eight" >
{state.headingArticleEight}
 </Link>
            </HeadersArticles>
  <Link to="/Blog/eight" >
            <ButtonLernMore />
  </Link>
        </section>
        <section className="SingleTileArticle">
  <Link to="/Blog/nine" >
            <img className="SingleImage" src={API_URL + state.imgArticleNine} alt="nine"/>
  </Link>
            <HeadersArticles className='HeadersArticles'>
  <Link to="/Blog/nine" >
{state.headingArticleNine}
  </Link>
            </HeadersArticles>
  <Link to="/Blog/nine" >
            <ButtonLernMore />
  </Link>
        </section>
</main>

<Footer/>
</Card>

);
};
 export default Blog;