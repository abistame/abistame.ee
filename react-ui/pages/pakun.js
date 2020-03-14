import React from 'react';
import Page from "../components/Page";
import Header from "../components/Header";
import Slider from "../components/Slider";

export default () => {
  return (
    <Page>
      <Header title="Vajab abi" />
      <Slider />
      <div className="container">
        list siia
      </div>
    </Page>
  );
};
