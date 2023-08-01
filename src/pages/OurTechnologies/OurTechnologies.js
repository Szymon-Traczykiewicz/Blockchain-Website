import React, { useState, useEffect } from "react";
import './OurTechnologies.css';
import Header from "../../UI/HeaderWithSmallLogo";
import { Link as ScrollLink } from "react-scroll";
import axios from "axios";
import { API_URL } from "../../const";



const OurTechnologies = () => {

const [state, setState] = useState({
    headerOurTechnologies:'',
    textTileOne:'',
    textTileTwo:'',
    textTileThree:'',
    imgTileOneTechnologies:'',
    imgTileTwoTechnologies:'',
    imgTileThreeTechnologies:'',
    imgTopLeftCorner:'',
    imgBottomRightCorner:'',
})

    useEffect(() => {
        const controller = new AbortController();
        axios
            .get('/api/our-technologies?populate=*', {
                signal: controller.signal,
            })
            .then(({ data: response }) => {
                const {
                    HeaderOurTechnologies, TextTileOne,
                    TextTileTwo,
                    TextTileThree,
                    ImgTileOneTechnologies: { data: ImgTileOneTechnologiesData },
                    ImgTileTwoTechnologies: { data: ImgTileTwoTechnologiesData },
                    ImgTileThreeTechnologies: { data: ImgTileThreeTechnologiesData },
                    TopLeftCorner: { data: TopLeftCornerData },
                    BottomRightCorner: { data: BottomRightCornerData },
                 
                } = response?.data?.[0]?.attributes || {};
                setState({
                    headerOurTechnologies: HeaderOurTechnologies || "",
                    textTileOne: TextTileOne || "",
                    textTileTwo: TextTileTwo || "",
                    textTileThree: TextTileThree || "",
                imgTileOneTechnologies:
                        ImgTileOneTechnologiesData?.[0]?.attributes?.url || "",
                imgTileTwoTechnologies:
                        ImgTileTwoTechnologiesData?.[0]?.attributes?.url || "",
                imgTileThreeTechnologies:
                        ImgTileThreeTechnologiesData?.[0]?.attributes?.url || "",
                imgTopLeftCorner:
                    TopLeftCornerData?.[0]?.attributes?.url || "",
                imgBottomRightCorner:
                    BottomRightCornerData?.[0]?.attributes?.url || "",
                });
            })
            .catch(console.error);

        return () => controller.abort();
    }, []);

    return(
<main id="OurTechnologies" className="MainContainer" > 
<header> 
<Header className="headerourtech" > {state.headerOurTechnologies}
</Header>
</header>
   <ScrollLink to="OurTechnologies" smooth={true} duration={500}/>
            <img src={API_URL + state.imgTopLeftCorner} alt="TopLeftCorner" className="TopLeftCorner"/>
                <img src={API_URL + state.imgBottomRightCorner} alt="BottomRightCorner" className="BottomRightCorner"/>
<div className = "ContainerTechnologies" >
 
    <section className="TileTechnologies">
    <img src={API_URL + state.imgTileOneTechnologies} alt="ImgTileOneTechnologies" className="ImgTileOneTechnologies" />
    <article className="TextTileTechnologies">
<p dangerouslySetInnerHTML={{ __html: state.textTileOne }} />
    </article>
   </section>

 <section className="TileTechnologies">
  <img src={API_URL + state.imgTileTwoTechnologies} alt="ImgTileTwoTechnologies" className="ImgTileTwoTechnologies" />
    <article className="TextTileTechnologies">
<p dangerouslySetInnerHTML={{ __html: state.textTileTwo }} />
    </article>
   </section>

         <section className="TileTechnologies">
    <img src={API_URL + state.imgTileThreeTechnologies} alt="ImgTileThreeTechnologies" className="ImgTileThreeTechnologies" />
    <article className="TextTileTechnologies">
<p dangerouslySetInnerHTML={{ __html: state.textTileThree }} />
    </article>

    </section>

</div>
</main>
    );
    
};
export default OurTechnologies;

 
