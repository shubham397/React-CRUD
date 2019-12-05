import React, { useState, useEffect } from "react";
import axios from "axios";
import url from '../../utils/URL';
import Card from "../common/components/Card";

function countryContainer() {

  const [name, setName] = useState(0);
  const [capital, setCapital] = useState(0);
  const [region, setRegion] = useState(0);
  const [population, setPopulation] = useState(0);
  const [area, setArea] = useState(0);
  const [flag, setFlag] = useState(0);


  useEffect(() => {
    axios.get(url.COUNTRY.NAME)
      .then(res => {
        const country = res.data;
        const selectCountry = document.getElementById("country");
        for (let i = 0; i < country.length; i++) {
          const option = document.createElement("option");
          option.text = country[i].name;
          selectCountry.add(option);
        }

      })
  });

  function getCountryDetail(event) {
    const countryName = event.target.value;
    axios.get(`https://restcountries.eu/rest/v2/name/${countryName}?fullText=true`)
      .then(res => {
        const countryDetail = res.data[0];
        console.log(countryDetail);
        setName(countryDetail.name);
        setCapital(countryDetail.capital);
        setRegion(countryDetail.region);
        setPopulation(countryDetail.population);
        setArea(countryDetail.area);
        setFlag(countryDetail.flag);
      })
  }

  const divStyle = {
    "margin-left": "5%",
    "margin-top": "5%",
  };

  const selectStyle={
    "width": "100%",
    "height": "26px",
    "margin-bottom": "10px",
    "border-radius":"5px"
  }

  return (
    <div style={divStyle}>
      <select id='country' style={selectStyle} onChange={getCountryDetail} />
      <Card name={name} capital={capital} region={region} population={population} area={area} flag={flag} />
    </div>
  );
};

export default countryContainer;