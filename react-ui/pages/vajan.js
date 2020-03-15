import React from "react";

import Page from "../components/Page";
import Header from "../components/Header";
import Input from "../components/Input";
import Button from "../components/Button";

const StatusText = ({ children, idx }) => (
  <p style={{ position: "relative" }}>
    {children}
    <div style={{ position: "absolute", fontSize: 12, top: 4, right: 0 }}>{idx + 1}/3</div>
  </p>
);

export default () => {
  const [stageIdx, setStageIdx] = React.useState(0);

  let stageEl = null;
  switch (stageIdx) {
    case 0:
      stageEl = (
        <>
          <StatusText idx={0}>
            Jätkamiseks palun sisesta SMS'ga saadud kood.
          </StatusText>
          <Input placeholder="XXX-XXX" />
          <Button onClick={() => setStageIdx(stageIdx + 1)}>
            Kinnita kood <img src="/arrow.png" />
          </Button>
        </>
      );
      break;
    case 1:
      stageEl = (
        <>
          <StatusText idx={1}>
            Kirjelda oma abivajadust võimalikult täpselt.
          </StatusText>
          <Input
            multiline
            placeholder="Olen Tartus karantiinis ja ei saa liikuda. Mul on vaja, et keegi Kohilas mu koertele süüa viiks."
          />
          <Button onClick={() => setStageIdx(stageIdx + 1)}>
            Kinnita <img src="/arrow.png" />
          </Button>
        </>
      );
      break;
    case 2:
      stageEl = (
        <>
          <StatusText idx={2}>
            Sisesta oma asukoht. Täpse aadressi saad abi pakkujaga kokku
            leppida.
          </StatusText>
          <Input placeholder="Hageri, Kohila vald" />
          <Button onClick={() => setStageIdx(stageIdx + 1)}>
            Postita abipalve <img src="/arrow.png" />
          </Button>
        </>
      );
      break;
  }

  return (
    <Page>
      <Header isRequest />
      <div className="container">{stageEl}</div>
    </Page>
  );
};
