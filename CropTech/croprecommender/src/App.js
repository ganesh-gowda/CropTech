import "./App.css";
import Footer from "./footer";
import React, { useEffect, useState } from "react";
import Landing from "./landing";
import Des from "./des";
import Feature from "./feature";
import Croprecommend from "./croprecommend";
import Fertilizer from "./fertilizer";
import { inject } from "@vercel/analytics";
import { Analytics } from "@vercel/analytics/react";

function App() {
  inject();

  useEffect(() => {
    document.title = "CropTech";

    async function fetchdata() {
      try {
        const formValues = {
          Temparature: 0,
          Humidity: 0,
          Moisture: 0,
          Nitrogen: 0,
          Potassium: 0,
          Phosphorous: 0,
          Soil_Type: "Sandy",
          Crop_Type: "Sugarcane",
        };
        const response = await fetch(
          "https://karthikfertapi.onrender.com/predict",
          {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formValues),
          }
        );
        const data = await response.json();
        console.log("the prediction is ", data.result);
      } catch (error) {
        console.error("Error ", error);
      }
    }

    fetchdata();
  }, []); 

  return (
    <>
      <Analytics />
      <body id="top" className="flex h-full flex-col">
        {<Landing />}
        <section id="about" className="h-screen bg-slate-100">
          {<Des />}
        </section>
        <section id="features" className="h-screen bg-slate-00">
          {<Feature />}
        </section>
        <section id="croprecommender" className="h-screen bg-slate-00">
          {<Croprecommend />}
        </section>
        <section id="fertilizer" className="h-screen bg-slate-00">
          {<Fertilizer />}
        </section>
      </body>
      {<Footer />}
    </>
  );
}

export default App;
