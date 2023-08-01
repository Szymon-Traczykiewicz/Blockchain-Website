import React, { useEffect, useState } from "react";
import "./InitialPart.css";
import axios from "axios";
import { API_URL } from "../../const";


const InitialPart = () => {
  const [state, setState] = useState({
    headerInitialPart: "",
    initialPartPicture: "",
    initialPartClutch: "",
  });

  useEffect(() => {
    const controller = new AbortController(); 
    axios
      .get('/api/initial-parts?populate=*', {
        signal: controller.signal,
      })
      .then(({ data: response }) => {
        const {
          HeaderInitialPart,
          InitialPartPicture: { data: InitialPartPictureData },
          InitialPartClutch: { data: InitialPartClutchData },
        } = response?.data?.[0]?.attributes || {};
        setState({
          headerInitialPart: HeaderInitialPart || "",
          initialPartPicture:
            InitialPartPictureData?.[0]?.attributes?.url || "",
          initialPartClutch: InitialPartClutchData?.[0]?.attributes?.url || "",
        });
      })
      .catch(console.error);

    return () => controller.abort();
  }, []);

  return (
    <section className="InitialPart">
      <header className="TextAndButton">
        <h1 className="HeaderInitialPart">{state.headerInitialPart}</h1>
        <div className="BookFreeConsultation">Book Free Consultation</div>
        <img
          src={API_URL + state.initialPartClutch}
          alt="InitialPartClutch"
          className="InitialPartClutch"
        />
      </header>

      <figure className="box">
        <img
          src={API_URL + state.initialPartPicture}
          alt="InitialPartPicture"
          className="InitialPartPicture"
        />
      </figure>
    </section>
  );
};
export default InitialPart;