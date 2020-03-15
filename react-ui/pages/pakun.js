import React from 'react';
import Page from "../components/Page";
import Header from "../components/Header";
import Slider from "../components/Slider";
import HelpRequestListItem from "../components/HelpRequestListItem";

export default () => {
  return (
    <Page>
      <Header title="Vajab abi" />
      <Slider />
      <div className="container">
        <HelpRequestListItem text="Vajan abi käsimüügi-ravimite toomisel pikk tekst ellipsib ära" />
        <HelpRequestListItem text="Vajan abi käsimüügi-ravimite toomisel pikk tekst ellipsib ära" />
        <HelpRequestListItem text="Vajan abi käsimüügi-ravimite toomisel pikk tekst ellipsib ära" />
        <HelpRequestListItem text="Vajan abi käsimüügi-ravimite toomisel pikk tekst ellipsib ära" />
      </div>
    </Page>
  );
};
